import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { loadKnowledgeBase } from "./knowledgeBase.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const openAiApiKey = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

/**
 * In-memory vector index
 */
let knowledgeBase = []; // full-page docs
let vectorIndex = []; // { embedding: number[], chunk: { id, title, url, tags, content } }
let kbReady = false;

// Curated FAQ-style chunks to boost common questions
const faqChunks = [
  {
    id: "faq-greeting",
    title: "FAQ – Greetings",
    url: "/",
    tags: ["faq", "hi", "hello", "greeting"],
    content:
      "Q: Hi / Hello / Hey\n" +
      "A: Hi—I'm the E&E Medicals Regulatory Advisor (AI). I can help you quickly map your FDA / CE / SaMD pathway and what evidence you'll likely need. What best describes your product? Medical device (hardware), Software / SaMD / AI, IVD / diagnostic, Wellness app, or EU MDR / CE Mark? Describe your product and I can help estimate the regulatory path. For formal assessment, we offer strategy calls and proposals—info@eemedicals.com."
  },
  {
    id: "faq-medical-devices-types",
    title: "FAQ – Types of Medical Devices E&E Helps With",
    url: "/ai-regulatory-strategy",
    tags: ["faq", "medical devices", "which devices", "what devices", "device types"],
    content:
      "Q: What medical devices does E&E Medicals work with? Which types of medical devices?\n" +
      "A: E&E Medicals is a regulatory consulting firm—we don't manufacture or 'use' medical devices. We help clients bring theirs to market. We work with: AI imaging and diagnostic tools, digital diagnostics (SaMD), remote monitoring platforms, AI-enabled medical devices, Class I/II/III devices, IVDs, and MedTech scale-ups. We provide regulatory strategy, FDA 510(k)/PMA/De Novo support, EU MDR/IVDR compliance, and AI Act alignment. For specifics, contact info@eemedicals.com."
  },
  {
    id: "faq-ai-services",
    title: "FAQ – AI Regulatory Services",
    url: "/ai-regulatory-strategy",
    tags: ["faq", "ai", "services"],
    content:
      "Q: What AI regulatory services does E&E Medicals provide?\n" +
      "A: E&E Medicals offers end-to-end regulatory strategy and documentation support for AI-enabled medical technologies, including AI SaMD pathway strategy, FDA readiness and deficiency risk audits, PCCP authoring, AI design controls and QMSR integration, and support for European AI Act, MDR/IVDR, and FDA requirements."
  },
  {
    id: "faq-ai-act-vs-fda",
    title: "FAQ – Coordinating EU AI Act and FDA Requirements",
    url: "/ai-regulatory-strategy",
    tags: ["faq", "ai act", "fda"],
    content:
      "Q: How does E&E Medicals help coordinate EU AI Act and FDA expectations?\n" +
      "A: E&E Medicals classifies your AI system under the EU AI Act, designs risk management, QMS, vigilance and cybersecurity controls, and coordinates those with MDR/IVDR files. In parallel, the team prepares FDA pre-submission plans, evidence strategies, and Predetermined Change Control Plans so a single AI Compliance Framework supports both US and EU markets."
  },
  {
    id: "faq-which-clients",
    title: "FAQ – Typical Clients",
    url: "/about",
    tags: ["faq", "clients", "who we serve"],
    content:
      "Q: What types of companies does E&E Medicals usually work with?\n" +
      "A: E&E Medicals works with AI imaging companies, digital diagnostics developers, remote monitoring platforms, MedTech scale-ups, and drug and biologics sponsors seeking IND, NDA, ANDA, BLA, CE or CCC marks, as well as manufacturers facing FDA 483 observations, warning letters, or MDR post-market requirements."
  },
  {
    id: "faq-regulatory-pathway",
    title: "FAQ – Regulatory Pathway Navigator (510k, De Novo, PMA)",
    url: "/fda-510k-application",
    tags: ["faq", "510k", "de novo", "pma", "pathway", "do I need", "classification"],
    content:
      "Q: Do I need a 510(k)? What pathway does my device need?\n" +
      "A: 510(k) applies when your device is substantially equivalent to a predicate; De Novo for novel low-to-moderate-risk devices without a predicate; PMA for high-risk Class III devices. Key factors: Is it hardware or software? Diagnostic? Does it influence clinical decisions? Is there a predicate? For AI/SaMD, FDA pathway depends on intended use and risk. E&E performs regulatory strategy assessments to determine the most efficient pathway. CTA: Book a Regulatory Strategy Call with our team—email info@eemedicals.com or visit our website to schedule."
  },
  {
    id: "faq-510k-documents",
    title: "FAQ – 510(k) Document Requirements",
    url: "/fda-510k-application",
    tags: ["faq", "510k", "documents", "checklist", "requirements"],
    content:
      "Q: What documents are required for a 510(k)?\n" +
      "A: Key 510(k) documentation includes: Device description; Substantial equivalence comparison to predicate; Risk management (ISO 14971); Verification and validation (V&V); Software documentation (if applicable, e.g., IEC 62304); Clinical evaluation (if required); Labeling; Summary and full 510(k) in the FDA format. E&E provides gap analysis and prepares all 21 sections. CTA: Request our 510(k) preparation checklist or book a Regulatory Strategy Call—info@eemedicals.com."
  },
  {
    id: "faq-timelines",
    title: "FAQ – Regulatory Submission Timelines",
    url: "/fda-510k-application",
    tags: ["faq", "timeline", "how long", "510k", "de novo", "pma", "months", "fda review"],
    content:
      "Q: How long does FDA 510(k) / De Novo / PMA take? How long does FDA review take?\n" +
      "A: Typical timelines: 510(k): 6–9 months (FDA review often 3–6 months once submitted); De Novo: 9–12 months; PMA: 18–24 months. Preparation time varies by device complexity. E&E's two-stage approach (gap analysis then full submission) reduces rejection risk. CTA: Request a regulatory project proposal tailored to your device—info@eemedicals.com."
  },
  {
    id: "faq-cost-estimator",
    title: "FAQ – Regulatory Cost Estimator",
    url: "/fda-510k-application",
    tags: ["faq", "cost", "price", "how much", "estimator", "budget"],
    content:
      "Q: How much does FDA submission cost? Regulatory pathway cost?\n" +
      "A: Regulatory Pathway | Estimated Timeline | Estimated Cost: 510(k) 6–9 months $80k–$300k | De Novo 9–15 months $250k–$800k | PMA 18–36 months $1M+ | CE Mark 6–12 months $120k–$500k. Costs vary by device complexity, predicate strategy, and scope. E&E Medicals specializes in guiding companies through these submissions. CTA: Request a regulatory project proposal tailored to your device—info@eemedicals.com."
  },
  {
    id: "faq-predicate-device",
    title: "FAQ – What is a Predicate Device?",
    url: "/fda-510k-application",
    tags: ["faq", "predicate", "510k", "substantial equivalence"],
    content:
      "Q: What is a predicate device? What is substantial equivalence?\n" +
      "A: A predicate device is a legally marketed device (in the US) that your device is compared to for substantial equivalence in a 510(k). Substantial equivalence means your device has the same intended use and similar technological characteristics, or same intended use with different characteristics but no new questions of safety/effectiveness. If no predicate exists, you may need De Novo or PMA. E&E helps identify predicates and prepare substantial equivalence comparisons. CTA: Book a Regulatory Strategy Call—info@eemedicals.com."
  },
  {
    id: "faq-samd-definition",
    title: "FAQ – What is SaMD?",
    url: "/ai-samd-pathway",
    tags: ["faq", "samd", "software as medical device", "definition"],
    content:
      "Q: What is SaMD? What is Software as a Medical Device?\n" +
      "A: SaMD (Software as a Medical Device) is software intended to be used for one or more medical purposes—diagnosis, prevention, monitoring, treatment, or mitigation of disease—without being part of a hardware medical device. If your software provides patient-specific outputs used for diagnosis, treatment, or clinical decision-making, it is likely SaMD and requires FDA clearance (510(k) or De Novo) and/or CE Mark. E&E specializes in AI/SaMD regulatory pathways. CTA: Generate a SaMD pathway summary or book a strategy call—info@eemedicals.com."
  },
  {
    id: "faq-ce-mark-documents",
    title: "FAQ – CE Mark Document Requirements",
    url: "/ce-mark-approval",
    tags: ["faq", "ce mark", "documents", "mdr", "european"],
    content:
      "Q: What documents are required for CE Mark? EU MDR documentation?\n" +
      "A: CE Mark under EU MDR typically requires: Technical Documentation (Annex II & III); Clinical Evaluation Report (CER); Post-Market Surveillance (PMS) and PMCF plan; Risk management (ISO 14971); Declaration of Conformity; For Class IIa+ : Notified Body involvement. E&E helps build Technical Documentation and coordinate with Notified Bodies. CTA: Get a CE Mark doc list or request a CE Mark plan—info@eemedicals.com."
  },
  {
    id: "faq-guarantee-clearance",
    title: "FAQ – Can You Guarantee FDA Clearance?",
    url: "/fda-510k-application",
    tags: ["faq", "guarantee", "clearance", "objection"],
    content:
      "Q: Can you guarantee FDA clearance? Will we get approved?\n" +
      "A: No one can guarantee FDA outcomes. What E&E can do is reduce risk by aligning claims, evidence, testing, and submission strategy to FDA expectations. Our two-stage approach (gap analysis then full submission) and 266+ successful submissions help optimize success. For final regulatory determination, a formal assessment is required. CTA: Book a Regulatory Strategy Call—info@eemedicals.com."
  },
  {
    id: "faq-pricing-scope",
    title: "FAQ – Pricing and Engagement Scope",
    url: "/about",
    tags: ["faq", "pricing", "cost", "scope", "proposal"],
    content:
      "Q: How much does E&E charge? What does a proposal include?\n" +
      "A: E&E can scope engagements from a one-time pathway memo to full submission support. Costs vary by pathway (510(k), De Novo, PMA, CE Mark) and device complexity. If you share your product type and timeline, we'll recommend the most cost-effective option and provide a fixed-scope proposal. CTA: Request a regulatory project proposal—info@eemedicals.com."
  },
  {
    id: "faq-lead-qualification",
    title: "FAQ – Regulatory Intake & Qualification",
    url: "/ai-regulatory-strategy",
    tags: ["faq", "intake", "strategy call", "proposal", "consulting"],
    content:
      "Q: I need regulatory help. How do I get started?\n" +
      "A: E&E offers Regulatory Strategy Calls to assess your device type, regulatory pathway, markets (US/EU), and development stage. We pre-qualify projects and provide tailored proposals. For AI/SaMD, digital diagnostics, or AI imaging: we help with FDA, EU MDR, and AI Act alignment. To schedule: info@eemedicals.com. Include device description, intended use, and target markets for a faster response."
  },
  {
    id: "faq-investor-pathway",
    title: "FAQ – Investor Expectations & Regulatory Pathway",
    url: "/ai-regulatory-strategy",
    tags: ["faq", "investor", "diligence", "pathway", "valuation"],
    content:
      "Q: What regulatory pathway will investors expect?\n" +
      "A: Investors look for: Clear pathway (510k, De Novo, PMA); Regulatory de-risking; Pre-exit compliance readiness; PCCP for AI/ML if applicable. E&E helps MedTech scale-ups and VC/PE portfolios with regulatory strategy to accelerate market access and strengthen valuation. CTA: Book a Regulatory Strategy Call for pre-diligence readiness—info@eemedicals.com."
  }
];

