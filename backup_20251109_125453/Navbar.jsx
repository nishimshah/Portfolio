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
        ? 'bg-light-elevated/95 dark:bg-dark-elevated/95 backdrop-blur-md shadow-lg border-b border-border-light dark:border-border-dark' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-accent-primary dark:text-accent-primaryDark font-bold text-xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="text-2xl">✦</span>
          <span>NMS</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {['about', 'tech', 'projects', 'contact'].map((item, idx) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors text-sm font-medium relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-sage dark:bg-accent-sageDark group-hover:w-full transition-all duration-300"></span>
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
            className="text-textLight-heading dark:text-text-heading focus:outline-none p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-border-light dark:border-border-dark shadow-lg">
          <ul className="flex flex-col px-6 py-4">
            {['about', 'tech', 'projects', 'contact'].map((item) => (
              <li key={item} className="border-b border-border-light dark:border-border-dark last:border-0">
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="block py-4 text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors font-medium"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
