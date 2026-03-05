/**
 * E&E Medicals AI Regulatory Copilot - Conversation Flow
 * Matches the exact script structure from the integration document.
 */

export type FlowStep =
    | "welcome"
    | "router"
    | "product_path"
    | "stage"
    | "markets"
    | "timing"
    | "contact_capture"
    | "analysis"
    | "cta"
    | "triage_offer"
    | "handoff";

export type ProductType =
    | "medical_device"
    | "samd_ai"
    | "ivd_diagnostic"
    | "wellness_app"
    | "not_sure"
    | "fda_plan"
    | "eu_mdr";

export interface FlowSession {
    step: FlowStep;
    productType?: ProductType;
    stage?: string;
    markets?: string;
    timing?: string;
    email?: string;
    company?: string;
    role?: string;
    name?: string;
    deviceDescription?: string;
    website?: string;
    productPathAnswers?: Record<string, string>;
    messages: { role: "user" | "assistant"; content: string }[];
}

export const ROUTER_OPTIONS = [
    { id: "medical_device" as ProductType, label: "Medical device (hardware)" },
    { id: "samd_ai" as ProductType, label: "Software / SaMD / AI" },
    { id: "ivd_diagnostic" as ProductType, label: "IVD / diagnostic" },
    { id: "wellness_app" as ProductType, label: "Wellness app (non-medical)" },
    { id: "not_sure" as ProductType, label: "Not sure — help me classify" },
    { id: "fda_plan" as ProductType, label: "I need a 510(k) / De Novo / PMA plan" },
    { id: "eu_mdr" as ProductType, label: "EU MDR / CE Mark" },
];

// Product-path follow-up questions (per document section 4)
export const PRODUCT_PATH_QUESTIONS: Record<
    ProductType,
    { question: string; key: string; options: { id: string; label: string }[] }[] | null
