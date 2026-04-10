import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContent } from "../hooks/useContent";
import { CheckCircle, ArrowRight, ArrowLeft, Pencil, Mail, Flag } from "lucide-react";

interface FormData {
    companyName: string;
    fullName: string;
    email: string;
    telephone: string;
    qmsEstablished: string;
    qmsDeterminedProcesses: string;
    qmsManagedStandard: string;
    qmsOutsourced: string;
    qmsDocumentation: string;
    qmsManual: string;
    qmsFileEstablished: string;
    qmsDocumentsControlled: string;
    qmsProcedureControl: string;
    qmsRecordsEstablished: string;
    qmsProcedureRecords: string;
    qmsRecordsLegible: string;
    prPlanned: string;
    prProductionPlanning: string;
    prOutputSuitable: string;
    prRequirementsDetermined: string;
    prRequirementsReviewed: string;
    prReviewEnsure: string;
    prRecordsMaintained: string;
    prCustomerRequirements: string;
    prCommunicateCustomers: string;
    prComprehensiveProcedure: string;
    mgCommitment: string;
    mgCustomerRequirements: string;
    mgQualityPolicy: string;
    mgQualityObjectives: string;
    mgObjectivesMeasurable: string;
    mgPlanQMS: string;
    mgResponsibilities: string;
    mgRepresentative: string;
    mgCommunication: string;
    mgReviewQMS: string;
    mgReviewImprovement: string;
    mgRecordsMaintained: string;
    mgReviewInputs: string;
    mgReviewOutputs: string;
    rmAssignedResources: string;
    rmEmployeesCompetent: string;
    rmDeterminedCompetence: string;
    rmInfrastructure: string;
    rmInfrastructureIncludes: string;
    rmWorkEnvironment: string;
    rmContaminatedProducts: string;
    maiPlanImplement: string;
    maiDetermineMethods: string;
    maiFeedbackMethods: string;
    maiReportRegulators: string;
    maiReportIncident: string;
    maiInternalAudits: string;
    maiAuditProgram: string;
    maiAuditorSelection: string;
    maiRecordsAudits: string;
    maiManagementCorrections: string;
    maiSuitableMethods: string;
    maiMethodsDemonstrate: string;
    maiMonitorProduct: string;
    maiAppropriateStages: string;
    maiAuthorizeRelease: string;
    maiNonconformingProduct: string;
    maiProcedureNonconforming: string;
    maiTakeAction: string;
    maiPreventUnintended: string;
    maiAuthorizeNonconforming: string;
    maiIdentifyActions: string;
    maiCheckAdvisory: string;
    maiClarifyRework: string;
    maiCollectData: string;
    maiAnalysesInclude: string;
    maiDataAnalysis: string;
    maiContinuallyImprove: string;
    maiEliminateCause: string;
    maiCorrectiveActions: string;
    maiProcedureReview: string;
    maiDetermineAction: string;
    maiPreventiveActions: string;
    maiProcedureDetermine: string;
}

