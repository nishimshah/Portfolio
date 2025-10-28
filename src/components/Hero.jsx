
// import { useEffect, useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';

// export default function Hero() {
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'I build exceptional digital experiences.';

//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 50);
//     return () => clearInterval(timer);
//   }, []);

//   const fadeIn = useSpring({
//     from: { opacity: 0, y: 30 },
//     to: { opacity: 1, y: 0 },
//     delay: 200
//   });

//   return (
//     <section id="hero" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto bg-light-bg dark:bg-dark-bg">
//       <animated.div style={fadeIn} className="max-w-3xl">
//         <div className="text-accent-primary dark:text-accent-primaryDark font-mono mb-4 text-base md:text-lg">
//           Hi, my name is
//         </div>
        
//         <h1 className="text-5xl md:text-7xl font-bold text-textLight-heading dark:text-text-heading mb-2">
//           Nishi M Shah.
//         </h1>
        
//         <h2 className="text-4xl md:text-6xl font-bold text-textLight-secondary dark:text-text-secondary mb-6">
//           {displayedText}<span className="animate-pulse">|</span>
//         </h2>
        
//         <p className="text-textLight-secondary dark:text-text-secondary text-lg max-w-xl leading-relaxed mb-12">
//           Pursuing Bachelors in Computer Science and Engineering
//         </p>

//         <div className="flex gap-4">
//           <a
//             href="#projects"
//             className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-8 py-4 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono"
//           >
//             Check out my work!
//           </a>
          
//         </div>
//       </animated.div>
//     </section>
//   );
// }
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I build exceptional digital experiences.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 200
  });

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto bg-light-bg dark:bg-dark-bg">
      <animated.div style={fadeIn} className="max-w-3xl">
        <div className="text-accent-primary dark:text-accent-primaryDark font-mono mb-4 text-base md:text-lg">
          Hi, my name is
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-textLight-heading dark:text-text-heading mb-2">
          Nishi M Shah.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-textLight-secondary dark:text-text-secondary mb-6">
          {displayedText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-textLight-secondary dark:text-text-secondary text-lg max-w-xl leading-relaxed mb-12">
          Pursuing Bachelors in Computer Science and Engineering
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-8 py-4 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono"
          >
            Check out my work!
          </a>
          
          {/* Resume Dropdown */}
          <div className="relative group">
            <button className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-8 py-4 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono flex items-center gap-2">
              Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <a
                href="/ShahNishiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-t-lg font-mono"
              >
                View Resume
              </a>
              <a
                href="/ShahNishiResume.pdf"
                download="Nishi_Shah_Resume.pdf"
                className="block px-6 py-3 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-b-lg font-mono"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
