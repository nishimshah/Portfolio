// // // // // // // // // export default function AboutMe() {
// // // // // // // // //   return (
// // // // // // // // //     <section className="max-w-4xl mx-auto p-6">
// // // // // // // // //       <h2 className="text-3xl font-semibold mb-3">About Me</h2>
// // // // // // // // //       <p className="mb-4">I am a passionate Full Stack Developer with experience in React, Django, and Node.js.</p>
// // // // // // // // //       <div className="border-l-4 border-purple-400 pl-4">
// // // // // // // // //         <p><strong>2019:</strong> Started learning web development</p>
// // // // // // // // //         <p><strong>2023:</strong> Graduated with Computer Science degree</p>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // export default function AboutMe() {
// // // // // // // //   return (
// // // // // // // //     <section id="about" className="max-w-2xl mx-auto my-20 bg-bgLight shadow-lg rounded-2xl border border-border p-10">
// // // // // // // //       <h2 className="font-heading text-3xl text-accent font-bold mb-5">About Me</h2>
// // // // // // // //       <p className="text-lg font-body text-textLight mb-5">
// // // // // // // //         A passionate full stack & AI developer, obsessed with clean code and beautiful UI. <br/>
// // // // // // // //         Fast learner, open-source contributor, and always exploring the latest in web tech.
// // // // // // // //       </p>
// // // // // // // //       <div className="border-l-4 pl-4 border-accent">
// // // // // // // //         <p className="mb-1 font-code"><b>2019:</b> Started building projects obsessively</p>
// // // // // // // //         <p className="font-code"><b>2023:</b> Graduated, shipped real products, and mentoring juniors</p>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { useSpring, animated } from '@react-spring/web';

// // // // // // // export default function AboutMe() {
// // // // // // //   const fadeUp = useSpring({ from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 }, delay: 300 });

// // // // // // //   return (
// // // // // // //     <animated.section style={fadeUp} id="about" className="relative max-w-2xl mx-auto my-20 bg-card rounded-3xl shadow-glass border border-border p-10 z-10">
// // // // // // //       <h2 className="font-heading text-3xl text-accent font-bold mb-8">
// // // // // // //         About Me <span className="bg-gradient-to-r from-accent2 to-accent3 text-transparent bg-clip-text">()</span>
// // // // // // //       </h2>
// // // // // // //       <p className="text-lg font-body text-textMain mb-6">
// // // // // // //         Hi, I’m <b>Nishi</b>—a full stack developer who obsesses about visual polish, readable code, and pushing web tech boundaries.<br/>
// // // // // // //         I thrive on React, experiment with Django and Node, and adore developer tools, code playgrounds, and beautiful open-source docs.
// // // // // // //       </p>
// // // // // // //       <div className="flex gap-6 mt-2 text-accent2 font-code">
// // // // // // //         <span>// Started coding in 2019</span>
// // // // // // //         <span>// CS degree 2023</span>
// // // // // // //       </div>
// // // // // // //     </animated.section>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useSpring, animated } from '@react-spring/web'
// // // // // // import ProfilePhoto from '../assets/Profileimage.jpeg' // add actual image in assets

// // // // // // export default function AboutMe() {
// // // // // //   const fadeLeft = useSpring({ from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 }, config: { tension: 200 } });
// // // // // //   const fadeRight = useSpring({ from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 }, config: { tension: 200 }, delay: 200 });

// // // // // //   return (
// // // // // //     <section id="about" className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 my-20">
// // // // // //       <animated.div style={fadeLeft} className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto md:mx-0 border border-border">
// // // // // //         <img src={ProfilePhoto} alt="Nishi M Shah" loading="lazy" className="w-full h-auto"/>
// // // // // //       </animated.div>

