// // // // // // // import { useState } from 'react'
// // // // // // // import reactLogo from './assets/react.svg'
// // // // // // // import viteLogo from '/vite.svg'
// // // // // // // import './App.css'

// // // // // // // function App() {
// // // // // // //   const [count, setCount] = useState(0)

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <div>
// // // // // // //          <h1 class="text-3xl font-bold underline">
// // // // // // //     Hello world!
// // // // // // //   </h1>
// // // // // // //        </div>
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default App

// // // // // // import Hero from './components/Hero.jsx';
// // // // // // import AboutMe from './components/AboutMe.jsx';
// // // // // // import TechStack from './components/TechStack.jsx';
// // // // // // import Projects from './components/Projects.jsx';
// // // // // // import Experience from './components/Experience.jsx';
// // // // // // import Testimonials from './components/Testimonials.jsx';
// // // // // // import Contact from './components/Contact.jsx';
// // // // // // import './index.css';

// // // // // // export default function App() {
// // // // // //   return (
// // // // // //     <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans transition-colors duration-300">
// // // // // //       <Hero />
// // // // // //       <AboutMe />
// // // // // //       <TechStack />
// // // // // //       <Projects />
// // // // // //       <Experience />
// // // // // //       <Testimonials />
// // // // // //       <Contact />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import Hero from './components/Hero.jsx'
// // // // // import AboutMe from './components/AboutMe.jsx'
// // // // // import TechStack from './components/TechStack.jsx'
// // // // // import Projects from './components/Projects.jsx'

// // // // // import Contact from './components/Contact.jsx'
// // // // // import Navbar from './components/Navbar.jsx'

// // // // // export default function App() {
// // // // //   return (
// // // // //       <div className="bg-bgDark text-textLight min-h-screen font-body">

// // // // //       <Navbar/>
      

// // // // //       <Hero />
// // // // //       <AboutMe />
// // // // //       <TechStack />
// // // // //       <Projects />

// // // // //       <Contact />
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // import Navbar from './components/Navbar.jsx'
// // // // import Hero from './components/Hero.jsx'
// // // // import AboutMe from './components/AboutMe.jsx'
// // // // import TechStack from './components/TechStack.jsx'
// // // // import Projects from './components/Projects.jsx'
// // // // import Contact from './components/Contact.jsx'
// // // // import './index.css'

// // // // export default function App() {
// // // //   return (
// // // //     <div className="bg-bgLight text-textMain min-h-screen font-body">
// // // //       <Navbar />
// // // //       <main className="max-w-7xl mx-auto px-6 pt-32 pb-12 space-y-12">
// // // //         <Hero />
// // // //         <AboutMe />
// // // //         <TechStack />
// // // //         <Projects />
// // // //         <Contact />
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }
// // // import Navbar from './components/Navbar.jsx'
// // // import Hero from './components/Hero.jsx'
// // // import AboutMe from './components/AboutMe.jsx'
// // // import TechStack from './components/TechStack.jsx'
// // // import Projects from './components/Projects.jsx'
// // // import Contact from './components/Contact.jsx'
// // // import Footer from './components/Footer.jsx'
// // // import './index.css'

// // // export default function App() {
// // //   return (
// // //     <div className="bg-bgLight text-textMain min-h-screen font-body">
// // //       <Navbar />
// // //       <main className="max-w-7xl mx-auto px-6 pt-32 pb-12 space-y-20">
// // //         <Hero />
// // //         <AboutMe />
// // //         <TechStack />
// // //         <Projects />
// // //         <Contact />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   )
// // // }
// // import Navbar from './components/Navbar.jsx'
// // import Hero from './components/Hero.jsx'
// // import AboutMe from './components/AboutMe.jsx'
// // import Projects from './components/Projects.jsx'
// // import Contact from './components/Contact.jsx'
// // import TechStack from './components/TechStack.jsx'  // ADD THIS
// // import './index.css'

