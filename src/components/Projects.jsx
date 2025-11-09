
// // import { useState } from 'react';
// // import Slider from 'react-slick';
// // import { useInView } from 'react-intersection-observer';
// // import { useSpring, animated } from '@react-spring/web';
// // import Modal from 'react-modal';

// // const projects = [
// //   {
// //     title: 'PolyGlo - Language Learning App',
// //     shortDesc: 'Gamified platform for learning multiple languages with progressive levels and interactive practice.',
// //     description: 'Built a comprehensive language learning platform featuring gamified progression, user authentication with Django REST Framework & JWT, progressive course unlocking system, interactive vocabulary and grammar exercises, and a streak tracking system to boost engagement.',
// //     features: [
// //       'User authentication & profiles with Django REST Framework & JWT',
// //       'Progressive language courses with level-based unlocking',
// //       'Interactive exercises & quizzes for vocabulary and grammar',
// //       'Progress tracking & streak system for engagement',
// //       'Responsive React.js frontend with DRF-powered backend APIs'
// //     ],
// //     tech: ['React.js', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
// //     github: 'https://github.com/nishimshah/Polyglo',
// //     video: 'https://drive.google.com/file/d/1ANNsJ-HGQOLoP2a2ts5FlIsuZNgDsc1B/preview',
// //     image: '/polygloss.png'
// //   },
// //   {
// //     title: 'SkillSwap - Peer-to-Peer Learning Platform',
// //     shortDesc: 'Web platform for users to exchange skills, connect, and collaborate in real-time.',
// //     description: 'Developed a comprehensive skill exchange platform enabling users to trade knowledge and expertise. Features real-time communication, advanced search and filtering, and a complete matching system for skill collaboration.',
// //     features: [
// //       'User authentication and profile management with Django REST Framework & JWT',
// //       'Real-time chat using WebSockets for direct skill negotiations',
// //       'Skill listing & search system with filtering and categorization',
// //       'Swap proposal system with accept/decline functionality',
// //       'Responsive React.js frontend integrated with DRF backend APIs'
// //     ],
// //     tech: ['React.js', 'Django', 'WebSockets', 'JWT', 'REST API'],
// //     github: 'https://github.com/nishimshah/Skillswap',
// //     video: 'https://drive.google.com/file/d/1fu7ukEa2lqPzuYN2wg0orEYdHWj1hAdS/preview',
// //     image: '/skillswapss.png'
// //   },
// //   {
// //     title: 'ResumeXpert - ML Resume Scoring Tool',
// //     shortDesc: 'Intelligent platform to score, filter, and generate resumes based on GitHub, LinkedIn, and LeetCode profiles.',
// //     description: 'Built an AI-powered resume analysis and generation platform that leverages machine learning to evaluate candidate profiles. Integrates with GitHub, LinkedIn, and LeetCode for comprehensive skill assessment and automated resume creation.',
// //     features: [
// //       'ML-based scoring system adapting to candidate activity and industry needs',
// //       'Resume generator auto-populating from GitHub/LeetCode data',
// //       'Company dashboard for job posting and bulk resume uploads',
// //       'Advanced filtering based on job requirements and skills',
// //       'Django REST API backend with JWT authentication and React.js frontend'
// //     ],
// //     tech: ['React.js', 'Django', 'Machine Learning', 'Scikit-learn', 'REST API', 'JWT'],
// //     github: 'https://github.com/nishimshah/ResumeExpert',
// //     video: 'https://drive.google.com/file/d/1TZwOOsa_b9wsj5IBnCP0MNMOSu9pWnI6/preview',
// //     image: '/resumepertss.png'
// //   },
// //   {
// //     title: 'Rewear - Community Clothing Exchange',
// //     shortDesc: 'Sustainable fashion platform for community-based clothing exchange and donation system.',
// //     description: 'Rewear is a community-driven platform promoting sustainable fashion through clothing exchange and donation. Users can list unwanted clothing items, browse available items, and arrange exchanges or donations, reducing textile waste and promoting circular economy.',
// //     features: [
// //       'User authentication and profile management',
// //       'Clothing listing with images and descriptions',
// //       'Search and filter system for clothing items',
// //       'Exchange request and acceptance system',
// //       'Donation tracking and community impact dashboard',
// //       'Location-based matching for local exchanges'
// //     ],
// //     tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
// //     github: 'https://github.com/s-dudhiya/Rewear-Community-Clothing-Exchange',
// //     video: 'https://drive.google.com/file/d/1OVqaqqY-sF02d4YlqxA8_YCBm5jhnRdi/preview',
// //     image: '/rewearss.jpg'
// //   },
// //   {
// //     title: 'InstaBuzz - Social Media Platform',
// //     shortDesc: 'A social media web application built with HTML, CSS, Python, and JavaScript for content sharing and engagement.',
// //     description: 'InstaBuzz is a full-featured social media platform that enables users to share content, interact with posts, and connect with others. Built with modern web technologies including Python backend and responsive frontend design.',
// //     features: [
// //       'User authentication and profile management',
// //       'Post creation with image and text content',
// //       'Like, comment, and share functionality',
// //       'Responsive design for mobile and desktop',
// //       'Real-time content feed and updates'
// //     ],
// //     tech: ['HTML', 'CSS', 'Python', 'JavaScript'],
// //     github: 'https://github.com/nishimshah/InstaBuzz',
// //     video: 'https://drive.google.com/file/d/1yximGaeJIwm9dBiCTHAX4tT-aObEMMRA/preview',
// //     image: '/instabuzzss.jpg'
// //   },
// //   {
// //     title: 'Ethereal-Co - E-Commerce Platform',
// //     shortDesc: 'Modern e-commerce web application with shopping cart, product catalog, and user management.',
// //     description: 'Ethereal-Co is a comprehensive e-commerce solution featuring product browsing, shopping cart functionality, secure checkout, and order management. Built with responsive design principles for seamless shopping experience.',
// //     features: [
// //       'Product catalog with search and filtering',
// //       'Shopping cart and checkout system',
// //       'User authentication and order history',
// //       'Admin panel for product management',
// //       'Responsive design for all devices'
// //     ],
// //     tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
// //     github: 'https://github.com/nishimshah/Ethereal-Co',
// //     video: 'https://drive.google.com/file/d/1LJDOm0e2HTxTPOyxzIuHV1FXEWwOG2vd/preview',
// //     image: '/etherealss.jpg'
// //   },
// //   {
// //     title: 'Learno - Learning Management System',
// //     shortDesc: 'Educational platform for course management, student enrollment, and online learning.',
// //     description: 'Learno is a learning management system designed to facilitate online education. Features include course creation, student enrollment, progress tracking, and interactive learning materials.',
// //     features: [
// //       'Course creation and management',
// //       'Student enrollment and progress tracking',
// //       'Interactive learning materials and quizzes',
// //       'Instructor dashboard for course monitoring',
// //       'Responsive interface for learning on any device'
// //     ],
// //     tech: ['HTML', 'Python', 'CSS', 'Django'],
// //     github: 'https://github.com/nishimshah/Learno',
// //     video: 'https://drive.google.com/file/d/18RXoh_xZU8kvrN5VAqGG6OEoWVFA-Ou3/preview',
// //     image: '/learnoss.png'
// //   },
// //   {
// //     title: 'Weather Application',
// //     shortDesc: 'Desktop weather application built with Python and tkinter for real-time weather information.',
// //     description: 'A desktop weather application that provides real-time weather information using Python tkinter GUI. Features weather forecasts, current conditions, and location-based weather data.',
// //     features: [
// //       'Real-time weather data fetching',
// //       'Location-based weather search',
// //       'Current conditions and forecasts',
// //       'Clean and intuitive GUI',
// //       'Temperature, humidity, and wind information'
// //     ],
// //     tech: ['Python', 'Django', 'Weather API', 'Machine Learning'],
// //     github: 'https://github.com/nishimshah/Weather-tkinter',
// //     video: 'https://drive.google.com/file/d/1Y2BxlRVb6ufQrDTkcgHdFUhVpLbU8Zsr/preview',
// //     image: '/weatherss.jpg'
// //   }
// // ];