// Fallback scope chunk used when retrieval scores are weak
const scopeChunk = {
  id: "scope-about-ee",
  title: "About E&E Medicals",
  url: "/about",
  tags: ["about", "scope"],
  content:
    "E&E Medicals & Consulting is a global regulatory intelligence partner for AI-enabled medical technologies and life sciences. We provide regulatory strategy, FDA pathways (510(k), PMA, De Novo), EU MDR/IVDR, AI Act compliance, CE and CCC mark support, quality systems (QMSR, ISO 13485), and audits. Estimated costs: 510(k) $80k-$300k, De Novo $250k-$800k, PMA $1M+, CE Mark $120k-$500k. Educational guidance only—not legal advice. For detailed inquiries, strategy calls, or proposals: info@eemedicals.com."
};

function buildPrompt(query, history, docs, session = null) {
  const historyText =
    history && history.length
      ? history
          .slice(-6)
          .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
          .join("\n")
      : "";

  const sessionBlock =
    session &&
    (session.productType || session.stage || session.markets || session.timing)
      ? `
INTAKE CONTEXT (user completed structured flow):
- Product type: ${session.productType || "not specified"}
- Development stage: ${session.stage || "not specified"}
- Target markets: ${session.markets || "not specified"}
- Launch timeline: ${session.timing || "not specified"}
${session.deviceDescription ? `- Device description: ${session.deviceDescription}` : ""}
${session.productPathAnswers && Object.keys(session.productPathAnswers).length ? `- Product path answers: ${JSON.stringify(session.productPathAnswers)}` : ""}

HANDOFF: If productPathAnswers indicate high-risk (diagnosis=yes, invasion=implantable, adaptive=adaptive, IVD diagnosis/therapy), recommend connecting with a regulatory lead and share info@eemedicals.com.

REQUIRED OUTPUT FORMAT when intake context is present:
1) Summary (2-4 bullets)
2) Likely regulatory status (Device vs Non-device) and why
3) Likely pathway (510k/De Novo/PMA/wellness) with conditions
4) Evidence & documentation checklist (bullets, tailored)
5) Key risks/pitfalls (2-4 bullets)
6) Next best actions (2-4 bullets)
7) Call-to-action: offer pathway memo / strategy call / proposal — info@eemedicals.com
`
      : "";

  const contextBlocks = docs
    .map(
      (d) =>
        `Title: ${d.title}\nSource URL: ${d.url}\nContent:\n${d.content.trim()}`
    )
    .join("\n\n---\n\n");

  return `
You are the E&E Medicals Regulatory Advisor (AI)—confident, technical, warm, decisive.
Positioning: "Educational guidance only—not legal advice. Final regulatory determinations require a formal review."

Safety rules (always):
• Use "likely / may / depends"—never promise outcomes. No one can guarantee FDA clearance.
• Encourage formal assessment for high-risk cases (diagnostic, therapeutic, Class III, implantable).
• If asked "can you guarantee clearance": say no one can guarantee FDA outcomes; we reduce risk through alignment.

Core behaviors:
1. Use ONLY the context below (from E&E Medicals' website) to answer. Base answers on retrieved content.
2. Act as a domain expert: FDA, CE/MDR, SaMD, AI Act, 510(k), De Novo, PMA, ISO 13485.
3. When answering pathway, document, timeline, or cost questions: give a concise answer, then a CTA—e.g. "Book a Regulatory Strategy Call" or "Request a regulatory project proposal"—info@eemedicals.com.
4. For intake-style questions (device type, pathway, markets): provide a concise assessment (likely pathway) and invite a strategy call.
5. If the answer is not supported by context, say you don't have enough information and suggest contacting info@eemedicals.com.
6. Do NOT provide personal medical advice, treatment recommendations, or legal advice.
7. Keep answers concise, structured, professional. Position E&E as the regulatory authority.

Website context:
----------------
${contextBlocks}

Conversation so far:
--------------------
${historyText || "(no prior messages)"}
${sessionBlock}

User question:
--------------
${query}

Answer:
`.trim();
}

