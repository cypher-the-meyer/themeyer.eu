import React, { useState } from 'react';

// --- CSS Styles (Simulating layout.css for the Preview) ---
const Styles = () => (
  <style>{`
    .bubble-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    }
    .bubble {
      position: absolute;
      bottom: -100px; /* Start below screen */
      background: rgba(59, 130, 246, 0.1); /* Blue-ish bubble */
      border-radius: 50%;
      animation: rise var(--duration) infinite ease-in;
    }
    @keyframes rise {
      0% { bottom: -100px; transform: translateX(0); }
      50% { transform: translateX(100px); }
      100% { bottom: 120%; transform: translateX(-200px); }
    }
    .glass {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
    }
    /* Hamburger Menu Animation classes */
    .menu-open #line1 { transform: rotate(45deg) translate(5px, 5px); }
    .menu-open #line2 { opacity: 0; }
    .menu-open #line3 { transform: rotate(-45deg) translate(5px, -5px); }
    .hidden-menu { display: none; }
  `}</style>
);

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen">
      <Styles />
      
      {/* --- Background Bubbles --- */}
      <div className="bubble-bg">
        <div className="bubble" style={{ width: '300px', height: '300px', left: '10%', '--duration': '15s' }}></div>
        <div className="bubble" style={{ width: '200px', height: '200px', left: '60%', '--duration': '12s', animationDelay: '2s' }}></div>
      </div>

      {/* --- Top Banner (Certifications) --- */}
      <div className="fixed top-0 w-full h-10 bg-[#0f172a] z-[60] flex items-center justify-between px-8 overflow-hidden">
        <span className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] whitespace-nowrap">
          Global Certifications & Standards
        </span>
        <div className="flex items-center space-x-4 md:space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">
          {['ISO 27001', 'ISO 9001', 'ASSE LEC 2004', 'ETL CERTIFIED', 'PCI DSS'].map((cert, index) => (
            <div key={index} className="flex items-center space-x-1 flex-shrink-0">
              <div className="w-1 h-3 bg-blue-500"></div>
              <span className="text-[9px] font-bold text-white tracking-widest uppercase">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed left-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center glass shadow-sm transition-all mt-10">
        {/* Logo */}
        <a href="/" className="block z-50">
          <img 
            src="https://raw.githubusercontent.com/cypher-the-meyer/themeyer.eu/main/themeyerlogo" 
            alt="The Meyer Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>
        
        {/* Desktop Links - UPDATED */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase opacity-60">
          <a href="pages/Tecnologia.html" className="hover:text-blue-600 transition-colors">Tecnologias</a>
          <a href="sustainability.html" className="hover:text-blue-600 transition-colors">Sustentabilidad</a>
          <a href="/pages/Nosotros.html" className="hover:text-blue-600 transition-colors">Nosotros</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md">
            DEMO
          </button>
          
          {/* Hamburger Button */}
          <button 
            id="menu-btn" 
            onClick={toggleMenu}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[110] ${isMobileMenuOpen ? 'menu-open' : ''}`}
          >
            <span className="block w-6 h-0.5 bg-gray-900 transition-transform duration-300" id="line1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 transition-opacity duration-300" id="line2"></span>
            <span className="block w-6 h-0.5 bg-gray-900 transition-transform duration-300" id="line3"></span>
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div 
        id="mobile-menu" 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden-menu'}`}
      >
        <div className="flex flex-col items-center space-y-8 text-xl font-bold tracking-[0.2em] uppercase text-gray-900">
          {/* Mobile Links - UPDATED for consistency */}
          <a /pages/Tecnologia.html className="mobile-link hover:text-blue-600 transition-colors" onClick={toggleMenu}>Tecnologias</a>
          <a href="#" className="mobile-link hover:text-blue-600 transition-colors" onClick={toggleMenu}>Sustentabilidad</a>
          <a href="https://github.com/cypher-the-meyer/themeyer.eu/blob/main/pages/Nosotros.html" className="mobile-link hover:text-blue-600 transition-colors" onClick={toggleMenu}>Nosotros</a>
        </div>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl">
          SOLICITAR DEMO
        </button>
      </div>

      {/* --- Main Page Content --- */}
      <main className="pt-32 px-4 md:px-8">
        {children}
      </main>

    </div>
  );
};

// --- Main App Component for Preview ---
export default function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Future of Technology
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Welcome to The Meyer. Please use the navigation links above to visit our specific technology pages on GitHub.
        </p>
      </div>
    </Layout>
  );
}
