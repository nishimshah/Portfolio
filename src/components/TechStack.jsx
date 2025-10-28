// // // // // // // // // // export default function TechStack() {
// // // // // // // // // //   const techs = ['React', 'Django', 'Node.js', 'Python', 'Tailwind CSS'];
// // // // // // // // // //   return (
// // // // // // // // // //     <section className="max-w-4xl mx-auto p-6">
// // // // // // // // // //       <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
// // // // // // // // // //       <div className="flex space-x-4">
// // // // // // // // // //         {techs.map(tech => (
// // // // // // // // // //           <div key={tech} className="px-4 py-2 bg-purple-100 rounded-full shadow">{tech}</div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // export default function TechStack() {
// // // // // // // // //   const techs = [
// // // // // // // // //     'React', 'Django', 'Node.js', 'TypeScript', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Docker'
// // // // // // // // //   ];
// // // // // // // // //   return (
// // // // // // // // //     <section id="tech" className="max-w-2xl mx-auto my-16 bg-bgLight shadow-lg rounded-2xl border border-border p-10">
// // // // // // // // //       <h2 className="font-heading text-3xl text-accent mb-6 font-bold">Tech Stack</h2>
// // // // // // // // //       <div className="flex flex-wrap gap-4">
// // // // // // // // //         {techs.map(tech => (
// // // // // // // // //           <span key={tech} className="px-4 py-2 bg-bgDark text-accent2 rounded-full font-code shadow hover:bg-accent hover:text-textLight transition cursor-default">
// // // // // // // // //             {tech}
// // // // // // // // //           </span>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { useTrail, animated } from '@react-spring/web';

// // // // // // // // export default function TechStack() {
// // // // // // // //   const techs = ['React', 'Django', 'Node.js', 'TypeScript', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Docker'];
// // // // // // // //   const trail = useTrail(techs.length, {
// // // // // // // //     from: { opacity: 0, y: 40 },
// // // // // // // //     to: { opacity: 1, y: 0 }
// // // // // // // //   });

// // // // // // // //   return (
// // // // // // // //     <section id="tech" className="max-w-4xl mx-auto my-24 bg-card z-10 rounded-3xl shadow-glass border border-border p-10">
// // // // // // // //       <h2 className="font-heading text-3xl text-accent font-bold mb-10">Tech Stack</h2>
// // // // // // // //       <div className="flex flex-wrap gap-5">
// // // // // // // //         {trail.map((style, idx) => (
// // // // // // // //           <animated.span key={techs[idx]} style={style} className="px-6 py-3 bg-gradient-to-br from-accent2 to-card 
// // // // // // // //             border border-border rounded-xl font-code shadow hover:bg-accent hover:text-white transition cursor-pointer">
// // // // // // // //             {techs[idx]}
// // // // // // // //           </animated.span>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // You need to add corresponding logo image files inside assets folder or use online icon URLs
// // // // // // // const techLogos = [
// // // // // // //   { name: 'React', logo: '/assets/react.svg' },
// // // // // // //   { name: 'Django', logo: '/assets/django.svg' },
// // // // // // //   { name: 'Node.js', logo: '/assets/nodejs.svg' },
// // // // // // //   { name: 'Tailwind CSS', logo: '/assets/tailwind.svg' },
// // // // // // //   { name: 'PostgreSQL', logo: '/assets/postgresql.svg' },
// // // // // // //   { name: 'Python', logo: '/assets/python.svg' },
// // // // // // // ];

// // // // // // // export default function TechStack() {
// // // // // // //   return (
// // // // // // //     <section id="tech" className="max-w-6xl mx-auto my-20 px-4">
// // // // // // //       <h2 className="font-heading text-3xl text-accent font-bold text-center mb-12">Tech Stack</h2>
// // // // // // //       <div className="flex flex-wrap justify-center gap-10">
// // // // // // //         {techLogos.map(({ name, logo }) => (
// // // // // // //           <div key={name} className="flex flex-col items-center space-y-2 cursor-default hover:scale-110 transition-transform">
// // // // // // //             <img src={logo} alt={name} title={name} className="h-16 w-auto" loading="lazy" />
// // // // // // //             <span className="font-code text-textSubtle">{name}</span>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // const techStack = [
// // // // // //   {name: 'React', logo: '/assets/react.svg'},
// // // // // //   {name: 'Tailwind', logo: '/assets/tailwind.svg'},
// // // // // //   {name: 'Node.js', logo: '/assets/nodejs.svg'},
// // // // // //   {name: 'Python', logo: '/assets/python.svg'},
// // // // // //   {name: 'Django', logo: '/assets/django.svg'},
// // // // // //   {name: 'PostgreSQL', logo: '/assets/postgresql.svg'},
// // // // // // ];

