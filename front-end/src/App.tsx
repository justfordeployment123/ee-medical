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
import { CEMarkApproval } from "./pages/CEMarkApproval";
import { CCCMarkApproval } from "./pages/CCCMarkApproval";
import { PostmarketCompliance } from "./pages/PostmarketCompliance";
import { Fda483Warning } from "./pages/Fda483Warning";

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
                    <Route path="/software" element={<Software />} />
                    <Route path="/healthcare-software-development" element={<Software />} />
                    <Route path="/ccc-mark-approval" element={<CCCMarkApproval />} />
                    <Route path="/ce-mark-approval" element={<CEMarkApproval />} />
                    <Route path="/clinical-data-and-postmarket-compliance-under-the-mdr" element={<PostmarketCompliance />} />
                    <Route path="/fda-483-observations-warning-letters-recalls-remediation" element={<Fda483Warning />} />

                    {/* Fallback route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