async function callOpenAi(prompt) {
  if (!openAiApiKey) {
    return {
      answer:
        "The AI backend is not fully configured (missing OPENAI_API_KEY). However, based on E&E Medicals' website content, here is a brief summary:\n\n" +
        prompt.slice(0, 600)
    };
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI error: ${response.status} ${text}`);
  }

  const json = await response.json();
  const answer = json.choices?.[0]?.message?.content?.trim();
  return { answer: answer || "I could not generate an answer." };
}

async function embedTexts(texts) {
  if (!openAiApiKey) {
    throw new Error("OPENAI_API_KEY is not set for embeddings.");
  }

  const model = "text-embedding-3-small";
  const results = [];

  const batchSize = 32;
  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);

    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({
        model,
        input: batch
      })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`OpenAI embeddings error: ${response.status} ${text}`);
    }

    const json = await response.json();
    for (const item of json.data) {
      results.push(item.embedding);
    }
  }

  return results;
}

function chunkText(text, maxChars = 1400, minChars = 400) {
  const paragraphs = text.split(/\n{2,}/);
  const chunks = [];
  let current = "";

  for (const raw of paragraphs) {
    const part = raw.trim();
    if (!part) continue;

    if ((current + "\n\n" + part).length > maxChars && current.length >= minChars) {
      chunks.push(current.trim());
      current = part;
    } else {
      current = current ? `${current}\n\n${part}` : part;
    }
  }

  if (current.trim()) {
    chunks.push(current.trim());
  }

  return chunks;
}

function cosineSimilarity(a, b) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1);
}

async function initialiseVectorIndex() {
  try {
    const docs = await loadKnowledgeBase();
    knowledgeBase = docs;

    const allChunks = [];

    for (const doc of docs) {
      const segments = chunkText(doc.content);
      segments.forEach((segment, idx) => {
        allChunks.push({
          id: `${doc.id}-chunk-${idx}`,
          title: doc.title,
          url: doc.url,
          tags: doc.tags ?? [],
          content: segment
        });
      });
    }

    // Add curated FAQ chunks
    for (const faq of faqChunks) {
      allChunks.push(faq);
    }

    console.log(`[RAG] Preparing embeddings for ${allChunks.length} chunks...`);
    const embeddings = await embedTexts(allChunks.map((c) => c.content));

    vectorIndex = embeddings.map((embedding, i) => ({
      embedding,
      chunk: allChunks[i]
    }));

    kbReady = true;
    console.log(
      `[RAG] Vector index initialised with ${vectorIndex.length} chunks from ${docs.length} pages + FAQs.`
    );
  } catch (err) {
    console.error("[RAG] Failed to build vector index:", err);
  }
}

void initialiseVectorIndex();

app.post("/api/rag", async (req, res) => {
  try {
    const { query, history = [], session } = req.body || {};
    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Missing 'query' string." });
    }

    if (!kbReady || !vectorIndex.length) {
      return res.status(503).json({ error: "Knowledge base is still initialising. Try again shortly." });
    }

    // Embed the query
    const [queryEmbedding] = await embedTexts([query]);

    // Score all chunks by cosine similarity
    const scored = vectorIndex
      .map(({ embedding, chunk }) => ({
        chunk,
        score: cosineSimilarity(queryEmbedding, embedding)
      }))
      .sort((a, b) => b.score - a.score);

    const topScore = scored[0]?.score ?? 0;
    const SIMILARITY_THRESHOLD = 0.48;

    // Use top 6 chunks; if best match is weak, prepend scope so the model has useful context
    let chunks = scored.slice(0, 6).map((x) => x.chunk);
    if (topScore < SIMILARITY_THRESHOLD) {
      chunks = [scopeChunk, ...chunks.slice(0, 5)];
    }

    const prompt = buildPrompt(query, history, chunks, session);
    const result = await callOpenAi(prompt);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error:
        "Failed to generate an answer from the AI service. Please try again later."
    });
  }
});

app.post("/api/lead", (req, res) => {
  try {
    const { email, name, company, role, deviceDescription, website, productType, stage, markets, timing, requestType } = req.body || {};
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Missing 'email'." });
    }
    // Log lead for now; can integrate HubSpot/Salesforce/Apollo later
    console.log("[LEAD]", {
      email: email.trim(),
      name: (name || "").trim(),
      company: (company || "").trim(),
      role: (role || "").trim(),
      deviceDescription: (deviceDescription || "").trim(),
      website: (website || "").trim(),
      productType: productType || null,
      stage: stage || null,
      markets: markets || null,
      timing: timing || null,
      requestType: requestType || null,
      timestamp: new Date().toISOString()
    });
    res.json({ ok: true, message: "Thank you. We'll be in touch shortly." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to capture lead." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`RAG API listening on http://localhost:${port}`);
});

