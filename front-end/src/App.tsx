import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

// Placeholder components for future pages
const About = () => <div className="p-20 text-center text-2xl">About Us Page Coming Soon</div>;
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
          
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;