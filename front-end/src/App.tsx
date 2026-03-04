// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Reliability } from "./pages/Reliability";
import { SixSigmaHealthcare } from "./pages/SixSigmaHealthcare";
import { MedicalDevices } from "./pages/MedicalDevices";
import { Audits } from "./pages/Audits";
import { QualitySystemRegulation } from "./pages/QualitySystemRegulation";
import { Iso9001Implementation } from "./pages/Iso9001Implementation";
import { Iso13485 } from "./pages/Iso13485";
import { Iso14971 } from "./pages/Iso14971";
import { Iso13485GapAnalysis } from "./pages/Iso13485GapAnalysis";
import { Media } from "./pages/Media";
import { Software } from "./pages/Software";
import { Careers } from "./pages/Careers";
import { CEMarkApproval } from "./pages/CEMarkApproval";
import { CCCMarkApproval } from "./pages/CCCMarkApproval";
import { PostmarketCompliance } from "./pages/PostmarketCompliance";
import { Fda483Warning } from "./pages/Fda483Warning";
import { PreIdeProcess } from "./pages/PreIdeProcess";
import { FdaEstablishmentRegistration } from "./pages/FdaEstablishmentRegistration";
import { Fda510kApplication } from "./pages/Fda510kApplication";
import { AndaApplication } from "./pages/AndaApplication";
import { NdaApplication } from "./pages/NdaApplication";
import { IndApplication } from "./pages/IndApplication";
import { FdaUsAgentForeign } from "./pages/FdaUsAgentForeign";
import { BiologicsLicenseApplication } from "./pages/BiologicsLicenseApplication";
import { CmcServices } from "./pages/CmcServices";
import { DrugMasterFile } from "./pages/DrugMasterFile";
import { AiFdaReadiness } from "./pages/AiFdaReadiness";
import { AiSamdPathway } from "./pages/AiSamdPathway";
import { AiRegulatoryStrategy } from "./pages/AiRegulatoryStrategy";
import { PccpAuthoring } from "./pages/PccpAuthoring";
import { FdaInteractionDefense } from "./pages/FdaInteractionDefense";
import { AiDesignControls } from "./pages/AiDesignControls";
import { AiAssistantWidget } from "./components/AiAssistantWidget";

// Placeholder components for future pages
// const Software = () => <div className="p-20 text-center text-2xl">Software Page Coming Soon</div>;
const NotFound = () => <div className="p-20 text-center text-2xl text-red-600">404 - Page Not Found</div>;

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white flex flex-col font-sans">
                <Routes>
                    {/* Main Landing Page */}
                    <Route path="/" element={<Home />} />

                    {/* Routes for the remaining pages we will build next */}
                    <Route path="/about" element={<About />} />
                    <Route path="/software" element={<Software />} />

                    <Route path="/reliability" element={<Reliability />} />
                    <Route path="/six-sigma-healthcare" element={<SixSigmaHealthcare />} />
                    <Route path="/medical-devices-quality-assurance" element={<MedicalDevices />} />
                    <Route path="/quality-assurance-audits" element={<Audits />} />
                    <Route path="/quality-system-regulation-qsr" element={<QualitySystemRegulation />} />
                    <Route path="/quality-management-system-implementation" element={<Iso9001Implementation />} />
                    <Route path="/iso-13485-medical-quality-system-registration" element={<Iso13485 />} />
                    <Route path="/iso-14971-medical-device-risk-management-for-medical-devices" element={<Iso14971 />} />
                    <Route path="/free-iso-13485-2016-gap-analysis-tool" element={<Iso13485GapAnalysis />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/software" element={<Software />} />
                    <Route path="/healthcare-software-development" element={<Software />} />
                    <Route path="/ccc-mark-approval" element={<CCCMarkApproval />} />
                    <Route path="/ce-mark-approval" element={<CEMarkApproval />} />
                    <Route path="/clinical-data-and-postmarket-compliance-under-the-mdr" element={<PostmarketCompliance />} />
                    <Route path="/fda-483-observations-warning-letters-recalls-remediation" element={<Fda483Warning />} />
                    <Route path="/pre-ide-process" element={<PreIdeProcess />} />
                    <Route path="/fda-establishment-registration" element={<FdaEstablishmentRegistration />} />
                    <Route path="/fda-510k-application" element={<Fda510kApplication />} />
                    <Route path="/fda-usa-agents-for-foreign-establishments" element={<FdaUsAgentForeign />} />

                    <Route path="/investigational-new-drug-ind-application" element={<IndApplication />} />
                    <Route path="/new-drug-application-overview" element={<NdaApplication />} />
                    <Route path="/abbreviated-new-drug-application-anda-submissions-overview" element={<AndaApplication />} />
                    <Route path="/biologics-license-application-bla-overview" element={<BiologicsLicenseApplication />} />

                    <Route path="/dmf" element={<DrugMasterFile />} />

                    <Route path="/cmc" element={<CmcServices />} />
                    {/* Fallback route */}

                    <Route path="/ai-samd-pathway" element={<AiSamdPathway />} />
                    <Route path="/ai-regulatory-strategy" element={<AiRegulatoryStrategy />} />
                    <Route path="/ai-fda-readiness" element={<AiFdaReadiness />} />
                    <Route path="/pccp-authoring" element={<PccpAuthoring />} />

                    <Route path="/ai-design-controls" element={<AiDesignControls />} />
                    <Route path="/fda-defense" element={<FdaInteractionDefense />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {/* Global AI assistant widget */}
                <AiAssistantWidget />
            </div>
        </Router>
    );
}

export default App;