// // // // // //       <animated.div style={fadeRight} className="flex-1 bg-card p-8 rounded-2xl shadow-glass border border-border">
// // // // // //         <h2 className="font-heading text-3xl font-bold mb-6 text-accent">About Me</h2>
// // // // // //         <p className="font-body text-textMain leading-relaxed">
// // // // // //           Passionate Full Stack Developer experienced with React, Django, and Node.js. Always excited to build clean, performant, and beautiful web apps. Strong believer in open-source and developer tooling.
// // // // // //         </p>
// // // // // //       </animated.div>
// // // // // //     </section>
// // // // // //   )
// // // // // // }
// // // // // import { useSpring, animated } from '@react-spring/web';
// // // // // import ProfileImage from '../assets/Profileimage.jpeg'; // Your photo here

// // // // // export default function AboutMe() {
// // // // //   const leftSpring = useSpring({ from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 }, delay: 400 });
// // // // //   const rightSpring = useSpring({ from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 }, delay: 650 });

// // // // //   return (
// // // // //     <section id="about" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 p-8 bg-card rounded-3xl shadow-glass border border-borderNeon">
// // // // //       <animated.div style={leftSpring} className="w-48 md:w-60 rounded-full border-4 border-neonGreen overflow-hidden shadow-neonShadow">
// // // // //         <img src={ProfileImage} alt="Nishi Shah" className="w-full h-auto" />
// // // // //       </animated.div>
// // // // //       <animated.div style={rightSpring} className="text-textLight max-w-xl">
// // // // //         <h2 className="font-heading text-3xl mb-4 text-neonGreen">About Me</h2>
// // // // //         <p className="font-code text-textSecondary leading-relaxed">
// // // // //           I am a passionate Software Engineer, obsessed with clean code, stunning UI, and futuristic dev tools. Constantly building projects and exploring new tech.
// // // // //         </p>
// // // // //       </animated.div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { useSpring, animated } from '@react-spring/web';
// // // // import profilePic from '../assets/Profileimage.jpeg'; // update path accordingly

// // // // export default function AboutMe() {
// // // //   const fadeInLeft = useSpring({ from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 }, delay: 300 });
// // // //   const fadeInRight = useSpring({ from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 }, delay: 600 });

// // // //   return (
// // // //     <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center bg-bgLight rounded-3xl shadow-neonGlow border border-border p-8 mb-20">
// // // //       <animated.div style={fadeInLeft} className="w-48 md:w-64 rounded-full overflow-hidden shadow-neon">
// // // //         <img src={profilePic} alt="Nishi" className="w-full h-auto object-cover" />
// // // //       </animated.div>
// // // //       <animated.div style={fadeInRight} className="mt-8 md:mt-0 md:ml-12 flex-1">
// // // //         <h2 className="font-heading text-3xl text-neonGreen mb-4">About Me</h2>
// // // //         <p className="font-code text-gray-200 leading-relaxed mb-4">
// // // //           Full-stack coder obsessed with minimalist UI, fast APIs, and clean sleek code. Open-source contributor, hacker at heart!
// // // //         </p>
// // // //         <ul className="list-disc list-inside text-gray-400 text-sm">
// // // //           <li>2019: started coding</li>
// // // //           <li>2023: founded this portfolio</li>
// // // //         </ul>
// // // //       </animated.div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { useSpring, animated } from '@react-spring/web';
// // // import { useInView } from 'react-intersection-observer';

// // // export default function AboutMe() {
// // //   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
// // //   const fadeIn = useSpring({
// // //     opacity: inView ? 1 : 0,
// // //     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
// // //     config: { tension: 200, friction: 30 }
// // //   });

// // //   const skills = [
// // //     'JavaScript (ES6+)', 'React', 'Node.js',
// // //     'Python', 'Django', 'PostgreSQL',
// // //     'Tailwind CSS', 'Git', 'Docker'
// // //   ];