// // // // // // export default function TechStack() {
// // // // // //   return (
// // // // // //     <section id="tech" className="max-w-6xl mx-auto my-20 px-8 grid grid-cols-3 sm:grid-cols-6 gap-12">
// // // // // //       {techStack.map(({ name, logo }) => (
// // // // // //         <div
// // // // // //           key={name}
// // // // // //           className="flex flex-col items-center cursor-pointer hover:scale-110 hover:drop-shadow-neon transition-transform"
// // // // // //           title={name}
// // // // // //         >
// // // // // //           <img src={logo} alt={name} className="h-16 w-auto" loading="lazy" />
// // // // // //           <span className="font-code mt-2 text-textSecondary uppercase text-xs">{name}</span>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // const techs = [
// // // // //   { name: 'React', logo: '/assets/react.svg' },
// // // // //   { name: 'Tailwind', logo: '/assets/tailwind.svg' },
// // // // //   { name: 'Node.js', logo: '/assets/nodejs.svg' },
// // // // //   { name: 'Python', logo: '/assets/python.svg' },
// // // // //   { name: 'Django', logo: '/assets/django.svg' },
// // // // //   { name: 'PostgreSQL', logo: '/assets/postgres.svg' }
// // // // // ];

// // // // // export default function TechStack() {
// // // // //   return (
// // // // //     <section id="tech" className="max-w-6xl mx-auto py-20 px-4">
// // // // //       <h2 className="text-4xl font-bold font-heading mb-12 text-center text-neonGreen">Tech You Will Love</h2>
// // // // //       <div className="flex flex-wrap justify-center gap-8">
// // // // //         {techs.map((tech) => (
// // // // //           <div key={tech.name} className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover:scale-110 hover:border-neonBlue transition-shadow duration-300">
// // // // //             <img src={tech.logo} alt={tech.name} className="h-16 w-16 mb-2" />
// // // // //             <span className="text-sm font-code text-gray-400">{tech.name}</span>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { useSpring, animated, useTrail } from '@react-spring/web';
// // // // import { useInView } from 'react-intersection-observer';

// // // // const technologies = [
// // // //   {
// // // //     name: 'React',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'JavaScript',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'TypeScript',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Node.js',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Python',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Django',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
// // // //   },
// // // //   {
// // // //     name: 'PostgreSQL',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'MongoDB',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Docker',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Git',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
// // // //   },
// // // //   {
// // // //     name: 'Tailwind CSS',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
// // // //   },
// // // //   {
// // // //     name: 'Redux',
// // // //     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
// // // //   }
// // // // ];

// // // // export default function TechStack() {
// // // //   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

// // // //   const trail = useTrail(technologies.length, {
// // // //     opacity: inView ? 1 : 0,
// // // //     transform: inView ? 'scale(1)' : 'scale(0.8)',
// // // //     config: { tension: 200, friction: 20 }
// // // //   });

// // // //   return (
// // // //     <section id="tech" ref={ref} className="min-h-screen px-6 max-w-6xl mx-auto py-24">
// // // //       <h2 className="text-3xl font-bold text-text-heading mb-16 flex items-center justify-center md:justify-start">
// // // //         <span className="text-accent-primary font-mono mr-2">01.</span>
// // // //         Technologies I Work With
// // // //         <div className="ml-4 h-px bg-dark-elevated flex-grow max-w-xs hidden md:block" />
// // // //       </h2>

