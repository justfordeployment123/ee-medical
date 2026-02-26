// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Reliability } from "./pages/Reliability";

// Placeholder components for future pages
const Software = () => <div className="p-20 text-center text-2xl">Software Page Coming Soon</div>;
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
                    
                    {/* Newly added Reliability route */}
                    <Route path="/reliability" element={<Reliability />} />

                    {/* Fallback route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;