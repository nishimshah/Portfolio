
// import { useSpring, animated } from '@react-spring/web';
// import { useInView } from 'react-intersection-observer';
// import profilePic from '../assets/nishi12.jpg';

// export default function AboutMe() {
//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
//   const fadeIn = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
//     config: { tension: 200, friction: 30 }
//   });

//   const skills = [
//     'JavaScript (ES6+)', 'React', 'Node.js',
//     'Python', 'Django', 'PostgreSQL',
//     'Tailwind CSS', 'Git', 'Docker'
//   ];

//   return (
//     <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-6xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
//       <animated.div style={fadeIn} className="w-full">
//         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center">
//           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">01.</span>
//           About Me
//           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs" />
//         </h2>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Profile Image Card - Takes 1 column */}
//           <div className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-all">
//             <div className="relative group">
//               <div className="w-53 h-57 rounded-2xl overflow-hidden border-4 border-accent-primary/20 dark:border-accent-primaryDark/20 group-hover:border-accent-primary dark:group-hover:border-accent-primaryDark transition-all">
//                 <img
//                   src={profilePic}
//                   alt="Nishi M Shah"
//                   className="w-full h-full object-cover transition-all duration-300"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bio Text - Takes 2 columns */}
//           <div className="md:col-span-2 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-2xl p-8 hover:shadow-lg transition-all">
//             <h3 className="text-2xl font-bold text-textLight-heading dark:text-text-heading mb-4">
//               Hi, I'm Nishi! 👋
//             </h3>
//             <div className="space-y-4 text-textLight-secondary dark:text-text-secondary leading-relaxed">
//               <p>
//                  A computer science student passionate about creating things that live on the internet.
                
//               </p>
          
//               <p className="space-y-3">
//               <span className="block mt-2">
//                 <span className="text-accent-primary dark:text-accent-primaryDark font-bold">BTech in Computer Science and Engineering</span> at LJ Institute of Engineering and Technology [2023 – 2027]
//               </span>
              
//               <span className="block mt-3">
//                 <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 12</span> - GSEB (Grade B2)
//                 <br />
//                 Little Flower School [2023]
//               </span>
              
//               <span className="block mt-3">
//                 <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 10</span> - GSEB (Grade B2)
//                 <br />
//                 Little Flower School [2021]
//               </span>
              
//               <span className="block mt-3">
//                 <span className="text-accent-primary dark:text-accent-primaryDark font-bold">SPI:</span> 9.28 / 10.0 (upto 4th semester)
//               </span>
              
//               <span className="block mt-3">
//                 <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Languages known:</span> English, Gujarati, Hindi
//               </span>
//             </p>

//             </div>
//           </div>
//         </div>
//       </animated.div>
//     </section>
//   );
// }
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/nishi12.jpg';

export default function AboutMe() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 200, friction: 30 }
  });

  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js',
    'Python', 'Django', 'PostgreSQL',
    'Tailwind CSS', 'Git', 'Docker'
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-6xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
      <animated.div style={fadeIn} className="w-full">
        <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center">
          <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">01.</span>
          About Me
          <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs" />
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Profile Image Card - Takes 1 column */}
          <div className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all">
            <div className="relative group mb-6">
              <div className="w-53 h-57 rounded-2xl overflow-hidden border-4 border-accent-primary/20 dark:border-accent-primaryDark/20 group-hover:border-accent-primary dark:group-hover:border-accent-primaryDark transition-all">
                <img
                  src={profilePic}
                  alt="Nishi M Shah"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 w-full">
              <a
                href="https://github.com/nishimshah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/nishi-m-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:nishimshah@example.com"
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bio Text - Takes 2 columns */}
          <div className="md:col-span-2 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-2xl p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-textLight-heading dark:text-text-heading mb-4">
              Hi, I'm Nishi! 👋
            </h3>
            <div className="space-y-4 text-textLight-secondary dark:text-text-secondary leading-relaxed">
              <p>
                A computer science student passionate about creating things that live on the internet.
              </p>
          
              <div className="space-y-3">
                <div>
                  <span className="text-accent-primary dark:text-accent-primaryDark font-bold">BTech in Computer Science and Engineering</span>
                  <br />
                  <span className="text-sm">LJ Institute of Engineering and Technology [2023 – 2027]</span>
                </div>
                
                <div>
                  <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 12</span> - GSEB (Grade B2)
                  <br />
                  <span className="text-sm">Little Flower School [2023]</span>
                </div>
                
                <div>
                  <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 10</span> - GSEB (Grade B2)
                  <br />
                  <span className="text-sm">Little Flower School [2021]</span>
                </div>
                
                <div>
                  <span className="text-accent-primary dark:text-accent-primaryDark font-bold">SPI:</span> 9.28 / 10.0 (upto 4th semester)
                </div>
                
                <div>
                  <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Languages known:</span> English, Gujarati, Hindi
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