// // // //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
// // // //         {trail.map((style, idx) => (
// // // //           <animated.div
// // // //             key={technologies[idx].name}
// // // //             style={style}
// // // //             className="group flex flex-col items-center justify-center p-6 bg-dark-card border border-dark-elevated rounded-lg hover:border-accent-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
// // // //           >
// // // //             <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // //               <img
// // // //                 src={technologies[idx].logo}
// // // //                 alt={technologies[idx].name}
// // // //                 className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
// // // //               />
// // // //             </div>
// // // //             <span className="text-text-secondary text-sm font-mono group-hover:text-accent-primary transition-colors">
// // // //               {technologies[idx].name}
// // // //             </span>
// // // //           </animated.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Optional: Add a skills description */}
// // // //       <div className="mt-16 max-w-3xl mx-auto">
// // // //         <p className="text-text-secondary leading-relaxed text-center">
// // // //           I specialize in building modern, scalable web applications using cutting-edge technologies. 
// // // //           My tech stack spans from frontend frameworks to backend systems, databases, and DevOps tools.
// // // //         </p>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { useSpring, animated, useTrail } from '@react-spring/web';
// // // import { useInView } from 'react-intersection-observer';

// // // const techCategories = [
// // //   {
// // //     category: 'Languages',
// // //     skills: [
// // //       { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
// // //       { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
// // //       { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
// // //       { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
// // //     ]
// // //   },
// // //   {
// // //     category: 'Web Development',
// // //     skills: [
// // //       { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
// // //       { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
// // //       { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
// // //       { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
// // //       { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
// // //     ]
// // //   },
// // //   {
// // //     category: 'Frameworks & Libraries',
// // //     skills: [
// // //       { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
// // //       { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
// // //       { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
// // //       { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' }
// // //     ]
// // //   },
// // //   {
// // //     category: 'Databases',
// // //     skills: [
// // //       { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
// // //       { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
// // //       { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
// // //       { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
// // //     ]
// // //   },
// // //   {
// // //     category: 'Tools & Platforms',
// // //     skills: [
// // //       { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
// // //       { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
// // //       { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
// // //       { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
// // //     ]
// // //   }
// // // ];

// // // export default function TechStack() {
// // //   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

// // //   const fadeIn = useSpring({
// // //     opacity: inView ? 1 : 0,
// // //     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
// // //     config: { tension: 200, friction: 30 }
// // //   });

// // //   return (
// // //     <section id="tech" ref={ref} className="min-h-screen px-6 max-w-6xl mx-auto py-24">
// // //       <animated.div style={fadeIn}>
// // //         <h2 className="text-3xl font-bold text-text-heading mb-16 flex items-center justify-center md:justify-start">
// // //           <span className="text-accent-primary font-mono mr-2">01.</span>
// // //           Technologies & Skills
// // //           <div className="ml-4 h-px bg-dark-elevated flex-grow max-w-xs hidden md:block" />
// // //         </h2>

// // //         <div className="space-y-12">
// // //           {techCategories.map((category, catIdx) => (
// // //             <div key={category.category}>
// // //               <h3 className="text-xl font-bold text-accent-primary font-mono mb-6">
// // //                 {category.category}
// // //               </h3>
// // //               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
// // //                 {category.skills.map((skill, idx) => (
// // //                   <div
// // //                     key={skill.name}
// // //                     className="group flex flex-col items-center justify-center p-4 bg-dark-card border border-dark-elevated rounded-lg hover:border-accent-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
// // //                   >
// // //                     <div className="w-14 h-14 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // //                       <img
// // //                         src={skill.logo}
// // //                         alt={skill.name}
// // //                         className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
// // //                       />
// // //                     </div>
// // //                     <span className="text-text-secondary text-sm font-mono group-hover:text-accent-primary transition-colors text-center">
// // //                       {skill.name}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Coursework Section */}
// // //         <div className="mt-16 bg-dark-card border border-dark-elevated rounded-lg p-8">
// // //           <h3 className="text-xl font-bold text-accent-primary font-mono mb-4">
// // //             Relevant Coursework
// // //           </h3>
// // //           <div className="flex flex-wrap gap-3">
// // //             {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
// // //               <span key={course} className="px-4 py-2 bg-dark-elevated text-text-secondary rounded font-mono text-sm">
// // //                 {course}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </animated.div>
// // //     </section>
// // //   );
// // // }
// // import { useSpring, animated, useTrail } from '@react-spring/web';
// // import { useInView } from 'react-intersection-observer';