// // Modal.setAppElement('#root');

// // export default function Projects() {
// //   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   const fadeIn = useSpring({
// //     opacity: inView ? 1 : 0,
// //     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
// //     config: { tension: 200, friction: 30 }
// //   });

// //   const openModal = (project) => {
// //     setSelectedProject(project);
// //     setModalIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //     setSelectedProject(null);
// //   };

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 600,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     centerMode: true,
// //     centerPadding: '15%',
// //     autoplay: false,
// //     arrows: true,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           centerPadding: '10%',
// //         }
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           centerPadding: '5%',
// //           centerMode: true,
// //           arrows: false,
// //         }
// //       }
// //     ],
// //     nextArrow: <NextArrow />,
// //     prevArrow: <PrevArrow />
// //   };

// //   const isGoogleDriveVideo = (url) => {
// //     return url && url.includes('drive.google.com');
// //   };

// //   return (
// //     <section id="projects" ref={ref} className="px-6 max-w-7xl mx-auto py-16 bg-light-bg dark:bg-dark-bg">
// //       <animated.div style={fadeIn}>
// //         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center justify-center md:justify-start">
// //           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">03.</span>
// //           Things I've Built
// //           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs hidden md:block" />
// //         </h2>

// //         <div className="projects-carousel">
// //           <Slider {...settings}>
// //             {projects.map((project, idx) => (
// //               <div key={idx} className="px-2 md:px-4">
// //                 <div 
// //                   className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg overflow-hidden hover:border-accent-primary dark:hover:border-accent-primaryDark/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl flex flex-col h-[580px] md:h-[620px]"
// //                   onClick={() => openModal(project)}
// //                 >
// //                   {/* Project Image with Hover Overlay */}
// //                   <div className="relative overflow-hidden h-48 md:h-72 bg-light-elevated dark:bg-dark-elevated flex-shrink-0">
// //                     <img 
// //                       src={project.image} 
// //                       alt={project.title}
// //                       className="w-full h-full object-cover"
// //                     />
                    
