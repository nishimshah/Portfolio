// // // // // // // // export default function Hero() {
// // // // // // // //   return (
// // // // // // // //     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 p-8 rounded-lg shadow-lg">
// // // // // // // //       <div className="max-w-2xl text-center">
// // // // // // // //         <h1 className="text-5xl font-bold mb-4">Nishi M Shah</h1>
// // // // // // // //         <p className="text-xl mb-6 italic">Turning ideas into code</p>
// // // // // // // //         <button className="px-6 py-3 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition">View My Work</button>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // export default function Hero() {
// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       id="hero"
// // // // // // //       className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-background via-blue-100 to-accent2 rounded-3xl shadow-lg mb-16"
// // // // // // //     >
// // // // // // //       <div className="max-w-2xl text-center p-10">
// // // // // // //         <h1 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-5">Nishi M Shah</h1>
// // // // // // //         <p className="text-2xl text-textSubtle mb-8 font-body">Turning ideas into code</p>
// // // // // // //         <a href="#projects">
// // // // // // //           <button className="px-7 py-3 bg-accent hover:bg-accent2 text-white font-heading rounded-full shadow transition text-lg">
// // // // // // //             View My Work
// // // // // // //           </button>
// // // // // // //         </a>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // export default function Hero() {
// // // // // //   return (
// // // // // //     <section id="hero" className="flex items-center justify-center min-h-screen text-center bg-gradient-to-br from-bgDark via-bgLight to-accent">
// // // // // //       <div>
// // // // // //         <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent2 to-textLight mb-6">
// // // // // //           Nishi M Shah
// // // // // //         </h1>
// // // // // //         <p className="text-2xl font-code text-textMuted mb-10">code. design. build. repeat.</p>
// // // // // //         <a href="#projects">
// // // // // //           <button className="px-8 py-3 text-lg bg-gradient-to-r from-accent to-accent2 text-white font-heading rounded-xl shadow-lg hover:scale-105 transition">
// // // // // //             See My Work
// // // // // //           </button>
// // // // // //         </a>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // import { useSpring, animated } from '@react-spring/web';

// // // // // export default function Hero() {
// // // // //   const fade = useSpring({ from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 }, config: { tension: 180 } });

// // // // //   return (
// // // // //     <animated.section style={fade} id="hero" className="flex flex-col sm:flex-row items-center justify-center min-h-[80vh] px-6 pt-24 gap-14">
// // // // //       <div className="sm:w-2/3">
// // // // //         <h1 className="font-heading text-[3.2rem] sm:text-[4.4rem] font-extrabold bg-gradient-to-r from-accent to-accent2 text-transparent bg-clip-text leading-tight mb-4">
// // // // //           Code Enthusiast<br />Full Stack Explorer
// // // // //         </h1>
// // // // //         <p className="text-xl font-body text-textSubtle mb-6">Building stunning UIs, shipping technical magic, and contributing to open source daily.</p>
// // // // //         <a href="#projects">
// // // // //           <button className="px-8 py-3 text-lg bg-gradient-to-r from-accent2 via-accent3 to-accent text-white font-heading rounded-2xl shadow hover:scale-105 active:scale-95 transition-all">
// // // // //             View Portfolio
// // // // //           </button>
// // // // //         </a>
// // // // //       </div>
// // // // //       <div className="hidden sm:block sm:w-1/3 relative">
// // // // //         <div className="absolute top-0 left-9 w-56 h-56 rounded-full bg-gradient-to-br from-accent2 to-accent3 opacity-30 animate-pulse"></div>
// // // // //         <div className="relative z-20">
// // // // //           <svg width="120" height="120" className="mx-auto" viewBox="0 0 120 120">
// // // // //             <circle cx="60" cy="60" r="54" stroke="#38BDF8" strokeWidth="8" fill="#fff" />
// // // // //             <text x="60" y="75" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="38" fill="#2563EB">{"< />"}</text>
// // // // //           </svg>
// // // // //         </div>
// // // // //       </div>
// // // // //     </animated.section>
// // // // //   );
// // // // // }
// // // // import { useSpring, animated } from '@react-spring/web'