// // const skillsData = {
// //   'Languages': [
// //     { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
// //     { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
// //     { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
// //     { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
// //   ],
// //   'Frontend': [
// //     { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
// //     { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
// //     { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
// //     { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
// //   ],
// //   'Backend': [
// //     { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
// //     { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
// //     { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
// //     { name: 'REST API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' }
// //   ],
// //   'Data Science': [
// //     { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
// //     { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
// //     { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
// //     { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' }
// //   ],
// //   'Database': [
// //     { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
// //     { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
// //     { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
// //     { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
// //   ],
// //   'Tools': [
// //     { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
// //     { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
// //     { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
// //     { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
// //   ]
// // };

// // export default function TechStack() {
// //   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

// //   const headerSpring = useSpring({
// //     opacity: inView ? 1 : 0,
// //     transform: inView ? 'translateY(0px)' : 'translateY(-20px)',
// //     config: { tension: 200, friction: 30 }
// //   });

// //   return (
// //     <section id="tech" ref={ref} className="min-h-screen px-6 max-w-7xl mx-auto py-24">
// //       <animated.div style={headerSpring}>
// //         <h2 className="text-3xl font-bold text-text-heading mb-4 flex items-center justify-center md:justify-start">
// //           <span className="text-accent-primary font-mono mr-2">01.</span>
// //           Tech Stack & Skills
// //           <div className="ml-4 h-px bg-dark-elevated flex-grow max-w-xs hidden md:block" />
// //         </h2>
// //         <p className="text-text-secondary mb-16 text-center md:text-left">
// //           Technologies and tools I use to build amazing products
// //         </p>
// //       </animated.div>

// //       {/* Skills Grid */}
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// //         {Object.entries(skillsData).map(([category, skills], idx) => (
// //           <SkillCategory 
// //             key={category} 
// //             category={category} 
// //             skills={skills} 
// //             delay={idx * 100}
// //             inView={inView}
// //           />
// //         ))}
// //       </div>

// //       {/* Coursework Card */}
// //       <animated.div 
// //         style={useSpring({
// //           opacity: inView ? 1 : 0,
// //           transform: inView ? 'translateY(0px)' : 'translateY(30px)',
// //           delay: 600,
// //           config: { tension: 200, friction: 30 }
// //         })}
// //         className="bg-gradient-to-br from-dark-card to-dark-elevated border border-accent-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-accent-primary/10 transition-all"
// //       >
// //         <div className="flex items-center gap-3 mb-6">
// //           <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
// //           </svg>
// //           <h3 className="text-xl font-bold text-accent-primary font-mono">Relevant Coursework</h3>
// //         </div>
// //         <div className="flex flex-wrap gap-3">
// //           {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
// //             <span 
// //               key={course} 
// //               className="px-4 py-2 bg-dark-bg/60 text-text-secondary rounded-lg font-mono text-sm border border-dark-elevated hover:border-accent-primary/50 hover:text-accent-primary transition-all"
// //             >
// //               {course}
// //             </span>
// //           ))}
// //         </div>
// //       </animated.div>
// //     </section>
// //   );
// // }

// // // Skill Category Component
// // function SkillCategory({ category, skills, delay, inView }) {
// //   const trail = useTrail(skills.length, {
// //     opacity: inView ? 1 : 0,
// //     transform: inView ? 'scale(1)' : 'scale(0.9)',
// //     delay: delay,
// //     config: { tension: 250, friction: 25 }
// //   });

// //   return (
// //     <div className="bg-dark-card border border-dark-elevated rounded-xl p-6 hover:border-accent-primary/30 transition-all duration-300 group">
// //       <div className="flex items-center gap-2 mb-6 pb-3 border-b border-dark-elevated">
// //         <div className="w-2 h-2 bg-accent-primary rounded-full group-hover:animate-pulse"></div>
// //         <h3 className="text-lg font-bold text-text-heading font-mono">
// //           {category}
// //         </h3>
// //       </div>
      
