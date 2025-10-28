// // // // // // // import { useState } from 'react';
// // // // // // // import LightDarkToggle from './LightDarkToggle.jsx';

// // // // // // // export default function Navbar() {
// // // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // // //   return (
// // // // // // //     <nav className="bg-offWhite dark:bg-darkNavy shadow-md sticky top-0 z-50">
// // // // // // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// // // // // // //         {/* Brand/Logo */}
// // // // // // //         <a href="#hero" className="text-2xl font-heading font-bold text-accentPurple hover:text-purple-700 dark:hover:text-neonPastel transition">
// // // // // // //           YourLogo
// // // // // // //         </a>

// // // // // // //         {/* Desktop nav links */}
// // // // // // //         <ul className="hidden md:flex space-x-8 font-body text-gray-800 dark:text-neonPastel">
// // // // // // //           <li><a href="#about" className="hover:text-accentPurple transition">About Me</a></li>
// // // // // // //           <li><a href="#tech" className="hover:text-accentPurple transition">Tech Stack</a></li>
// // // // // // //           <li><a href="#projects" className="hover:text-accentPurple transition">Projects</a></li>
// // // // // // //           <li><a href="#experience" className="hover:text-accentPurple transition">Experience</a></li>
// // // // // // //           <li><a href="#contact" className="hover:text-accentPurple transition">Contact</a></li>
// // // // // // //         </ul>

// // // // // // //         {/* Mobile menu toggle */}
// // // // // // //         <div className="md:hidden flex items-center space-x-4">
// // // // // // //           <LightDarkToggle />
// // // // // // //           <button
// // // // // // //             className="text-accentPurple focus:outline-none focus:ring-2 focus:ring-accentPurple rounded-md"
// // // // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // // // //             aria-label="Toggle menu"
// // // // // // //           >
// // // // // // //             <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //               {isOpen ? (
// // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // //               ) : (
// // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
// // // // // // //               )}
// // // // // // //             </svg>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile nav */}
// // // // // // //       {isOpen && (
// // // // // // //         <div className="md:hidden bg-offWhite dark:bg-darkNavy px-6 pb-4 space-y-4 font-body text-gray-800 dark:text-neonPastel">
// // // // // // //           <a href="#about" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>About Me</a>
// // // // // // //           <a href="#tech" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Tech Stack</a>
// // // // // // //           <a href="#projects" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Projects</a>
// // // // // // //           <a href="#experience" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Experience</a>
// // // // // // //           <a href="#contact" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Contact</a>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useState } from 'react';
// // // // // // import LightDarkToggle from './LightDarkToggle.jsx';

// // // // // // export default function Navbar() {
// // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // //   return (
// // // // // //     <nav className="bg-offWhite dark:bg-darkNavy shadow-md sticky top-0 z-50">
// // // // // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// // // // // //         {/* Brand/Logo */}
// // // // // //         <a
// // // // // //           href="#hero"
// // // // // //           className="text-2xl font-heading font-bold text-accentPurple hover:text-purple-700 dark:hover:text-neonPastel transition"
// // // // // //         >
// // // // // //           YourLogo
// // // // // //         </a>

// // // // // //         {/* Desktop nav links */}
// // // // // //         <ul className="hidden md:flex items-center space-x-8 font-body text-gray-800 dark:text-neonPastel">
// // // // // //           <li><a href="#about" className="hover:text-accentPurple transition">About Me</a></li>
// // // // // //           <li><a href="#tech" className="hover:text-accentPurple transition">Tech Stack</a></li>
// // // // // //           <li><a href="#projects" className="hover:text-accentPurple transition">Projects</a></li>
// // // // // //           <li><a href="#experience" className="hover:text-accentPurple transition">Experience</a></li>
// // // // // //           <li><a href="#contact" className="hover:text-accentPurple transition">Contact</a></li>
// // // // // //           <li><LightDarkToggle /> </li>
// // // // // //         </ul>