// // // export default function App() {
// // //   return (
// // //     <div className="bg-dark-bg min-h-screen">
// // //       <Navbar />
// // //       <main>
// // //         <Hero />
// // //         <AboutMe />
// // //         <TechStack />   {/* ADD THIS */}
// // //         <Projects />
// // //         <Contact />
        
// // //       </main>
      
// // //       {/* Social sidebar */}
// // //       <div className="hidden lg:block fixed bottom-0 left-12 w-10">
// // //         <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-text-secondary after:mt-6">
// // //           <li>
// // //             <a href="https://github.com" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
// // //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// // //                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
// // //               </svg>
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="https://linkedin.com" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
// // //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// // //                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
// // //               </svg>
// // //             </a>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Email sidebar */}
// // //       <div className="hidden lg:block fixed bottom-0 right-12 w-10">
// // //         <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-text-secondary after:mt-6">
// // //           <a
// // //             href="mailto:nishi@example.com"
// // //             className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all [writing-mode:vertical-rl] font-mono text-sm mb-6"
// // //           >
// // //             nishi@example.com
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // export default function App() {
// //   return (
// //     <div className="bg-dark-bg dark:bg-dark-bg bg-light-bg min-h-screen transition-colors duration-300">
// //       <Navbar />
// //       <main className="text-text-primary dark:text-text-primary">
// //         <Hero />
// //         <AboutMe />
// //         <TechStack />
// //         <Projects />
// //         <Contact />
// //       </main>
      
// //       {/* Social sidebar */}
// //       <div className="hidden lg:block fixed bottom-0 left-12 w-10">
// //         <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-text-secondary after:mt-6">
// //           <li>
// //             <a href="https://github.com" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
// //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
// //               </svg>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="https://linkedin.com" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
// //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
// //               </svg>
// //             </a>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Email sidebar */}
// //       <div className="hidden lg:block fixed bottom-0 right-12 w-10">
// //         <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-text-secondary after:mt-6">
// //           <a
// //             href="mailto:nishi@example.com"
// //             className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all [writing-mode:vertical-rl] font-mono text-sm mb-6"
// //           >
// //             nishi@example.com
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import TechStack from './components/TechStack.jsx'
// import AboutMe from './components/AboutMe.jsx'
// import Projects from './components/Projects.jsx'
// import Contact from './components/Contact.jsx'
// import './index.css'

// export default function App() {
//   return (
//     <div className="bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-300">
//       <Navbar />
//       <main className="text-textLight-primary dark:text-text-primary">
//         <Hero />
//         <AboutMe />
//         <TechStack />
//         <Projects />
//         <Contact />
//       </main>
      
//       {/* Social sidebar */}
//       <div className="hidden lg:block fixed bottom-0 left-12 w-10">
//         <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-textLight-secondary dark:after:bg-text-secondary after:mt-6">
//           <li>
//             <a href="https://github.com" className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//               </svg>
//             </a>
//           </li>
//           <li>
//             <a href="https://linkedin.com" className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all block">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Email sidebar */}
//       <div className="hidden lg:block fixed bottom-0 right-12 w-10">
//         <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-textLight-secondary dark:after:bg-text-secondary after:mt-6">
//           <a
//             href="mailto:nishi@example.com"
//             className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all [writing-mode:vertical-rl] font-mono text-sm mb-6"
//           >
//             nishi@example.com
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechStack from './components/TechStack.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import './index.css'

export default function App() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      {/* Social sidebar */}
      <div className="hidden lg:block fixed bottom-0 left-12 w-10">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-textLight-secondary dark:after:bg-text-secondary after:mt-6">
          <li>
            <a href="https://github.com/nishimshah" className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark hover:-translate-y-1 transition-all block">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nishi-shah-a58a47344" className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark hover:-translate-y-1 transition-all block">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Email sidebar */}
      <div className="hidden lg:block fixed bottom-0 right-12 w-10">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-textLight-secondary dark:after:bg-text-secondary after:mt-6">
          <a
            href="mailto:nishishah0257@gmail.com"
            className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark hover:-translate-y-1 transition-all [writing-mode:vertical-rl] font-mono text-sm mb-6"
          >
            nishishah0257@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