const initialFormData: FormData = {
    companyName: "",
    fullName: "",
    email: "",
    telephone: "",
    qmsEstablished: "",
    qmsDeterminedProcesses: "",
    qmsManagedStandard: "",
    qmsOutsourced: "",
    qmsDocumentation: "",
    qmsManual: "",
    qmsFileEstablished: "",
    qmsDocumentsControlled: "",
    qmsProcedureControl: "",
    qmsRecordsEstablished: "",
    qmsProcedureRecords: "",
    qmsRecordsLegible: "",
    prPlanned: "",
    prProductionPlanning: "",
    prOutputSuitable: "",
    prRequirementsDetermined: "",
    prRequirementsReviewed: "",
    prReviewEnsure: "",
    prRecordsMaintained: "",
    prCustomerRequirements: "",
    prCommunicateCustomers: "",
    prComprehensiveProcedure: "",
    mgCommitment: "",
    mgCustomerRequirements: "",
    mgQualityPolicy: "",
    mgQualityObjectives: "",
    mgObjectivesMeasurable: "",
    mgPlanQMS: "",
    mgResponsibilities: "",
    mgRepresentative: "",
    mgCommunication: "",
    mgReviewQMS: "",
    mgReviewImprovement: "",
    mgRecordsMaintained: "",
    mgReviewInputs: "",
    mgReviewOutputs: "",
    rmAssignedResources: "",
    rmEmployeesCompetent: "",
    rmDeterminedCompetence: "",
    rmInfrastructure: "",
    rmInfrastructureIncludes: "",
    rmWorkEnvironment: "",
    rmContaminatedProducts: "",
    maiPlanImplement: "",
    maiDetermineMethods: "",
    maiFeedbackMethods: "",
    maiReportRegulators: "",
    maiReportIncident: "",
    maiInternalAudits: "",
    maiAuditProgram: "",
    maiAuditorSelection: "",
    maiRecordsAudits: "",
    maiManagementCorrections: "",
    maiSuitableMethods: "",
    maiMethodsDemonstrate: "",
    maiMonitorProduct: "",
    maiAppropriateStages: "",
    maiAuthorizeRelease: "",
    maiNonconformingProduct: "",
    maiProcedureNonconforming: "",
    maiTakeAction: "",
    maiPreventUnintended: "",
    maiAuthorizeNonconforming: "",
    maiIdentifyActions: "",
    maiCheckAdvisory: "",
    maiClarifyRework: "",
    maiCollectData: "",
    maiAnalysesInclude: "",
    maiDataAnalysis: "",
    maiContinuallyImprove: "",
    maiEliminateCause: "",
    maiCorrectiveActions: "",
    maiProcedureReview: "",
    maiDetermineAction: "",
    maiPreventiveActions: "",
    maiProcedureDetermine: "",
};

// Steps matching the screenshot: Contact (1), Management (2), Product Realization (3), Analysis & Improvement (flag)
const steps = [
    { label: "Contact", icon: null },
    { label: "Management", icon: null },
    { label: "Product Realization", icon: null },
    { label: "Analysis & Improvement", icon: "flag" },
];

// Internal wizard steps (we keep the same multi-step logic but map to 4 progress indicators)
const WIZARD_STEPS = [
    "Contact",
    "Quality Management System",
    "Management Responsibility",
    "Resource Management",
    "Product Realization",
    "Measurement, Analysis and Improvement",
    "Summary",
];

// Map wizard step index → progress step index
const stepToProgress = [0, 0, 1, 1, 2, 3, 3];