// // // // // //         {/* Mobile menu toggle + dark mode toggle together */}
// // // // // //         <div className="md:hidden flex items-center space-x-4">
// // // // // //           <LightDarkToggle />
// // // // // //           <button
// // // // // //             className="text-accentPurple focus:outline-none focus:ring-2 focus:ring-accentPurple rounded-md"
// // // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // // //             aria-label="Toggle menu"
// // // // // //           >
// // // // // //             <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //               {isOpen ? (
// // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // //               ) : (
// // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
// // // // // //               )}
// // // // // //             </svg>
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile nav */}
// // // // // //       {isOpen && (
// // // // // //         <div className="md:hidden bg-offWhite dark:bg-darkNavy px-6 pb-4 space-y-4 font-body text-gray-800 dark:text-neonPastel">
// // // // // //           <a href="#about" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>About Me</a>
// // // // // //           <a href="#tech" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Tech Stack</a>
// // // // // //           <a href="#projects" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Projects</a>
// // // // // //           <a href="#experience" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Experience</a>
// // // // // //           <a href="#contact" className="block hover:text-accentPurple transition" onClick={() => setIsOpen(false)}>Contact</a>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </nav>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from 'react';
// // // // // import LightDarkToggle from './LightDarkToggle.jsx';
// // // // // import { animated, useSpring } from '@react-spring/web';

// // // // // export default function Navbar() {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const navAnim = useSpring({ from: { opacity: 0, y: -40 }, to: { opacity: 1, y: 0 }, config: { tension: 250 } });

// // // // //   return (
// // // // //     <animated.nav style={navAnim} className="bg-card shadow-glass fixed top-0 left-0 right-0 z-50 md:rounded-b-3xl border-b border-border">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
// // // // //         <a href="#hero" className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2 drop-shadow-lg">
// // // // //           Nishi M Shah
// // // // //         </a>
// // // // //         <ul className="hidden md:flex items-center space-x-8 font-body text-textSubtle">
// // // // //           <li><a href="#about" className="hover:text-accent transition font-semibold">About</a></li>
// // // // //           <li><a href="#tech" className="hover:text-accent transition font-semibold">Tech</a></li>
// // // // //           <li><a href="#projects" className="hover:text-accent transition font-semibold">Projects</a></li>
// // // // //           <li><a href="#experience" className="hover:text-accent transition font-semibold">Experience</a></li>
// // // // //           <li><a href="#contact" className="hover:text-accent transition font-semibold">Contact</a></li>
// // // // //           <li><LightDarkToggle /></li>
// // // // //         </ul>
// // // // //         <div className="md:hidden flex items-center space-x-2">
// // // // //           <LightDarkToggle />
// // // // //           <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-accent focus:outline-none">
// // // // //             <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //               {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />}
// // // // //             </svg>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //       {isOpen && (
// // // // //         <div className="md:hidden bg-card shadow-glass px-6 pb-3 space-y-3 font-body text-textMain border-b border-border">
// // // // //           {['About', 'Tech', 'Projects', 'Experience', 'Contact'].map(section => (
// // // // //             <a href={`#${section.toLowerCase()}`} className="block hover:text-accent font-semibold" key={section} onClick={() => setIsOpen(false)}>{section}</a>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </animated.nav>
// // // // //   );
// // // // // }
// // // // import { useState } from 'react';
// // // // import LightDarkToggle from './LightDarkToggle.jsx';