> = {
    medical_device: [
        {
            question: "Does your device diagnose, monitor, treat, or prevent a disease/condition?",
            key: "diagnosis",
            options: [
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
        {
            question: "Is it invasive / implantable or sustaining life?",
            key: "invasion",
            options: [
                { id: "implantable", label: "Implantable" },
                { id: "invasive", label: "Invasive non-implant" },
                { id: "non_invasive", label: "Non-invasive" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
        {
            question: "Is there a similar marketed product you consider a competitor/predicate?",
            key: "predicate",
            options: [
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
    ],
    samd_ai: [
        {
            question: "Does the software provide patient-specific outputs used for diagnosis, treatment, or clinical decision-making?",
            key: "diagnosis",
            options: [
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
        {
            question: "What kind of output does your AI generate?",
            key: "output_type",
            options: [
                { id: "detection", label: "Detection/diagnosis" },
                { id: "treatment", label: "Treatment recommendation" },
                { id: "risk", label: "Clinical risk prediction" },
                { id: "image", label: "Image analysis" },
                { id: "physio", label: "Physio signal analysis (ECG/PPG)" },
                { id: "other", label: "Other" },
            ],
        },
        {
            question: "Is the model locked (fixed) or learning/adaptive after deployment?",
            key: "adaptive",
            options: [
                { id: "locked", label: "Locked" },
                { id: "adaptive", label: "Adaptive" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
    ],
    ivd_diagnostic: [
        {
            question: "Is it used for screening, diagnosis, or therapy selection?",
            key: "screening",
            options: [
                { id: "screening", label: "Screening" },
                { id: "diagnosis", label: "Diagnosis" },
                { id: "therapy", label: "Therapy selection" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
        {
            question: "Sample type?",
            key: "sample_type",
            options: [
                { id: "blood", label: "Blood" },
                { id: "saliva", label: "Saliva" },
                { id: "swab", label: "Swab" },
                { id: "urine", label: "Urine" },
                { id: "other", label: "Other" },
                { id: "na", label: "Not applicable" },
            ],
        },
        {
            question: "Is it lab-based or point-of-care/home use?",
            key: "lab_poc",
            options: [
                { id: "lab", label: "Lab" },
                { id: "poc", label: "POC" },
                { id: "home", label: "Home" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
    ],
    eu_mdr: [
        {
            question: "What class do you believe it is?",
            key: "class",
            options: [
                { id: "i", label: "Class I" },
                { id: "iia", label: "Class IIa" },
                { id: "iib", label: "Class IIb" },
                { id: "iii", label: "Class III" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
        {
            question: "Is it implantable or long-term invasive?",
            key: "implantable",
            options: [
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
                { id: "not_sure", label: "Not sure" },
            ],
        },
    ],
    wellness_app: null,
    not_sure: null, // Uses free-text "describe your product" + follow-up questions
    fda_plan: null,
};

export const STAGE_OPTIONS = [
    { id: "idea", label: "Idea" },
    { id: "prototype", label: "Prototype" },
    { id: "design_freeze", label: "Design Freeze" },
    { id: "vv_testing", label: "V&V Testing" },
    { id: "clinical", label: "Clinical" },
    { id: "ready_submit", label: "Ready to Submit" },
    { id: "on_market", label: "On Market (changes)" },
];

export const MARKET_OPTIONS = [
    { id: "us", label: "US" },
    { id: "eu", label: "EU" },
    { id: "us_eu", label: "US+EU" },
    { id: "canada", label: "Canada" },
    { id: "uk", label: "UK" },
    { id: "other", label: "Other" },
];

export const TIMING_OPTIONS = [
    { id: "lt6", label: "<6 months" },
    { id: "6_12", label: "6–12 months" },
    { id: "12_24", label: "12–24 months" },
    { id: "not_sure", label: "Not sure" },
];

// SaMD branching: when diagnosis=no, ask wellness follow-up (document section 4B)
export const SAMD_WELLNESS_QUESTION = {
    question:
        "You may be able to stay outside FDA device scope if claims remain wellness/administrative. What does the software do primarily?",
    key: "wellness_primary",
    options: [
        { id: "coaching", label: "Coaching / lifestyle recommendations" },
        { id: "scheduling", label: "Scheduling / admin / telehealth workflow" },
        { id: "data_viz", label: "Data visualization only" },
        { id: "risk_triage", label: "Risk scoring / triage" },
        { id: "other", label: "Other" },
    ],
};

// Not sure path: follow-up questions for classification (document section 5)
export const NOT_SURE_FOLLOWUP = [
    {
        question: "Who is the intended user?",
        key: "intended_user",
        options: [
            { id: "patient", label: "Patient" },
            { id: "clinician", label: "Clinician" },
            { id: "consumer", label: "Consumer" },
        ],
    },
    {
        question: "Any disease or diagnosis claims?",
        key: "disease_claims",
        options: [
            { id: "yes", label: "Yes" },
            { id: "no", label: "No" },
            { id: "not_sure", label: "Not sure" },
        ],
    },
];

export const CTA_OPTIONS = [
    { id: "pathway_summary", label: "Generate pathway summary" },
    { id: "strategy_call", label: "Book a strategy call" },
    { id: "request_proposal", label: "Request a proposal" },
];

// Path-specific CTAs per product type (document section 4)
export function getCtaOptionsForProduct(productType?: ProductType) {
    switch (productType) {
        case "medical_device":
            return [
                { id: "strategy_call", label: "Book a 30-min strategy call" },
                { id: "pathway_summary", label: "Request pathway memo (1–2 page)" },
                { id: "510k_checklist", label: "Get 510(k) readiness checklist" },
                { id: "request_proposal", label: "Request a proposal" },
            ];
        case "samd_ai":
            return [
                { id: "pathway_summary", label: "Generate my SaMD pathway summary" },
                { id: "strategy_call", label: "Schedule FDA Pre-Sub planning call" },
                { id: "samd_checklist", label: "Get AI/ML SaMD evidence checklist" },
                { id: "request_proposal", label: "Request a proposal" },
            ];
        case "ivd_diagnostic":
            return [
                { id: "pathway_summary", label: "Request diagnostic pathway review" },
                { id: "strategy_call", label: "Book a call" },
                { id: "request_proposal", label: "Request a proposal" },
            ];
        case "eu_mdr":
            return [
                { id: "pathway_summary", label: "Get CE Mark doc list" },
                { id: "strategy_call", label: "Request CE Mark plan + timeline" },
                { id: "request_proposal", label: "Request a proposal" },
            ];
        default:
            return CTA_OPTIONS;
    }
}

export const PROPOSAL_OPTIONS = [
    { id: "pathway_strategy", label: "Pathway strategy" },
    { id: "presub", label: "Pre-Sub" },
    { id: "510k", label: "510(k)" },
    { id: "de_novo", label: "De Novo" },
    { id: "pma", label: "PMA" },
    { id: "ce_mark", label: "CE Mark" },
    { id: "qms", label: "QMS/ISO 13485" },
    { id: "other", label: "Other" },
];

// Lead scoring (from document)
export function computeLeadScore(session: Partial<FlowSession>): number {
    let score = 0;
    if (session.productType === "medical_device") score += 20;
    if (session.productType === "samd_ai" || session.productType === "ivd_diagnostic") score += 25;
    if (session.productType === "eu_mdr") score += 15;
    if (session.productType === "wellness_app") score -= 10;
    if (session.markets === "us_eu") score += 15;
    if (session.stage === "clinical") score += 10;
    if (session.stage === "ready_submit") score += 15;
    if (session.timing === "lt6") score += 10;
    // High-risk from product path
    const pp = session.productPathAnswers || {};
    if (pp.invasion === "implantable") score += 30;
    if (pp.diagnosis === "yes" || pp.screening === "diagnosis") score += 15;
    if (pp.adaptive === "adaptive") score += 15;
    return Math.max(0, score);
}

// Offer 2 trigger: Free 15-min triage when high-value (document section 6)
export function shouldOfferTriage(session: Partial<FlowSession>): boolean {
    if (session.markets === "us_eu") return true;
    if (session.timing === "lt6") return true;
    const pp = session.productPathAnswers || {};
    if (pp.invasion === "implantable") return true;
    if (session.productType === "ivd_diagnostic" && pp.screening === "diagnosis") return true;
    return computeLeadScore(session) >= 40;
}

// Handoff conditions (document section 8)
export function shouldHandoffToHuman(session: Partial<FlowSession>): boolean {
    const pp = session.productPathAnswers || {};
    if (pp.diagnosis === "yes" || pp.output_type === "treatment" || pp.output_type === "detection") return true;
    if (pp.invasion === "implantable") return true;
    if (pp.adaptive === "adaptive") return true;
    if (session.productType === "ivd_diagnostic" && (pp.screening === "diagnosis" || pp.screening === "therapy")) return true;
    return false;
}

export const WELCOME_MESSAGE_1 =
    "Hi — I'm the E&E Medicals Regulatory Advisor (AI). I can help you quickly map your FDA / CE / SaMD pathway and what evidence you'll likely need.";

export const WELCOME_MESSAGE_2 = "What best describes your product?";

export const INTAKE_CONTACT_MSG =
    "If I generate a pathway summary, where should I send it? (optional — enter email or skip to analysis)";

export const HANDOFF_MESSAGE =
    "This is best handled with a regulatory lead. I can connect you now—please share your email and the best time window. Contact info@eemedicals.com";

export const TRIAGE_OFFER_MESSAGE =
    "This looks like a high-impact regulatory project. Would you like a 15-minute triage call with an E&E regulatory lead?";

export const INITIAL_SESSION: FlowSession = {
    step: "welcome",
    messages: [
        {
            role: "assistant",
            content: `${WELCOME_MESSAGE_1}\n\n${WELCOME_MESSAGE_2}`,
        },
    ],
};