export const Iso13485GapAnalysis: React.FC = () => {
    const content = useContent("iso13485_gap");
    const header = content?.header;
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        if (currentStep < WIZARD_STEPS.length - 1) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
    };

    const currentProgress = stepToProgress[currentStep];

    // Plain radio question matching screenshot 2 style
    const RadioQuestion = ({ question, name }: { question: string; name: keyof FormData }) => (
        <div className="mb-0 py-5 border-b border-gray-200 last:border-b-0">
            <p className="text-gray-800 text-sm mb-3 leading-relaxed">{question}</p>
            <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name={name}
                        value="Yes"
                        checked={formData[name] === "Yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#1a8fd1]"
                    />
                    <span className="text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name={name}
                        value="No"
                        checked={formData[name] === "No"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#1a8fd1]"
                    />
                    <span className="text-sm text-gray-700">No</span>
                </label>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Free ISO 13485:2016 Gap Analysis Tool for Medical Device Companies | E&E Medicals</title>
            <meta name="description" content="Free ISO 13485:2016 gap analysis tool — assess your medical device quality management system against ISO 13485 requirements and identify compliance gaps before your certification audit." />
            <Header />

            <main className="grow pb-24">
                <PageHeader
                    title={header?.title || "Free ISO 13485:2016 Gap Analysis Tool"}
                    breadcrumb={header?.breadcrumb || "Free ISO 13485:2016 Gap Analysis Tool"}
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    {isSubmitted ? (
                        <div className="text-center py-20 bg-green-50 rounded-lg border border-green-200">
                            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                                Your gap analysis data has been successfully submitted. One of our experts will review your details and reach out to
                                you shortly with a customized solution.
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-brand-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-400 transition-colors"
                            >
                                Return to Home
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Page title + subtitle */}
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Free ISO 13485:2016 Gap Analysis Tool</h1>
                            <p className="text-gray-600 text-sm mb-8">
                                Find out your level of compliance with ISO 13485. Please reach out to us with the details and we will provide you the
                                solution.
                            </p>

                            {/* Progress Steps — matches screenshot 1 exactly */}
                            <div className="flex items-center mb-8">
                                {steps.map((step, index) => {
                                    const isCompleted = index < currentProgress;
                                    const isActive = index === currentProgress;
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
                            ${
                                isActive
                                    ? "bg-[#0a1e3f] border-[#0a1e3f] text-white"
                                    : isCompleted
                                      ? "bg-[#0a1e3f] border-[#0a1e3f] text-white"
                                      : "bg-gray-200 border-gray-300 text-gray-500"
                            }`}
                                                >
                                                    {index === steps.length - 1 ? <Flag size={18} /> : index + 1}
                                                </div>
                                                <span
                                                    className={`mt-2 text-xs font-semibold whitespace-nowrap ${
                                                        isActive ? "text-[#0a1e3f]" : "text-gray-400"
                                                    }`}
                                                >
                                                    {step.label}
                                                </span>
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div
                                                    className={`flex-1 h-0.5 mx-1 mb-5 ${index < currentProgress ? "bg-[#0a1e3f]" : "bg-gray-300"}`}
                                                />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Form Card — dark left stripe + gray background */}
                            <form onSubmit={handleSubmit}>
                                <div className="flex shadow-sm border border-gray-200">
                                    {/* Dark left stripe */}
                                    <div className="w-3 bg-[#0a1e3f] shrink-0" />

                                    {/* Form body */}
                                    <div className="flex-1 bg-[#f0f0f0] p-8">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">{WIZARD_STEPS[currentStep]}</h2>

                                        {/* Step 0: Contact */}
                                        {currentStep === 0 && (
                                            <div className="space-y-5">
                                                {/* Company Name */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                                                    <div className="flex items-center bg-white border border-gray-300">
                                                        <div className="px-3 py-2 border-r border-gray-300 text-gray-400">
                                                            <Pencil size={14} />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="companyName"
                                                            value={formData.companyName}
                                                            onChange={handleInputChange}
                                                            className="flex-1 px-3 py-2 text-sm outline-none bg-white"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Full Name */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                        Full Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex items-center bg-white border border-gray-300">
                                                        <div className="px-3 py-2 border-r border-gray-300 text-gray-400">
                                                            <Pencil size={14} />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleInputChange}
                                                            required
                                                            className="flex-1 px-3 py-2 text-sm outline-none bg-white"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Email */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex items-center bg-white border border-gray-300">
                                                        <div className="px-3 py-2 border-r border-gray-300 text-gray-400">
                                                            <Mail size={14} />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            className="flex-1 px-3 py-2 text-sm outline-none bg-white"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Telephone */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                        Telephone <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex items-center bg-white border border-gray-300">
                                                        <div className="px-3 py-2 border-r border-gray-300 text-gray-400">
                                                            <Pencil size={14} />
                                                        </div>
                                                        <input
                                                            type="tel"
                                                            name="telephone"
                                                            value={formData.telephone}
                                                            onChange={handleInputChange}
                                                            required
                                                            className="flex-1 px-3 py-2 text-sm outline-none bg-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 1: QMS */}
                                        {currentStep === 1 && (
                                            <div className="max-h-125 overflow-y-auto pr-2">
                                                <RadioQuestion
                                                    name="qmsEstablished"
                                                    question="Have you established a Quality Management System (QMS) meeting the requirements of the ISO 13485 International Standard?"
                                                />
                                                <RadioQuestion
                                                    name="qmsDeterminedProcesses"
                                                    question="Did the QMS determine the processes, process sequence, and process resources including monitoring and improvement?"
                                                />
                                                <RadioQuestion
                                                    name="qmsManagedStandard"
                                                    question="Do you manage these processes in accordance with the requirements of the ISO 13485 International Standard?"
                                                />
                                                <RadioQuestion
                                                    name="qmsOutsourced"
                                                    question="Do you manage the processes, including adequate control over any processes the organization has chosen to outsource?"
                                                />
                                                <RadioQuestion
                                                    name="qmsDocumentation"
                                                    question="Does the QMS documentation include the quality policy, quality objectives, quality manual, documented records, and procedures (required by ISO 13485 and necessary for the processes)?"
                                                />
                                                <RadioQuestion
                                                    name="qmsManual"
                                                    question="Is there a quality manual that includes QMS scope, any exclusions, the documented procedures (or references), and interactions between processes?"
                                                />
                                                <RadioQuestion
                                                    name="qmsFileEstablished"
                                                    question="Is a file established and maintained for each medical device type or each family of medical devices? Does it include reference documents showing that you comply with regulations and with ISO 13485? Does it include description, production procedures, inspection specifications, and records of each device type or device family?"
                                                />
                                                <RadioQuestion
                                                    name="qmsDocumentsControlled"
                                                    question="Are documents required by the Quality Management System controlled?"
                                                />
                                                <RadioQuestion
                                                    name="qmsProcedureControl"
                                                    question="Is there a procedure to define the controls needed for effective document control (review, update, changes, and relevant versions available)?"
                                                />
                                                <RadioQuestion
                                                    name="qmsRecordsEstablished"
                                                    question="Are records established and controlled to provide evidence of conformity?"
                                                />
                                                <RadioQuestion
                                                    name="qmsProcedureRecords"
                                                    question="Is a documented procedure established to define the controls needed for the identification, storage, protection, retrieval, retention, and disposal of records?"
                                                />
                                                <RadioQuestion
                                                    name="qmsRecordsLegible"
                                                    question="Do records remain legible, readily identifiable, and retrievable?"
                                                />
                                            </div>
                                        )}

                                        {/* Step 2: Management Responsibility */}
                                        {currentStep === 2 && (
                                            <div className="max-h-125 overflow-y-auto pr-2">
                                                <RadioQuestion
                                                    name="mgCommitment"
                                                    question="Does top management show commitment to the QMS, communicating requirements, quality policy, and quality objectives, and conducting management reviews and ensuring resources?"
                                                />
                                                <RadioQuestion
                                                    name="mgCustomerRequirements"
                                                    question="Does top management ensure that customer requirements are determined and are met with the aim of enhancing customer satisfaction?"
                                                />
                                                <RadioQuestion
                                                    name="mgQualityPolicy"
                                                    question="Is there an appropriate quality policy, including commitment to meet requirements, improvement, quality objectives framework, communication, and review for suitability?"
                                                />
                                                <RadioQuestion
                                                    name="mgQualityObjectives"
                                                    question="Does top management ensure quality objectives are established at relevant functions and levels?"
                                                />
                                                <RadioQuestion
                                                    name="mgObjectivesMeasurable"
                                                    question="Are the quality objectives measurable and consistent with the quality policy?"
                                                />
                                                <RadioQuestion
                                                    name="mgPlanQMS"
                                                    question="Does top management plan the QMS in order to meet ISO 13485 requirements and the quality objectives, and maintain the integrity of the QMS when changes are planned?"
                                                />
                                                <RadioQuestion
                                                    name="mgResponsibilities"
                                                    question="Does top management ensure that responsibilities and authorities are defined and communicated?"
                                                />
                                                <RadioQuestion
                                                    name="mgRepresentative"
                                                    question="Is there a management representative who ensures processes are working, reports on QMS performance and need for improvement, and promotes customer requirements?"
                                                />
                                                <RadioQuestion
                                                    name="mgCommunication"
                                                    question="Does top management ensure that appropriate communication processes are established (especially for QMS effectiveness)?"
                                                />
                                                <RadioQuestion
                                                    name="mgReviewQMS"
                                                    question="Does top management review the QMS at planned intervals, to ensure its continuing suitability, adequacy, and effectiveness?"
                                                />
                                                <RadioQuestion
                                                    name="mgReviewImprovement"
                                                    question="Does management review include opportunities for improvement and the need for changes, including the quality policy and quality objectives?"
                                                />
                                                <RadioQuestion
                                                    name="mgRecordsMaintained"
                                                    question="Are records from management reviews maintained?"
                                                />
                                                <RadioQuestion
                                                    name="mgReviewInputs"
                                                    question="Do management review inputs include audit results, customer feedback, process and product performance, status of PA & CA, action follow-up, potential QMS changes, and improvement recommendations?"
                                                />
                                                <RadioQuestion
                                                    name="mgReviewOutputs"
                                                    question="Do management review outputs include decisions and actions to improve QMS and process effectiveness, product improvements, and resource needs?"
                                                />
                                            </div>
                                        )}

                                        {/* Step 3: Resource Management */}
                                        {currentStep === 3 && (
                                            <div className="max-h-125 overflow-y-auto pr-2">
                                                <RadioQuestion
                                                    name="rmAssignedResources"
                                                    question="Are there assigned resources to implement and maintain the QMS, continually improve QMS effectiveness, and enhance customer satisfaction through customer requirements?"
                                                />
                                                <RadioQuestion
                                                    name="rmEmployeesCompetent"
                                                    question="Are the employees who are responsible for accomplishing the working procedures related with product conformity competent in the meaning of appropriate education, training, skills, and experience?"
                                                />
                                                <RadioQuestion
                                                    name="rmDeterminedCompetence"
                                                    question="Have you determined the needed competence, provided the necessary training, evaluated training effectiveness, and maintained appropriate records?"
                                                />
                                                <RadioQuestion
                                                    name="rmInfrastructure"
                                                    question="Do you define, provide, and maintain the infrastructure needed to achieve product requirements?"
                                                />
                                                <RadioQuestion
                                                    name="rmInfrastructureIncludes"
                                                    question="Does infrastructure include, as applicable, buildings, associated utilities, process equipment (hardware and software), and supporting services (e.g., transport, communication, or IT services)?"
                                                />
                                                <RadioQuestion
                                                    name="rmWorkEnvironment"
                                                    question="Have you established, documented, monitored, and controlled the work environment needed to meet product requirements according to ISO 13845?"
                                                />
                                                <RadioQuestion
                                                    name="rmContaminatedProducts"
                                                    question="Has the organization created documented procedures to control contaminated or potentially contaminated products so as to prevent contamination of work environment, personnel, and other products? For sterile medical devices, does the organization have documented procedures for control of contamination with particulate matters or microorganisms during assembly and packaging processes?"
                                                />
                                            </div>
                                        )}

                                        {/* Step 4: Product Realization */}
                                        {currentStep === 4 && (
                                            <div className="max-h-125 overflow-y-auto pr-2">
                                                <RadioQuestion
                                                    name="prPlanned"
                                                    question="Do you plan and develop the processes needed for product realization consistent with the requirements of the other processes?"
                                                />
                                                <RadioQuestion
                                                    name="prProductionPlanning"
                                                    question="In production planning, are there product quality objectives, processes and documents, resources, product measurement activities, and necessary records?"
                                                />
                                                <RadioQuestion
                                                    name="prOutputSuitable"
                                                    question="Is the output of this planning in a form suitable for the organization's method of operations?"
                                                />
                                                <RadioQuestion
                                                    name="prRequirementsDetermined"
                                                    question="Are all product requirements determined (customer, unstated but necessary requirements, statutory and regulatory, and additional requirements considered necessary)?"
                                                />
                                                <RadioQuestion
                                                    name="prRequirementsReviewed"
                                                    question="Are product requirements reviewed prior to committing to the customer (e.g., submission of tenders, acceptance of contracts or orders, acceptance of changes)?"
                                                />
                                                <RadioQuestion
                                                    name="prReviewEnsure"
                                                    question="Does the review ensure product requirements are defined, differing requirements are resolved, and the organization can meet all requirements?"
                                                />
                                                <RadioQuestion
                                                    name="prRecordsMaintained"
                                                    question="Are records of the results of the review and actions arising from the review maintained?"
                                                />
                                                <RadioQuestion
                                                    name="prCustomerRequirements"
                                                    question="Where the customer provides no requirements, are the customer requirements confirmed by the organization before acceptance?"
                                                />
                                                <RadioQuestion
                                                    name="prCommunicateCustomers"
                                                    question="Do you communicate with customers about product information, inquiries, contract and order handling and amendments, customer feedback, and customer complaints?"
                                                />
                                                <RadioQuestion
                                                    name="prComprehensiveProcedure"
                                                    question="Does the organization have a comprehensive documented procedure for design and development of medical devices?"
                                                />
                                            </div>
                                        )}

                                        {/* Step 5: MAI */}
                                        {currentStep === 5 && (
                                            <div className="max-h-125 overflow-y-auto pr-2">
                                                <RadioQuestion
                                                    name="maiPlanImplement"
                                                    question="Do you plan and implement monitoring, measurement, analysis, and improvement processes for the product, the QMS, and continual improvement?"
                                                />
                                                <RadioQuestion
                                                    name="maiDetermineMethods"
                                                    question="Does this include determining applicable methods, like statistical techniques, and how they will be used?"
                                                />
                                                <RadioQuestion
                                                    name="maiFeedbackMethods"
                                                    question="Has your organization established feedback methods and procedures as identified in the standard?"
                                                />
                                                <RadioQuestion
                                                    name="maiReportRegulators"
                                                    question="Does your organization have a documented system to report to the regulators when it is needed?"
                                                />
                                                <RadioQuestion
                                                    name="maiReportIncident"
                                                    question="Does your organization have a documented procedure to report an incident to regulatory authorities when an incident is required to be reported?"
                                                />
                                                <RadioQuestion
                                                    name="maiInternalAudits"
                                                    question="Do you conduct internal audits at planned intervals to determine if the QMS conforms to the ISO 13485 standard and to the planned QMS requirements?"
                                                />
                                                <RadioQuestion
                                                    name="maiAuditProgram"
                                                    question="Is there an audit program that considers process importance, as well as previous audit results, and are the audit criteria, scope, frequency, and methods defined?"
                                                />
                                                <RadioQuestion
                                                    name="maiAuditorSelection"
                                                    question="Does the selection of auditors and conducting of audits ensure objectivity and impartiality of the audit process, and is it ensured that auditors do not audit their own work?"
                                                />
                                                <RadioQuestion
                                                    name="maiRecordsAudits"
                                                    question="Are records of audits and their results maintained?"
                                                />
                                                <RadioQuestion
                                                    name="maiManagementCorrections"
                                                    question="Does the management of the audited area ensure that any corrections and corrective actions are taken without delay, and do follow-up activities verify the actions taken?"
                                                />
                                                <RadioQuestion
                                                    name="maiSuitableMethods"
                                                    question="Do you apply suitable methods for monitoring, and where applicable, measurement of the QMS processes?"
                                                />
                                                <RadioQuestion
                                                    name="maiMethodsDemonstrate"
                                                    question="Do these methods demonstrate the ability of the process to achieve planned results, and when planned results are not achieved, are appropriate corrections and corrective actions taken?"
                                                />
                                                <RadioQuestion
                                                    name="maiMonitorProduct"
                                                    question="Do you monitor and measure the characteristics of the product to verify that product requirements have been met?"
                                                />
                                                <RadioQuestion
                                                    name="maiAppropriateStages"
                                                    question="Is this carried out at appropriate stages of the product realization process in accordance with the planned arrangements, and is evidence maintained?"
                                                />
                                                <RadioQuestion
                                                    name="maiAuthorizeRelease"
                                                    question="Do records indicate the person(s) authorizing product release, and do you ensure product release and service delivery do not proceed if results are unsatisfactory, unless approved?"
                                                />
                                                <RadioQuestion
                                                    name="maiNonconformingProduct"
                                                    question="Do you ensure that product that does not conform to product requirements is identified and controlled to prevent unintended use or delivery?"
                                                />
                                                <RadioQuestion
                                                    name="maiProcedureNonconforming"
                                                    question="Is a documented procedure established to define the controls and related responsibilities and authorities for dealing with nonconforming product?"
                                                />
                                                <RadioQuestion
                                                    name="maiTakeAction"
                                                    question="Does your organization take action to eliminate detected nonconformities with nonconforming products prior to delivery?"
                                                />
                                                <RadioQuestion
                                                    name="maiPreventUnintended"
                                                    question="Does your organization manage to prevent the nonconforming product's unintended use or application?"
                                                />
                                                <RadioQuestion
                                                    name="maiAuthorizeNonconforming"
                                                    question="Does your organization authorize nonconforming product use, release, or acceptance?"
                                                />
                                                <RadioQuestion
                                                    name="maiIdentifyActions"
                                                    question="Does your organization identify and then take recorded actions to eliminate detected nonconformities in products after delivery or use?"
                                                />
                                                <RadioQuestion
                                                    name="maiCheckAdvisory"
                                                    question="Does your organization check and authorize how advisory notices are issued against nonconforming product after use or delivery, and maintain records of actions taken against advisory notices?"
                                                />
                                                <RadioQuestion
                                                    name="maiClarifyRework"
                                                    question="Does your organization clarify in its procedure of rework how product rework should be performed, verified, reviewed, approved, and recorded?"
                                                />
                                                <RadioQuestion
                                                    name="maiCollectData"
                                                    question="Do you collect and analyze appropriate data to demonstrate the suitability and effectiveness of the QMS and to evaluate where improvement can be made?"
                                                />
                                                <RadioQuestion
                                                    name="maiAnalysesInclude"
                                                    question="Do analyses include data generated as a result of monitoring and measurement and from other relevant sources?"
                                                />
                                                <RadioQuestion
                                                    name="maiDataAnalysis"
                                                    question="Does data analysis include customer satisfaction, conformity of product, characteristics and trends of processes and products, opportunities for preventive action, and suppliers?"
                                                />
                                                <RadioQuestion
                                                    name="maiContinuallyImprove"
                                                    question="Do you continually improve the effectiveness of the QMS through the quality policy, quality objectives, audit results, analysis of data, corrective and preventive actions, and management review?"
                                                />
                                                <RadioQuestion
                                                    name="maiEliminateCause"
                                                    question="Do you take action to eliminate the cause of nonconformities in order to prevent recurrence?"
                                                />
                                                <RadioQuestion
                                                    name="maiCorrectiveActions"
                                                    question="Are corrective actions appropriate to the effects of the nonconformities?"
                                                />
                                                <RadioQuestion
                                                    name="maiProcedureReview"
                                                    question="Is there a documented procedure to review nonconformities, determine the causes, evaluate the need for action, take action, record results of actions, and review effectiveness?"
                                                />
                                                <RadioQuestion
                                                    name="maiDetermineAction"
                                                    question="Do you determine action to eliminate the causes of potential nonconformities in order to prevent their recurrence?"
                                                />
                                                <RadioQuestion
                                                    name="maiPreventiveActions"
                                                    question="Are preventive actions appropriate to the effects of the potential problems?"
                                                />
                                                <RadioQuestion
                                                    name="maiProcedureDetermine"
                                                    question="Is there a documented procedure to determine potential nonconformities and causes, evaluate the need for action, take necessary action, record results of actions, and review effectiveness?"
                                                />
                                            </div>
                                        )}

                                        {/* Step 6: Summary */}
                                        {currentStep === 6 && (
                                            <div className="max-h-125 overflow-y-auto pr-2 space-y-6">
                                                <div className="bg-brand-50 border border-brand-200 text-brand-800 px-6 py-4 rounded-xl">
                                                    <p className="font-semibold text-lg mb-1">Ready to submit?</p>
                                                    <p className="text-sm">
                                                        Please review your contact information before submitting. One of our specialists will analyze
                                                        your responses and get back to you shortly.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-6 rounded border border-gray-200">
                                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Contact Details</h3>
                                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <span className="text-gray-500">Company:</span>
                                                            <br />
                                                            <span className="font-semibold text-gray-900">{formData.companyName || "N/A"}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Name:</span>
                                                            <br />
                                                            <span className="font-semibold text-gray-900">{formData.fullName || "N/A"}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Email:</span>
                                                            <br />
                                                            <span className="font-semibold text-gray-900">{formData.email || "N/A"}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Phone:</span>
                                                            <br />
                                                            <span className="font-semibold text-gray-900">{formData.telephone || "N/A"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center pt-4">
                                                    <p className="text-sm text-gray-500 mb-4">
                                                        Clicking submit will send your gap analysis answers to our compliance team.
                                                    </p>
                                                    <button
                                                        type="submit"
                                                        className="bg-green-600 text-white font-bold py-3 px-10 rounded shadow hover:bg-green-700 transition-colors text-lg"
                                                    >
                                                        Submit Analysis
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Navigation Buttons — matches "NEXT STEP →" style */}
                                <div className="mt-4 flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className={`flex items-center px-5 py-2 font-semibold text-sm transition-colors ${
                                            currentStep === 0 ? "invisible" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                    >
                                        <ArrowLeft size={14} className="mr-2" /> PREVIOUS STEP
                                    </button>

                                    {currentStep < WIZARD_STEPS.length - 1 && (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="flex items-center px-6 py-2 bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-colors rounded-xl"
                                        >
                                            NEXT STEP <ArrowRight size={14} className="ml-2" />
                                        </button>
                                    )}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};
