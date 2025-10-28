// import { useState, useEffect } from 'react';
// import { animated, useSpring } from '@react-spring/web';
// import LightDarkToggle from './LightDarkToggle.jsx';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       scrolled 
//         ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg shadow-lg border-b border-border-light dark:border-border-dark' 
//         : 'bg-transparent'
//     }`}>
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <a href="#hero" className="text-accent-primary dark:text-accent-primaryDark font-mono text-lg font-bold hover:scale-105 transition-transform">
//           &lt;NMS /&gt;
//         </a>
        
//         <ul className="hidden md:flex items-center space-x-8">
//           {['about', 'tech', 'projects', 'contact'].map((item, idx) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors font-mono text-sm group"
//               >
//                 <span className="text-accent-primary dark:text-accent-primaryDark mr-1">0{idx + 1}.</span>
//                 <span className="group-hover:translate-x-1 inline-block transition-transform">{item}</span>
//               </a>
//             </li>
//           ))}
//       <li className="relative group">
//   <button className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-4 py-2 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono text-sm flex items-center gap-2">
//     Resume
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//     </svg>
//   </button>
  
//   {/* Dropdown menu */}
//   <div className="absolute top-full right-0 mt-2 w-40 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//     <a
//       href="/ShahNishiResume.pdf"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block px-4 py-2 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-t-lg"
//     >
//       View Resume
//     </a>
//     <a
//       href="/ShahNishiResume.pdf"
//       download="Nishi_Shah_Resume.pdf"
//       className="block px-4 py-2 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-b-lg"
//     >
//       Download Resume
//     </a>
//   </div>
// </li>

//           <li>
//             <LightDarkToggle />
//           </li>
//         </ul>

//         <div className="md:hidden flex items-center gap-3">
//           <LightDarkToggle />
//         </div>
//       </div>
//     </nav>
//   );
// }
import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
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
        ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg shadow-lg border-b border-border-light dark:border-border-dark' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-accent-primary dark:text-accent-primaryDark font-mono text-lg font-bold hover:scale-105 transition-transform"
        >
          &lt;NMS /&gt;
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
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors font-mono text-sm group"
              >
                <span className="text-accent-primary dark:text-accent-primaryDark mr-1">0{idx + 1}.</span>
                <span className="group-hover:translate-x-1 inline-block transition-transform">{item}</span>
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
            className="text-textLight-heading dark:text-text-heading focus:outline-none"
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
        <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-border-light dark:border-border-dark shadow-lg">
          <ul className="flex flex-col px-6 py-4">
            {['about', 'tech', 'projects', 'contact'].map((item, idx) => (
              <li key={item} className="border-b border-border-light dark:border-border-dark last:border-0">
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="block py-3 text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors font-mono text-sm"
                >
                  <span className="text-accent-primary dark:text-accent-primaryDark mr-2">
                    0{idx + 1}.
                  </span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            
            {/* Resume Links */}
           
          </ul>
        </div>
      )}
    </nav>
  );
}