// // //   return (
// // //     <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-5xl mx-auto py-24">
// // //       <animated.div style={fadeIn}>
// // //         <h2 className="text-3xl font-bold text-text-heading mb-12 flex items-center">
// // //           <span className="text-accent-primary font-mono mr-2">01.</span>
// // //           About Me
// // //           <div className="ml-4 h-px bg-dark-elevated flex-grow max-w-xs" />
// // //         </h2>

// // //         <div className="grid md:grid-cols-3 gap-12 items-center">
// // //           <div className="md:col-span-2 space-y-4 text-text-secondary leading-relaxed">
// // //             <p>
// // //               Hello! I'm Nishi, a software engineer passionate about creating things that live on the internet.
// // //               My interest in web development started back in 2019 when I decided to try building custom websites —
// // //               turns out hacking together a custom site taught me a lot about HTML & CSS!
// // //             </p>
// // //             <p>
// // //               Fast-forward to today, and I've had the privilege of working on projects spanning from 
// // //               <span className="text-accent-primary"> real-time collaboration tools</span> to 
// // //               <span className="text-accent-primary"> AI-powered applications</span>. 
// // //               My main focus these days is building accessible, inclusive products and digital experiences.
// // //             </p>
// // //             <p>Here are a few technologies I've been working with recently:</p>

// // //             <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
// // //               {skills.map(skill => (
// // //                 <li key={skill} className="flex items-center">
// // //                   <span className="text-accent-primary mr-2">▹</span>
// // //                   {skill}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           <div className="relative group">
// // //             <div className="relative z-10 rounded overflow-hidden border-2 border-accent-primary/20 group-hover:border-accent-primary/60 transition-colors">
// // //               <img
// // //                 src="/assets/profile.jpg"
// // //                 alt="Nishi M Shah"
// // //                 className="grayscale group-hover:grayscale-0 transition-all duration-300"
// // //               />
// // //             </div>
// // //             <div className="absolute inset-0 border-2 border-accent-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
// // //           </div>
// // //         </div>
// // //       </animated.div>
// // //     </section>
// // //   );
// // // }
// // import { useSpring, animated } from '@react-spring/web';
// // import { useInView } from 'react-intersection-observer';
// // import ProfileImage from '../assets/Profileimage.jpeg'; // Add this line


// // export default function AboutMe() {
// //   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
// //   const fadeIn = useSpring({
// //     opacity: inView ? 1 : 0,
// //     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
// //     config: { tension: 200, friction: 30 }
// //   });

// //   const skills = [
// //     'JavaScript (ES6+)', 'React', 'Node.js',
// //     'Python', 'Django', 'PostgreSQL',
// //     'Tailwind CSS', 'Git', 'Docker'
// //   ];

// //   return (
// //     <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-5xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
// //       <animated.div style={fadeIn}>
// //         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center">
// //           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">02.</span>
// //           About Me
// //           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs" />
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-12 items-center">
// //           <div className="md:col-span-2 space-y-4 text-textLight-secondary dark:text-text-secondary leading-relaxed">
// //             <p>
// //               Hello! I'm Nishi, a software engineer passionate about creating things that live on the internet.
// //               My interest in web development started back in 2019 when I decided to try building custom websites —
// //               turns out hacking together a custom site taught me a lot about HTML & CSS!
// //             </p>
// //             <p>
// //               Fast-forward to today, and I've had the privilege of working on projects spanning from 
// //               <span className="text-accent-primary dark:text-accent-primaryDark"> real-time collaboration tools</span> to 
// //               <span className="text-accent-primary dark:text-accent-primaryDark"> AI-powered applications</span>. 
// //               My main focus these days is building accessible, inclusive products and digital experiences.
// //             </p>
// //             <p>Here are a few technologies I've been working with recently:</p>

