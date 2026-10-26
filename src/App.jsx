import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './Pages/HOME/hero';
import Rent from './Pages/Rent';
import Gallery from './Pages/Gallery';
import Service from './Pages/Service';
import About from './Pages/About';
import Contact from './Pages/Contect';
import Footer from './components/Footer';

// Helper component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-[#f4f8fc] text-[#0b1a30] selection:bg-amber-400 selection:text-black flex flex-col">
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar />

      {/* Multi-Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
