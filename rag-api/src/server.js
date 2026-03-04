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
      "A: Hello! I'm the E&E Medicals assistant. I can help answer questions about our regulatory services, medical device and drug regulations, AI-enabled compliance, FDA pathways, EU MDR, CE/CCC marks, and related topics based on our website. What would you like to know?"
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
  }
];

// Fallback scope chunk used when retrieval scores are weak
const scopeChunk = {
  id: "scope-about-ee",
  title: "About E&E Medicals",
  url: "/about",
  tags: ["about", "scope"],
  content:
    "E&E Medicals & Consulting is a global regulatory intelligence partner for AI-enabled medical technologies and life sciences. We provide regulatory strategy, FDA pathways (510(k), PMA, De Novo), EU MDR/IVDR, AI Act compliance, CE and CCC mark support, quality systems (QMSR, ISO 13485), and audits. For detailed inquiries, contact info@eemedicals.com."
};

function buildPrompt(query, history, docs) {
  const historyText =
    history && history.length
      ? history
          .slice(-6)
          .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
          .join("\n")
      : "";

  const contextBlocks = docs
    .map(
      (d) =>
        `Title: ${d.title}\nSource URL: ${d.url}\nContent:\n${d.content.trim()}`
    )
    .join("\n\n---\n\n");

  return `
You are a medical device and pharmaceutical regulatory assistant for E&E Medicals & Consulting.
Use ONLY the context below, which comes from the E&E Medicals website (services, AI pages, and about content), to answer the user's question.
If the answer is not clearly supported by the context, say you don't have enough information from E&E Medicals' site and suggest contacting info@eemedicals.com.
Do NOT provide personal medical advice, treatment recommendations, or legal advice.
Keep answers concise, structured, and professional.

Website context:
----------------
${contextBlocks}

Conversation so far:
--------------------
${historyText || "(no prior messages)"}

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
    const { query, history = [] } = req.body || {};
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

    const prompt = buildPrompt(query, history, chunks);
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

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`RAG API listening on http://localhost:${port}`);
});

