import { useState, useEffect } from 'react';
import LightDarkToggle from './LightDarkToggle.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-2xl font-bold font-display bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          NMS
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { id: 'about', label: 'About' },
            { id: 'tech', label: 'Tech Stack' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="relative text-gray-700 dark:text-gray-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          
          <li>
            <LightDarkToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LightDarkToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/5 shadow-xl">
          <ul className="flex flex-col px-6 py-4">
            {[
              { id: 'about', label: 'About', icon: '👤' },
              { id: 'tech', label: 'Tech Stack', icon: '⚡' },
              { id: 'projects', label: 'Projects', icon: '💼' },
              { id: 'contact', label: 'Contact', icon: '📧' }
            ].map((item) => (
              <li key={item.id} className="border-b border-gray-200 dark:border-white/5 last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="flex items-center gap-3 py-4 text-gray-700 dark:text-gray-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors font-medium"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