// //                     {/* Hover Overlay */}
// //                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-light-card/90 dark:bg-dark-bg/90 backdrop-blur-sm">
// //                       <div className="bg-light-elevated dark:bg-dark-card rounded-full p-4 border border-accent-primary dark:border-accent-primaryDark">
// //                         <svg className="w-8 h-8 text-accent-primary dark:text-accent-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="p-4 md:p-6 flex flex-col flex-grow">
// //                     <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-xs mb-2">Featured Project</div>
// //                     <h3 className="text-xl md:text-2xl font-bold text-textLight-heading dark:text-text-heading mb-2 md:mb-3 group-hover:text-accent-primary dark:group-hover:text-accent-primaryDark transition-colors line-clamp-2">
// //                       {project.title}
// //                     </h3>
// //                     <p className="text-textLight-secondary dark:text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
// //                       {project.shortDesc}
// //                     </p>

// //                     <div className="flex flex-wrap gap-2 mb-4">
// //                       {project.tech.slice(0, 4).map(tech => (
// //                         <span key={tech} className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
// //                           {tech}
// //                         </span>
// //                       ))}
// //                       {project.tech.length > 4 && (
// //                         <span className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
// //                           +{project.tech.length - 4}
// //                         </span>
// //                       )}
// //                     </div>

// //                     <div className="flex items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark mt-auto">
// //                       <a 
// //                         href={project.github} 
// //                         onClick={(e) => e.stopPropagation()}
// //                         className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
// //                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
// //                         </svg>
// //                         Code
// //                       </a>
// //                       {project.video !== '#' && (
// //                         <a 
// //                           href={project.video} 
// //                           onClick={(e) => e.stopPropagation()}
// //                           className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                         >
// //                           <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                           </svg>
// //                           Video
// //                         </a>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </Slider>
// //         </div>
// //       </animated.div>

// //       {/* Modal - keep same as before */}
// //       <Modal
// //         isOpen={modalIsOpen}
// //         onRequestClose={closeModal}
// //         className="max-w-4xl mx-auto mt-10 mb-10 p-6 md:p-8 bg-light-card dark:bg-dark-card rounded-lg border border-border-light dark:border-border-dark outline-none max-h-[90vh] overflow-y-auto"
// //         overlayClassName="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
// //       >
// //         {selectedProject && (
// //           <div>
// //             <div className="flex justify-between items-start mb-6">
// //               <div>
// //                 <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-sm mb-2">Featured Project</div>
// //                 <h2 className="text-2xl md:text-3xl font-bold text-textLight-heading dark:text-text-heading">{selectedProject.title}</h2>
// //               </div>
// //               <button
// //                 onClick={closeModal}
// //                 className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors"
// //               >
// //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>
// //             </div>

// //             {selectedProject.video && selectedProject.video !== '#' && (
// //               <div className="mb-6">
// //                 <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Project Demo Video:</h3>
// //                 {isGoogleDriveVideo(selectedProject.video) ? (
// //                   <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
// //                     <iframe 
// //                       src={selectedProject.video}
// //                       className="absolute top-0 left-0 w-full h-full"
// //                       allow="autoplay"
// //                       allowFullScreen
// //                       title="Project Demo"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg bg-black">
// //                     <video 
// //                       controls 
// //                       className="w-full"
// //                       controlsList="nodownload"
// //                     >
// //                       <source src={selectedProject.video} type="video/mp4" />
// //                       Your browser does not support the video tag.
// //                     </video>
// //                   </div>
// //                 )}
// //               </div>
// //             )}

// //             <p className="text-textLight-secondary dark:text-text-secondary text-base md:text-lg leading-relaxed mb-6">
// //               {selectedProject.description}
// //             </p>

// //             <div className="mb-6">
// //               <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3 text-lg">Key Features:</h3>
// //               <ul className="space-y-2">
// //                 {selectedProject.features.map((feature, idx) => (
// //                   <li key={idx} className="flex items-start text-textLight-secondary dark:text-text-secondary text-sm">
// //                     <span className="text-accent-primary dark:text-accent-primaryDark mr-3 mt-1">▹</span>
// //                     <span>{feature}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="mb-6">
// //               <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Technologies Used:</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {selectedProject.tech.map(tech => (
// //                   <span key={tech} className="font-mono text-xs md:text-sm text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-3 md:px-4 py-2 rounded">
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="flex flex-wrap gap-4 pt-6 border-t border-border-light dark:border-border-dark">
// //               <a
// //                 href={selectedProject.github}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono text-sm"
// //               >
// //                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
// //                 </svg>
// //                 View Code
// //               </a>
// //             </div>
// //           </div>
// //         )}
// //       </Modal>
// //     </section>
// //   );
// // }