// //       <div className="grid grid-cols-2 gap-4">
// //         {trail.map((style, idx) => (
// //           <animated.div
// //             key={skills[idx].name}
// //             style={style}
// //             className="flex flex-col items-center p-3 rounded-lg bg-dark-bg/40 hover:bg-dark-elevated transition-all group/item cursor-pointer"
// //           >
// //             <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover/item:scale-110 transition-transform">
// //               <img
// //                 src={skills[idx].logo}
// //                 alt={skills[idx].name}
// //                 className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all"
// //               />
// //             </div>
// //             <span className="text-text-secondary text-xs font-mono text-center group-hover/item:text-accent-primary transition-colors">
// //               {skills[idx].name}
// //             </span>
// //           </animated.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import { useSpring, animated, useTrail } from '@react-spring/web';
// import { useInView } from 'react-intersection-observer';

// const skillsData = {
//   'Languages': [
//     { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
//     { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//     { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//     { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
//   ],
//   'Frontend': [
//     { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//     { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//     { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//     { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
//   ],
//   'Backend': [
//     { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//     { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
//     { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
//     { name: 'REST API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' }
//   ],
//   'Data Science': [
//     { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
//     { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
//     { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
//     { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' }
//   ],
//   'Database': [
//     { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
//     { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//     { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//     { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
//   ],
//   'Tools': [
//     { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//     { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
//     { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
//     { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
//   ]
// };

// export default function TechStack() {
//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

//   const headerSpring = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'translateY(0px)' : 'translateY(-20px)',
//     config: { tension: 200, friction: 30 }
//   });

//   return (
//     <section id="tech" ref={ref} className="min-h-screen px-6 max-w-7xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
//       <animated.div style={headerSpring}>
//         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-4 flex items-center justify-center md:justify-start">
//           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">01.</span>
//           Tech Stack & Skills
//           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs hidden md:block" />
//         </h2>
//         <p className="text-textLight-secondary dark:text-text-secondary mb-16 text-center md:text-left">
//           Technologies and tools I use to build amazing products
//         </p>
//       </animated.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {Object.entries(skillsData).map(([category, skills], idx) => (
//           <SkillCategory 
//             key={category} 
//             category={category} 
//             skills={skills} 
//             delay={idx * 100}
//             inView={inView}
//           />
//         ))}
//       </div>

//       <animated.div 
//         style={useSpring({
//           opacity: inView ? 1 : 0,
//           transform: inView ? 'translateY(0px)' : 'translateY(30px)',
//           delay: 600,
//           config: { tension: 200, friction: 30 }
//         })}
//         className="bg-gradient-to-br from-light-card to-light-elevated dark:from-dark-card dark:to-dark-elevated border border-accent-primary/20 dark:border-accent-primaryDark/20 rounded-2xl p-8 shadow-lg hover:shadow-accent-primary/10 transition-all"
//       >
//         <div className="flex items-center gap-3 mb-6">
//           <svg className="w-6 h-6 text-accent-primary dark:text-accent-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//           </svg>
//           <h3 className="text-xl font-bold text-accent-primary dark:text-accent-primaryDark font-mono">Relevant Coursework</h3>
//         </div>
//         <div className="flex flex-wrap gap-3">
//           {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
//             <span 
//               key={course} 
//               className="px-4 py-2 bg-light-elevated dark:bg-dark-bg/60 text-textLight-secondary dark:text-text-secondary rounded-lg font-mono text-sm border border-border-light dark:border-border-dark hover:border-accent-primary dark:hover:border-accent-primaryDark hover:text-accent-primary dark:hover:text-accent-primaryDark transition-all"
//             >
//               {course}
//             </span>
//           ))}
//         </div>
//       </animated.div>
//     </section>
//   );
// }

// function SkillCategory({ category, skills, delay, inView }) {
//   const trail = useTrail(skills.length, {
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'scale(1)' : 'scale(0.9)',
//     delay: delay,
//     config: { tension: 250, friction: 25 }
//   });