// // // // export default function Navbar() {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-background/80 z-50 border-b border-borderNeon">
// // // //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
// // // //         <a
// // // //           href="#hero"
// // // //           className="text-neonGreen font-heading text-3xl font-extrabold tracking-widest hover:drop-shadow-neon transition duration-300"
// // // //         >
// // // //           NISHI M SHAH
// // // //         </a>
// // // //         <ul className="hidden md:flex space-x-10 font-body text-textSecondary uppercase tracking-wider">
// // // //           {['about', 'tech', 'projects', 'experience', 'contact'].map((section) => (
// // // //             <li key={section}>
// // // //               <a href={`#${section}`} className="hover:text-neonGreen hover:drop-shadow-neon transition">
// // // //                 {section}
// // // //               </a>
// // // //             </li>
// // // //           ))}
// // // //           <li><LightDarkToggle /></li>
// // // //         </ul>

// // // //         <div className="md:hidden flex items-center space-x-4">
// // // //           <LightDarkToggle />
// // // //           <button
// // // //             className="text-neonGreen focus:outline-none"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //             aria-label="Menu toggle"
// // // //           >
// // // //             {isOpen ? (
// // // //               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //               </svg>
// // // //             ) : (
// // // //               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
// // // //               </svg>
// // // //             )}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //       {isOpen && (
// // // //         <div className="md:hidden bg-background/90 backdrop-blur-md p-6 space-y-8 font-body text-textPrimary uppercase text-center tracking-wider">
// // // //           {['about', 'tech', 'projects', 'experience', 'contact'].map((section) => (
// // // //             <a
// // // //               key={section}
// // // //               href={`#${section}`}
// // // //               className="block hover:text-neonGreen hover:drop-shadow-neon transition"
// // // //               onClick={() => setIsOpen(false)}
// // // //             >
// // // //               {section}
// // // //             </a>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }
// // // import { useState } from 'react';
// // // import LightDarkToggle from './LightDarkToggle.jsx';

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   return (
// // //     <nav className="fixed top-0 w-full backdrop-blur-lg bg-bgDark/70 z-50 border-b border-border flex justify-between items-center px-6 py-3 shadow-lg border-t-0 border-b-4 border-blue-900">
// // //       <a href="#hero" className="font-heading text-3xl font-extrabold bg-gradient-to-r from-neonCyan to-neonBlue bg-clip-text text-transparent tracking-widest hover:drop-shadow-neonGlow transition">
// // //         CODEVAULT
// // //       </a>
// // //       <ul className="hidden md:flex space-x-8 uppercase tracking-wide font-code text-neonGreen">
// // //         {['about', 'tech', 'projects', 'experience', 'contact'].map((sec) => (
// // //           <li key={sec}>
// // //             <a href={`#${sec}`} className="hover:text-neonCyan transition">{sec}</a>
// // //           </li>
// // //         ))}
// // //         <li><LightDarkToggle /></li>
// // //       </ul>
// // //       {/* Mobile menu toggle */}
// // //       <div className="md:hidden flex items-center space-x-3">
// // //         <LightDarkToggle />
// // //         <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="text-neonGreen focus:outline-none">
// // //           {isOpen ? (
// // //             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //             </svg>
// // //           ) : (
// // //             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
// // //             </svg>
// // //           )}
// // //         </button>
// // //       </div>
// // //       {isOpen && (
// // //         <div className="md:hidden bg-bgLight p-6 border-t border-border flex flex-col space-y-4 uppercase font-code text-neonGreen">
// // //           {['about', 'tech', 'projects', 'experience', 'contact'].map((sec) => (
// // //             <a key={sec} href={`#${sec}`} onClick={() => setIsOpen(false)} className="hover:text-neonCyan transition">{sec}</a>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }
// // import { useState, useEffect } from 'react';
// // import { animated, useSpring } from '@react-spring/web';

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [activeSection, setActiveSection] = useState('');

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navSpring = useSpring({
// //     backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'rgba(10, 25, 47, 0)',
// //     backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)'
// //   });

// //   return (
// //     <animated.nav
// //       style={navSpring}
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //         scrolled ? 'shadow-lg border-b border-dark-elevated/50' : ''
// //       }`}
// //     >
// //       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
// //         <a href="#hero" className="text-accent-primary font-mono text-lg font-bold hover:scale-105 transition-transform">
// //           &lt;NMS /&gt;
// //         </a>
        
// //         <ul className="hidden md:flex items-center space-x-8">
// //   {['about', 'tech', 'projects', 'contact'].map((item, idx) => (
// //     <li key={item}>
// //       <a
// //         href={`#${item}`}
// //         className="text-text-secondary hover:text-accent-primary transition-colors font-mono text-sm group"
// //       >
// //         <span className="text-accent-primary mr-1">0{idx + 1}.</span>
// //         <span className="group-hover:translate-x-1 inline-block transition-transform">
// //           {item === 'tech' ? 'tech stack' : item}
// //         </span>
// //       </a>
// //     </li>
// //   ))}
// //           <li>
// //             <a
// //               href="/resume.pdf"
// //               className="border border-accent-primary text-accent-primary px-4 py-2 rounded hover:bg-accent-primary/10 transition-all font-mono text-sm"
// //             >
// //               Resume
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Mobile menu button */}
// //         <button className="md:hidden text-accent-primary">
// //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //           </svg>
// //         </button>
// //       </div>
// //     </animated.nav>
// //   );
// // }
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

//   const navSpring = useSpring({
//     backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'rgba(10, 25, 47, 0)',
//     backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)'
//   });

//   return (
//     <animated.nav
//       style={navSpring}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'shadow-lg border-b border-dark-elevated/50' : ''
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <a href="#hero" className="text-accent-primary font-mono text-lg font-bold hover:scale-105 transition-transform">
//           &lt;NMS /&gt;
//         </a>
        
//         <ul className="hidden md:flex items-center space-x-8">
//           {['about', 'tech', 'projects', 'experience', 'contact'].map((item, idx) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 className="text-text-secondary hover:text-accent-primary transition-colors font-mono text-sm group"
//               >
//                 <span className="text-accent-primary mr-1">0{idx + 1}.</span>
//                 <span className="group-hover:translate-x-1 inline-block transition-transform">{item}</span>
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href="/resume.pdf"
//               className="border border-accent-primary text-accent-primary px-4 py-2 rounded hover:bg-accent-primary/10 transition-all font-mono text-sm"
//             >
//               Resume
//             </a>
//           </li>
//           <li>
//             <LightDarkToggle />
//           </li>
//         </ul>

//         {/* Mobile menu */}
//         <div className="md:hidden flex items-center gap-3">
//           <LightDarkToggle />
//           <button className="text-accent-primary">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </animated.nav>
//   );
// }
import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import LightDarkToggle from './LightDarkToggle.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg shadow-lg border-b border-border-light dark:border-border-dark' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-accent-primary dark:text-accent-primaryDark font-mono text-lg font-bold hover:scale-105 transition-transform">
          &lt;NMS /&gt;
        </a>
        
        <ul className="hidden md:flex items-center space-x-8">
          {['about', 'tech', 'projects', 'contact'].map((item, idx) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors font-mono text-sm group"
              >
                <span className="text-accent-primary dark:text-accent-primaryDark mr-1">0{idx + 1}.</span>
                <span className="group-hover:translate-x-1 inline-block transition-transform">{item}</span>
              </a>
            </li>
          ))}
      <li className="relative group">
  <button className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-4 py-2 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono text-sm flex items-center gap-2">
    Resume
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  
  {/* Dropdown menu */}
  <div className="absolute top-full right-0 mt-2 w-40 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
    <a
      href="/ShahNishiResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-t-lg"
    >
      View Resume
    </a>
    <a
      href="/ShahNishiResume.pdf"
      download="Nishi_Shah_Resume.pdf"
      className="block px-4 py-2 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-b-lg"
    >
      Download Resume
    </a>
  </div>
</li>

          <li>
            <LightDarkToggle />
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <LightDarkToggle />
        </div>
      </div>
    </nav>
  );
}