// // function NextArrow({ onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
// //       aria-label="Next project"
// //     >
// //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //       </svg>
// //     </button>
// //   );
// // }

// // function PrevArrow({ onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
// //       aria-label="Previous project"
// //     >
// //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //       </svg>
// //     </button>
// //   );
// // }
// import { useState } from 'react';
// import Slider from 'react-slick';
// import { useInView } from 'react-intersection-observer';
// import { useSpring, animated } from '@react-spring/web';
// import Modal from 'react-modal';

// const projects = [
//   {
//     title: 'PolyGlo - Language Learning App',
//     shortDesc: 'Gamified platform for learning multiple languages with progressive levels and interactive practice.',
//     description: 'Built a comprehensive language learning platform featuring gamified progression, user authentication with Django REST Framework & JWT, progressive course unlocking system, interactive vocabulary and grammar exercises, and a streak tracking system to boost engagement.',
//     features: [
//       'User authentication & profiles with Django REST Framework & JWT',
//       'Progressive language courses with level-based unlocking',
//       'Interactive exercises & quizzes for vocabulary and grammar',
//       'Progress tracking & streak system for engagement',
//       'Responsive React.js frontend with DRF-powered backend APIs'
//     ],
//     tech: ['React.js', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
//     github: 'https://github.com/nishimshah/Polyglo',
//     video: 'https://drive.google.com/file/d/1ANNsJ-HGQOLoP2a2ts5FlIsuZNgDsc1B/preview',
//     image: '/polygloss.png'
//   },
//   {
//     title: 'SkillSwap - Peer-to-Peer Learning Platform',
//     shortDesc: 'Web platform for users to exchange skills, connect, and collaborate in real-time.',
//     description: 'Developed a comprehensive skill exchange platform enabling users to trade knowledge and expertise. Features real-time communication, advanced search and filtering, and a complete matching system for skill collaboration.',
//     features: [
//       'User authentication and profile management with Django REST Framework & JWT',
//       'Real-time chat using WebSockets for direct skill negotiations',
//       'Skill listing & search system with filtering and categorization',
//       'Swap proposal system with accept/decline functionality',
//       'Responsive React.js frontend integrated with DRF backend APIs'
//     ],
//     tech: ['React.js', 'Django', 'WebSockets', 'JWT', 'REST API'],
//     github: 'https://github.com/nishimshah/Skillswap',
//     video: 'https://drive.google.com/file/d/1fu7ukEa2lqPzuYN2wg0orEYdHWj1hAdS/preview',
//     image: '/skillswapss.png'
//   },
//   {
//     title: 'ResumeXpert - ML Resume Scoring Tool',
//     shortDesc: 'Intelligent platform to score, filter, and generate resumes based on GitHub, LinkedIn, and LeetCode profiles.',
//     description: 'Built an AI-powered resume analysis and generation platform that leverages machine learning to evaluate candidate profiles. Integrates with GitHub, LinkedIn, and LeetCode for comprehensive skill assessment and automated resume creation.',
//     features: [
//       'ML-based scoring system adapting to candidate activity and industry needs',
//       'Resume generator auto-populating from GitHub/LeetCode data',
//       'Company dashboard for job posting and bulk resume uploads',
//       'Advanced filtering based on job requirements and skills',
//       'Django REST API backend with JWT authentication and React.js frontend'
//     ],
//     tech: ['React.js', 'Django', 'Machine Learning', 'Scikit-learn', 'REST API', 'JWT'],
//     github: 'https://github.com/nishimshah/ResumeExpert',
//     video: 'https://drive.google.com/file/d/1TZwOOsa_b9wsj5IBnCP0MNMOSu9pWnI6/preview',
//     image: '/resumepertss.png'
//   },
//   {
//     title: 'Rewear - Community Clothing Exchange',
//     shortDesc: 'Sustainable fashion platform for community-based clothing exchange and donation system.',
//     description: 'Rewear is a community-driven platform promoting sustainable fashion through clothing exchange and donation. Users can list unwanted clothing items, browse available items, and arrange exchanges or donations, reducing textile waste and promoting circular economy.',
//     features: [
//       'User authentication and profile management',
//       'Clothing listing with images and descriptions',
//       'Search and filter system for clothing items',
//       'Exchange request and acceptance system',
//       'Donation tracking and community impact dashboard',
//       'Location-based matching for local exchanges'
//     ],
//     tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
//     github: 'https://github.com/s-dudhiya/Rewear-Community-Clothing-Exchange',
//     video: 'https://drive.google.com/file/d/1OVqaqqY-sF02d4YlqxA8_YCBm5jhnRdi/preview',
//     image: '/rewearss.jpg'
//   },
//   {
//     title: 'InstaBuzz - Social Media Platform',
//     shortDesc: 'A social media web application built with HTML, CSS, Python, and JavaScript for content sharing and engagement.',
//     description: 'InstaBuzz is a full-featured social media platform that enables users to share content, interact with posts, and connect with others. Built with modern web technologies including Python backend and responsive frontend design.',
//     features: [
//       'User authentication and profile management',
//       'Post creation with image and text content',
//       'Like, comment, and share functionality',
//       'Responsive design for mobile and desktop',
//       'Real-time content feed and updates'
//     ],
//     tech: ['HTML', 'CSS', 'Python', 'JavaScript'],
//     github: 'https://github.com/nishimshah/InstaBuzz',
//     video: 'https://drive.google.com/file/d/1yximGaeJIwm9dBiCTHAX4tT-aObEMMRA/preview',
//     image: '/instabuzzss.jpg'
//   },
//   {
//     title: 'Ethereal-Co - E-Commerce Platform',
//     shortDesc: 'Modern e-commerce web application with shopping cart, product catalog, and user management.',
//     description: 'Ethereal-Co is a comprehensive e-commerce solution featuring product browsing, shopping cart functionality, secure checkout, and order management. Built with responsive design principles for seamless shopping experience.',
//     features: [
//       'Product catalog with search and filtering',
//       'Shopping cart and checkout system',
//       'User authentication and order history',
//       'Admin panel for product management',
//       'Responsive design for all devices'
//     ],
//     tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
//     github: 'https://github.com/nishimshah/Ethereal-Co',
//     video: 'https://drive.google.com/file/d/1LJDOm0e2HTxTPOyxzIuHV1FXEWwOG2vd/preview',
//     image: '/etherealss.jpg'
//   },
//   {
//     title: 'Learno - Learning Management System',
//     shortDesc: 'Educational platform for course management, student enrollment, and online learning.',
//     description: 'Learno is a learning management system designed to facilitate online education. Features include course creation, student enrollment, progress tracking, and interactive learning materials.',
//     features: [
//       'Course creation and management',
//       'Student enrollment and progress tracking',
//       'Interactive learning materials and quizzes',
//       'Instructor dashboard for course monitoring',
//       'Responsive interface for learning on any device'
//     ],
//     tech: ['HTML', 'Python', 'CSS', 'Django'],
//     github: 'https://github.com/nishimshah/Learno',
//     video: 'https://drive.google.com/file/d/18RXoh_xZU8kvrN5VAqGG6OEoWVFA-Ou3/preview',
//     image: '/learnoss.png'
//   },
//   {
//     title: 'Weather Application',
//     shortDesc: 'Desktop weather application built with Python and tkinter for real-time weather information.',
//     description: 'A desktop weather application that provides real-time weather information using Python tkinter GUI. Features weather forecasts, current conditions, and location-based weather data.',
//     features: [
//       'Real-time weather data fetching',
//       'Location-based weather search',
//       'Current conditions and forecasts',
//       'Clean and intuitive GUI',
//       'Temperature, humidity, and wind information'
//     ],
//     tech: ['Python', 'Django', 'Weather API', 'Machine Learning'],
//     github: 'https://github.com/nishimshah/Weather-tkinter',
//     video: 'https://drive.google.com/file/d/1Y2BxlRVb6ufQrDTkcgHdFUhVpLbU8Zsr/preview',
//     image: '/weatherss.jpg'
//   }
// ];