//   return (
//     <div className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-xl p-6 hover:border-accent-primary dark:hover:border-accent-primaryDark/30 transition-all duration-300 group shadow-sm hover:shadow-md">
//       <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
//         <div className="w-2 h-2 bg-accent-primary dark:bg-accent-primaryDark rounded-full group-hover:animate-pulse"></div>
//         <h3 className="text-lg font-bold text-textLight-heading dark:text-text-heading font-mono">
//           {category}
//         </h3>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4">
//         {trail.map((style, idx) => (
//           <animated.div
//             key={skills[idx].name}
//             style={style}
//             className="flex flex-col items-center p-3 rounded-lg bg-light-elevated dark:bg-dark-bg/40 hover:bg-light-bg dark:hover:bg-dark-elevated transition-all group/item cursor-pointer"
//           >
//             <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover/item:scale-110 transition-transform">
//               <img
//                 src={skills[idx].logo}
//                 alt={skills[idx].name}
//                 className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all"
//               />
//             </div>
//             <span className="text-textLight-secondary dark:text-text-secondary text-xs font-mono text-center group-hover/item:text-accent-primary dark:group-hover/item:text-accent-primaryDark transition-colors">
//               {skills[idx].name}
//             </span>
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  'Languages': [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ],
  'Frontend': [
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  'Backend': [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'REST API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' }
  ],
  'Data Science': [
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' }
  ],
  'Database': [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
  ],
  'Tools': [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
  ]
};

export default function TechStack() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 200, friction: 30 }
  });

  return (
    <section id="tech" ref={ref} className="min-h-screen px-6 max-w-7xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
      <animated.div style={headerSpring}>
        <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-4 flex items-center justify-center md:justify-start">
          <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">02.</span>
          Technologies I Work With
          <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs hidden md:block" />
        </h2>
        <p className="text-textLight-secondary dark:text-text-secondary mb-16 text-center md:text-left">
          Technologies and tools I use to build amazing products
        </p>
      </animated.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <SkillCategory 
            key={category} 
            category={category} 
            skills={skills} 
            delay={idx * 100}
            inView={inView}
          />
        ))}
      </div>

      <animated.div 
        style={useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(30px)',
          delay: 600,
          config: { tension: 200, friction: 30 }
        })}
        className="bg-gradient-to-br from-light-card to-light-elevated dark:from-dark-card dark:to-dark-elevated border border-accent-primary/20 dark:border-accent-primaryDark/20 rounded-2xl p-8 shadow-lg hover:shadow-accent-primary/10 transition-all"
      >
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-6 h-6 text-accent-primary dark:text-accent-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h3 className="text-xl font-bold text-accent-primary dark:text-accent-primaryDark font-mono">Relevant Coursework</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
            <span 
              key={course} 
              className="px-4 py-2 bg-light-elevated dark:bg-dark-bg/60 text-textLight-secondary dark:text-text-secondary rounded-lg font-mono text-sm border border-border-light dark:border-border-dark hover:border-accent-primary dark:hover:border-accent-primaryDark hover:text-accent-primary dark:hover:text-accent-primaryDark transition-all"
            >
              {course}
            </span>
          ))}
        </div>
      </animated.div>
    </section>
  );
}

function SkillCategory({ category, skills, delay, inView }) {
  const trail = useTrail(skills.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.9)',
    delay: delay,
    config: { tension: 250, friction: 25 }
  });

  return (
    <div className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-xl p-6 hover:border-accent-primary dark:hover:border-accent-primaryDark/30 transition-all duration-300 group shadow-sm hover:shadow-md">
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
        <div className="w-2 h-2 bg-accent-primary dark:bg-accent-primaryDark rounded-full group-hover:animate-pulse"></div>
        <h3 className="text-lg font-bold text-textLight-heading dark:text-text-heading font-mono">
          {category}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {trail.map((style, idx) => (
          <animated.div
            key={skills[idx].name}
            style={style}
            className="flex flex-col items-center p-3 rounded-lg bg-light-elevated dark:bg-dark-bg/40 hover:bg-light-bg dark:hover:bg-dark-elevated transition-all group/item cursor-pointer"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <img
                src={skills[idx].logo}
                alt={skills[idx].name}
                className="w-full h-full object-contain transition-all"
              />
            </div>
            <span className="text-textLight-secondary dark:text-text-secondary text-xs font-mono text-center group-hover/item:text-accent-primary dark:group-hover/item:text-accent-primaryDark transition-colors">
              {skills[idx].name}
            </span>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