// //             <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
// //               {skills.map(skill => (
// //                 <li key={skill} className="flex items-center text-textLight-secondary dark:text-text-secondary">
// //                   <span className="text-accent-primary dark:text-accent-primaryDark mr-2">▹</span>
// //                   {skill}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="relative group">
// //             <div className="relative z-10 rounded overflow-hidden border-2 border-accent-primary/20 dark:border-accent-primaryDark/20 group-hover:border-accent-primary/60 dark:group-hover:border-accent-primaryDark/60 transition-colors">
// //               <img
// //                 src={ProfileImage}
// //                 alt="Nishi M Shah"
// //                 className="grayscale group-hover:grayscale-0 transition-all duration-300"
// //               />
// //             </div>
// //             <div className="absolute inset-0 border-2 border-accent-primary dark:border-accent-primaryDark rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
// //           </div>
// //         </div>
// //       </animated.div>
// //     </section>
// //   );
// // }
// import { useSpring, animated } from '@react-spring/web';
// import { useInView } from 'react-intersection-observer';
// import profilePic from '../assets/Profileimage.jpeg';

// export default function AboutMe() {
//   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
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
//     <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-5xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
//       <animated.div style={fadeIn}>
//         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center">
//           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">02.</span>
//           About Me
//           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs" />
//         </h2>

//         <div className="grid md:grid-cols-3 gap-12 items-center">
//           <div className="md:col-span-2 space-y-4 text-textLight-secondary dark:text-text-secondary leading-relaxed">
//             <p>
//               Hello! I'm Nishi, a software engineer passionate about creating things that live on the internet.
//               My interest in web development started back in 2019 when I decided to try building custom websites —
//               turns out hacking together a custom site taught me a lot about HTML & CSS!
//             </p>
//             <p>
//               Fast-forward to today, and I've had the privilege of working on projects spanning from 
//               <span className="text-accent-primary dark:text-accent-primaryDark"> real-time collaboration tools</span> to 
//               <span className="text-accent-primary dark:text-accent-primaryDark"> AI-powered applications</span>. 
//               My main focus these days is building accessible, inclusive products and digital experiences.
//             </p>
//             <p>Here are a few technologies I've been working with recently:</p>

//             <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
//               {skills.map(skill => (
//                 <li key={skill} className="flex items-center text-textLight-secondary dark:text-text-secondary">
//                   <span className="text-accent-primary dark:text-accent-primaryDark mr-2">▹</span>
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="relative group">
//             <div className="relative z-10 rounded overflow-hidden border-2 border-accent-primary/20 dark:border-accent-primaryDark/20 group-hover:border-accent-primary/60 dark:group-hover:border-accent-primaryDark/60 transition-colors">
//               <img
//                 src={profilePic}
//                 alt="Nishi M Shah"
//                 className="grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//             </div>
//             <div className="absolute inset-0 border-2 border-accent-primary dark:border-accent-primaryDark rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
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
          <div className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-all">
            <div className="relative group">
              <div className="w-53 h-57 rounded-2xl overflow-hidden border-4 border-accent-primary/20 dark:border-accent-primaryDark/20 group-hover:border-accent-primary dark:group-hover:border-accent-primaryDark transition-all">
                <img
                  src={profilePic}
                  alt="Nishi M Shah"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
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
          
              <p className="space-y-3">
              <span className="block mt-2">
                <span className="text-accent-primary dark:text-accent-primaryDark font-bold">BTech in Computer Science and Engineering</span> at LJ Institute of Engineering and Technology [2023 – 2027]
              </span>
              
              <span className="block mt-3">
                <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 12</span> - GSEB (Grade B2)
                <br />
                Little Flower School [2023]
              </span>
              
              <span className="block mt-3">
                <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Class 10</span> - GSEB (Grade B2)
                <br />
                Little Flower School [2021]
              </span>
              
              <span className="block mt-3">
                <span className="text-accent-primary dark:text-accent-primaryDark font-bold">SPI:</span> 9.28 / 10.0 (upto 4th semester)
              </span>
              
              <span className="block mt-3">
                <span className="text-accent-primary dark:text-accent-primaryDark font-bold">Languages known:</span> English, Gujarati, Hindi
              </span>
            </p>

            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