// Modal.setAppElement('#root');

// export default function Projects() {
//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const fadeIn = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'translateY(0px)' : 'translateY(40px)',
//     config: { tension: 200, friction: 30 }
//   });

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedProject(null);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '15%',
//     autoplay: false,
//     arrows: true,
//     swipe: true,
//     swipeToSlide: true,
//     touchThreshold: 10,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           centerPadding: '10%',
//           arrows: true,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           centerPadding: '5%',
//           centerMode: true,
//           arrows: false,
//           swipe: true,
//           swipeToSlide: true,
//         }
//       }
//     ],
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   const isGoogleDriveVideo = (url) => {
//     return url && url.includes('drive.google.com');
//   };

//   return (
//     <section id="projects" ref={ref} className="px-6 max-w-7xl mx-auto py-16 bg-light-bg dark:bg-dark-bg">
//       <animated.div style={fadeIn}>
//         <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center justify-center md:justify-start">
//           <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">03.</span>
//           Things I've Built
//           <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs hidden md:block" />
//         </h2>

//         <div className="projects-carousel">
//           <Slider {...settings}>
//             {projects.map((project, idx) => (
//               <div key={idx} className="px-2 md:px-4">
//                 <div 
//                   className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg overflow-hidden hover:border-accent-primary dark:hover:border-accent-primaryDark/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl flex flex-col h-[580px] md:h-[620px]"
//                   onClick={() => openModal(project)}
//                 >
//                   {/* Project Image with Hover Overlay */}
//                   <div className="relative overflow-hidden h-48 md:h-72 bg-light-elevated dark:bg-dark-elevated flex-shrink-0">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover"
//                     />
                    
//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-light-card/90 dark:bg-dark-bg/90 backdrop-blur-sm">
//                       <div className="bg-light-elevated dark:bg-dark-card rounded-full p-4 border border-accent-primary dark:border-accent-primaryDark">
//                         <svg className="w-8 h-8 text-accent-primary dark:text-accent-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-4 md:p-6 flex flex-col flex-grow">
//                     <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-xs mb-2">Featured Project</div>
//                     <h3 className="text-xl md:text-2xl font-bold text-textLight-heading dark:text-text-heading mb-2 md:mb-3 group-hover:text-accent-primary dark:group-hover:text-accent-primaryDark transition-colors line-clamp-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-textLight-secondary dark:text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
//                       {project.shortDesc}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.slice(0, 4).map(tech => (
//                         <span key={tech} className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
//                           {tech}
//                         </span>
//                       ))}
//                       {project.tech.length > 4 && (
//                         <span className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
//                           +{project.tech.length - 4}
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark mt-auto">
//                       <a 
//                         href={project.github} 
//                         onClick={(e) => e.stopPropagation()}
//                         className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                         </svg>
//                         Code
//                       </a>
//                       {project.video !== '#' && (
//                         <a 
//                           href={project.video} 
//                           onClick={(e) => e.stopPropagation()}
//                           className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                           </svg>
//                           Video
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </animated.div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="max-w-4xl mx-auto mt-10 mb-10 p-6 md:p-8 bg-light-card dark:bg-dark-card rounded-lg border border-border-light dark:border-border-dark outline-none max-h-[90vh] overflow-y-auto"
//         overlayClassName="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
//       >
//         {selectedProject && (
//           <div>
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-sm mb-2">Featured Project</div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-textLight-heading dark:text-text-heading">{selectedProject.title}</h2>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {selectedProject.video && selectedProject.video !== '#' && (
//               <div className="mb-6">
//                 <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Project Demo Video:</h3>
//                 {isGoogleDriveVideo(selectedProject.video) ? (
//                   <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
//                     <iframe 
//                       src={selectedProject.video}
//                       className="absolute top-0 left-0 w-full h-full"
//                       allow="autoplay"
//                       allowFullScreen
//                       title="Project Demo"
//                     />
//                   </div>
//                 ) : (
//                   <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg bg-black">
//                     <video 
//                       controls 
//                       className="w-full"
//                       controlsList="nodownload"
//                     >
//                       <source src={selectedProject.video} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}
//               </div>
//             )}

//             <p className="text-textLight-secondary dark:text-text-secondary text-base md:text-lg leading-relaxed mb-6">
//               {selectedProject.description}
//             </p>

//             <div className="mb-6">
//               <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3 text-lg">Key Features:</h3>
//               <ul className="space-y-2">
//                 {selectedProject.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start text-textLight-secondary dark:text-text-secondary text-sm">
//                     <span className="text-accent-primary dark:text-accent-primaryDark mr-3 mt-1">▹</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Technologies Used:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {selectedProject.tech.map(tech => (
//                   <span key={tech} className="font-mono text-xs md:text-sm text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-3 md:px-4 py-2 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 pt-6 border-t border-border-light dark:border-border-dark">
//               <a
//                 href={selectedProject.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono text-sm"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//                 View Code
//               </a>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </section>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
//       aria-label="Next project"
//     >
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//       </svg>
//     </button>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
//       aria-label="Previous project"
//     >
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//       </svg>
//     </button>
//   );
// }
import { useState } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Modal from 'react-modal';

const projects = [
  {
    title: 'PolyGlo - Language Learning App',
    shortDesc: 'Gamified platform for learning multiple languages with progressive levels and interactive practice.',
    description: 'Built a comprehensive language learning platform featuring gamified progression, user authentication with Django REST Framework & JWT, progressive course unlocking system, interactive vocabulary and grammar exercises, and a streak tracking system to boost engagement.',
    features: [
      'User authentication & profiles with Django REST Framework & JWT',
      'Progressive language courses with level-based unlocking',
      'Interactive exercises & quizzes for vocabulary and grammar',
      'Progress tracking & streak system for engagement',
      'Responsive React.js frontend with DRF-powered backend APIs'
    ],
    tech: ['React.js', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/nishimshah/Polyglo',
    video: 'https://drive.google.com/file/d/1ANNsJ-HGQOLoP2a2ts5FlIsuZNgDsc1B/preview',
    image: '/polygloss.png'
  },
  {
    title: 'SkillSwap - Peer-to-Peer Learning Platform',
    shortDesc: 'Web platform for users to exchange skills, connect, and collaborate in real-time.',
    description: 'Developed a comprehensive skill exchange platform enabling users to trade knowledge and expertise. Features real-time communication, advanced search and filtering, and a complete matching system for skill collaboration.',
    features: [
      'User authentication and profile management with Django REST Framework & JWT',
      'Real-time chat using WebSockets for direct skill negotiations',
      'Skill listing & search system with filtering and categorization',
      'Swap proposal system with accept/decline functionality',
      'Responsive React.js frontend integrated with DRF backend APIs'
    ],
    tech: ['React.js', 'Django', 'WebSockets', 'JWT', 'REST API'],
    github: 'https://github.com/nishimshah/Skillswap',
    video: 'https://drive.google.com/file/d/1fu7ukEa2lqPzuYN2wg0orEYdHWj1hAdS/preview',
    image: '/skillswapss.png'
  },
  {
    title: 'ResumeXpert - ML Resume Scoring Tool',
    shortDesc: 'Intelligent platform to score, filter, and generate resumes based on GitHub, LinkedIn, and LeetCode profiles.',
    description: 'Built an AI-powered resume analysis and generation platform that leverages machine learning to evaluate candidate profiles. Integrates with GitHub, LinkedIn, and LeetCode for comprehensive skill assessment and automated resume creation.',
    features: [
      'ML-based scoring system adapting to candidate activity and industry needs',
      'Resume generator auto-populating from GitHub/LeetCode data',
      'Company dashboard for job posting and bulk resume uploads',
      'Advanced filtering based on job requirements and skills',
      'Django REST API backend with JWT authentication and React.js frontend'
    ],
    tech: ['React.js', 'Django', 'Machine Learning', 'Scikit-learn', 'REST API', 'JWT'],
    github: 'https://github.com/nishimshah/ResumeExpert',
    video: 'https://drive.google.com/file/d/1TZwOOsa_b9wsj5IBnCP0MNMOSu9pWnI6/preview',
    image: '/resumepertss.png'
  },
  {
    title: 'Rewear - Community Clothing Exchange',
    shortDesc: 'Sustainable fashion platform for community-based clothing exchange and donation system.',
    description: 'Rewear is a community-driven platform promoting sustainable fashion through clothing exchange and donation. Users can list unwanted clothing items, browse available items, and arrange exchanges or donations, reducing textile waste and promoting circular economy.',
    features: [
      'User authentication and profile management',
      'Clothing listing with images and descriptions',
      'Search and filter system for clothing items',
      'Exchange request and acceptance system',
      'Donation tracking and community impact dashboard',
      'Location-based matching for local exchanges'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/s-dudhiya/Rewear-Community-Clothing-Exchange',
    video: 'https://drive.google.com/file/d/1OVqaqqY-sF02d4YlqxA8_YCBm5jhnRdi/preview',
    image: '/rewearss.jpg'
  },
  {
    title: 'InstaBuzz - Social Media Platform',
    shortDesc: 'A social media web application built with HTML, CSS, Python, and JavaScript for content sharing and engagement.',
    description: 'InstaBuzz is a full-featured social media platform that enables users to share content, interact with posts, and connect with others. Built with modern web technologies including Python backend and responsive frontend design.',
    features: [
      'User authentication and profile management',
      'Post creation with image and text content',
      'Like, comment, and share functionality',
      'Responsive design for mobile and desktop',
      'Real-time content feed and updates'
    ],
    tech: ['HTML', 'CSS', 'Python', 'JavaScript'],
    github: 'https://github.com/nishimshah/InstaBuzz',
    video: 'https://drive.google.com/file/d/1yximGaeJIwm9dBiCTHAX4tT-aObEMMRA/preview',
    image: '/instabuzzss.jpg'
  },
  {
    title: 'Ethereal-Co - E-Commerce Platform',
    shortDesc: 'Modern e-commerce web application with shopping cart, product catalog, and user management.',
    description: 'Ethereal-Co is a comprehensive e-commerce solution featuring product browsing, shopping cart functionality, secure checkout, and order management. Built with responsive design principles for seamless shopping experience.',
    features: [
      'Product catalog with search and filtering',
      'Shopping cart and checkout system',
      'User authentication and order history',
      'Admin panel for product management',
      'Responsive design for all devices'
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/nishimshah/Ethereal-Co',
    video: 'https://drive.google.com/file/d/1LJDOm0e2HTxTPOyxzIuHV1FXEWwOG2vd/preview',
    image: '/etherealss.jpg'
  },
  {
    title: 'Learno - Learning Management System',
    shortDesc: 'Educational platform for course management, student enrollment, and online learning.',
    description: 'Learno is a learning management system designed to facilitate online education. Features include course creation, student enrollment, progress tracking, and interactive learning materials.',
    features: [
      'Course creation and management',
      'Student enrollment and progress tracking',
      'Interactive learning materials and quizzes',
      'Instructor dashboard for course monitoring',
      'Responsive interface for learning on any device'
    ],
    tech: ['HTML', 'Python', 'CSS', 'Django'],
    github: 'https://github.com/nishimshah/Learno',
    video: 'https://drive.google.com/file/d/18RXoh_xZU8kvrN5VAqGG6OEoWVFA-Ou3/preview',
    image: '/learnoss.png'
  },
  {
    title: 'Weather Application',
    shortDesc: 'Desktop weather application built with Python and tkinter for real-time weather information.',
    description: 'A desktop weather application that provides real-time weather information using Python tkinter GUI. Features weather forecasts, current conditions, and location-based weather data.',
    features: [
      'Real-time weather data fetching',
      'Location-based weather search',
      'Current conditions and forecasts',
      'Clean and intuitive GUI',
      'Temperature, humidity, and wind information'
    ],
    tech: ['Python', 'Django', 'Weather API', 'Machine Learning'],
    github: 'https://github.com/nishimshah/Weather-tkinter',
    video: 'https://drive.google.com/file/d/1Y2BxlRVb6ufQrDTkcgHdFUhVpLbU8Zsr/preview',
    image: '/weatherss.jpg'
  }
];

Modal.setAppElement('#root');

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 200, friction: 30 }
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '12%',
    autoplay: false,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '8%',
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0%',
          centerMode: true,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0%',
          centerMode: false,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const isGoogleDriveVideo = (url) => {
    return url && url.includes('drive.google.com');
  };

  return (
    <section id="projects" ref={ref} className="px-4 md:px-6 max-w-7xl mx-auto py-16 bg-light-bg dark:bg-dark-bg">
      <animated.div style={fadeIn}>
        <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading mb-12 flex items-center justify-center md:justify-start">
          <span className="text-accent-primary dark:text-accent-primaryDark font-mono mr-2">03.</span>
          Things I've Built
          <div className="ml-4 h-px bg-border-light dark:bg-border-dark flex-grow max-w-xs hidden md:block" />
        </h2>

        <div className="projects-carousel max-w-5xl mx-auto">
          <Slider {...settings}>
            {projects.map((project, idx) => (
              <div key={idx} className="px-2 md:px-3">
                <div 
                  className="bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg overflow-hidden hover:border-accent-primary dark:hover:border-accent-primaryDark/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl flex flex-col h-[580px] md:h-[620px]"
                  onClick={() => openModal(project)}
                >
                  {/* Project Image with Hover Overlay */}
                  <div className="relative overflow-hidden h-48 md:h-72 bg-light-elevated dark:bg-dark-elevated flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-light-card/90 dark:bg-dark-bg/90 backdrop-blur-sm">
                      <div className="bg-light-elevated dark:bg-dark-card rounded-full p-4 border border-accent-primary dark:border-accent-primaryDark">
                        <svg className="w-8 h-8 text-accent-primary dark:text-accent-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-xs mb-2">Featured Project</div>
                    <h3 className="text-xl md:text-2xl font-bold text-textLight-heading dark:text-text-heading mb-2 md:mb-3 group-hover:text-accent-primary dark:group-hover:text-accent-primaryDark transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-textLight-secondary dark:text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs font-mono text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-2 md:px-3 py-1 rounded">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark mt-auto">
                      <a 
                        href={project.github} 
                        onClick={(e) => e.stopPropagation()}
                        className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      {project.video !== '#' && (
                        <a 
                          href={project.video} 
                          onClick={(e) => e.stopPropagation()}
                          className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors flex items-center gap-1 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </animated.div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-4xl mx-auto mt-10 mb-10 p-6 md:p-8 bg-light-card dark:bg-dark-card rounded-lg border border-border-light dark:border-border-dark outline-none max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      >
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-accent-primary dark:text-accent-primaryDark font-mono text-sm mb-2">Featured Project</div>
                <h2 className="text-2xl md:text-3xl font-bold text-textLight-heading dark:text-text-heading">{selectedProject.title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedProject.video && selectedProject.video !== '#' && (
              <div className="mb-6">
                <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Project Demo Video:</h3>
                {isGoogleDriveVideo(selectedProject.video) ? (
                  <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                      src={selectedProject.video}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                      title="Project Demo"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-lg overflow-hidden border border-border-light dark:border-border-dark shadow-lg bg-black">
                    <video 
                      controls 
                      className="w-full"
                      controlsList="nodownload"
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            )}

            <p className="text-textLight-secondary dark:text-text-secondary text-base md:text-lg leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3 text-lg">Key Features:</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-textLight-secondary dark:text-text-secondary text-sm">
                    <span className="text-accent-primary dark:text-accent-primaryDark mr-3 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-textLight-heading dark:text-text-heading font-bold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(tech => (
                  <span key={tech} className="font-mono text-xs md:text-sm text-textLight-secondary dark:text-text-secondary bg-light-elevated dark:bg-dark-elevated px-3 md:px-4 py-2 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-border-light dark:border-border-dark">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
      aria-label="Next project"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-light-card dark:bg-dark-card border border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark p-3 rounded-full hover:bg-accent-primary dark:hover:bg-accent-primaryDark hover:text-white transition-all shadow-lg"
      aria-label="Previous project"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