// // // // export default function Hero() {
// // // //   const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1200 } });

// // // //   return (
// // // //     <animated.section style={fadeIn} className="flex justify-center items-center min-h-[35vh]">
// // // //       <h1 className="font-heading text-6xl font-extrabold text-accent tracking-tight">
// // // //         Nishi M Shah
// // // //       </h1>
// // // //     </animated.section>
// // // //   )
// // // // }
// // // import { animated, useSpring } from '@react-spring/web';

// // // export default function Hero() {
// // //   const spring = useSpring({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, delay: 200 });
// // //   return (
// // //     <animated.section style={spring} className="flex flex-col justify-center items-center min-h-[60vh] px-6">
// // //       <h1 className="font-heading text-neonGreen text-6xl tracking-wide font-bold mb-4 drop-shadow-neon">
// // //         NISHI M SHAH
// // //       </h1>
// // //       <p className="font-code text-textSecondary italic tracking-widest text-sm mt-1">CODE ENTHUSIAST & SOFTWARE ENGINEER</p>
// // //     </animated.section>
// // //   );
// // // }
// // import { animated, useSpring } from '@react-spring/web';

// // export default function Hero() {
// //   const spring = useSpring({ from: { opacity: 0, y: -30 }, to: { opacity: 1, y: 0 }, delay: 200 });
// //   return (
// //     <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 bg-gradient-to-tr from-blue-900 via-purple-900 to-black font-mono text-center">
// //       <animated.div style={spring} className="px-6 md:max-w-xl md:text-left mb-12 md:mb-0">
// //         <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-neonCyan to-neonBlue bg-clip-text text-transparent mb-4 drop-shadow-lg">
// //           THE CYBER DEV
// //         </h1>
// //         <p className="text-xl md:text-2xl mb-6 text-neonGreenest font-code">Coding the unseen, slashing through code barriers</p>
// //         <a href="#projects" className="inline-block px-8 py-3 border-2 border-neonCyan rounded-full font-semibold hover:bg-neonCyan hover:text-bgDark transition">
// //           Explore Projects
// //         </a>
// //       </animated.div>
// //       <div className="w-full md:w-1/3 relative">
// //         <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-neonPurple to-neonBlue opacity-20 blur-[60px] animate-pulse"></div>
// //         <div className="relative z-10 mt-12 md:mt-0 px-4 py-8 backdrop-blur-lg bg-black/20 rounded-3xl border border-border backdrop-filter shadow-xl">
// //           <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="#39FF14" strokeWidth={2} viewBox="0 0 64 64">
// //             <circle cx="32" cy="32" r="30" />
// //             <path d="M16 32l16 12 16-24" strokeLinecap="round" strokeLinejoin="round" />
// //           </svg>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useSpring, animated, useTrail } from '@react-spring/web';
// import { useEffect, useState } from 'react';

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
//     <section id="hero" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
//       <animated.div style={fadeIn} className="max-w-3xl">
//         <div className="text-accent-primary font-mono mb-4 text-base md:text-lg">
//           Hi, my name is
//         </div>
        
//         <h1 className="text-5xl md:text-7xl font-bold text-text-heading mb-2">
//           Nishi M Shah.
//         </h1>
        
//         <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
//           {displayedText}<span className="animate-pulse">|</span>
//         </h2>
        
//         <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-12">
//           I'm a software engineer specializing in building exceptional digital experiences. 
//           Currently focused on creating accessible, human-centered products with modern tech stacks.
//         </p>

//         <div className="flex gap-4">
//           <a
//             href="#projects"
//             className="border-2 border-accent-primary text-accent-primary px-8 py-4 rounded hover:bg-accent-primary/10 transition-all font-mono"
//           >
//             Check out my work!
//           </a>
//         </div>

//         {/* Decorative element */}
//         <div className="absolute top-1/2 right-10 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -z-10" />
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

        <div className="flex gap-4">
          <a
            href="#projects"
            className="border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-8 py-4 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono"
          >
            Check out my work!
          </a>
        </div>
      </animated.div>
    </section>
  );
}
