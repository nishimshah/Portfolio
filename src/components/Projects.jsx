import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Modal from 'react-modal';

const projects = [
  {
    title: 'PolyGlo - Language Learning App',
    shortDesc: 'Gamified platform for learning multiple languages with progressive levels.',
    description: 'Built a comprehensive language learning platform featuring gamified progression, user authentication with Django REST Framework & JWT, progressive course unlocking system, interactive vocabulary and grammar exercises, and a streak tracking system to boost engagement.',
    features: [
      'User authentication & profiles with Django REST Framework & JWT',
      'Progressive language courses with level-based unlocking',
      'Interactive exercises & quizzes',
      'Progress tracking & streak system',
      'Responsive React.js frontend with DRF APIs'
    ],
    tech: ['React.js', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/nishimshah/Polyglo',
    video: 'https://drive.google.com/file/d/1ANNsJ-HGQOLoP2a2ts5FlIsuZNgDsc1B/preview',
    image: '/polygloss.png'
  },
  {
    title: 'SkillSwap - P2P Learning Platform',
    shortDesc: 'Platform for users to exchange skills and collaborate in real-time.',
    description: 'Developed a comprehensive skill exchange platform enabling users to trade knowledge and expertise with real-time communication and advanced search.',
    features: [
      'User authentication with Django REST & JWT',
      'Real-time chat using WebSockets',
      'Skill listing & search system',
      'Swap proposal system',
      'Responsive React.js frontend'
    ],
    tech: ['React.js', 'Django', 'WebSockets', 'JWT', 'REST API'],
    github: 'https://github.com/nishimshah/Skillswap',
    video: 'https://drive.google.com/file/d/1fu7ukEa2lqPzuYN2wg0orEYdHWj1hAdS/preview',
    image: '/skillswapss.png'
  },
  {
    title: 'ResumeXpert - ML Resume Scoring Tool',
    shortDesc: 'AI-powered platform to score and generate resumes using ML.',
    description: 'Built an AI-powered resume analysis platform that leverages machine learning to evaluate candidate profiles with GitHub, LinkedIn, and LeetCode integration.',
    features: [
      'ML-based scoring system',
      'Auto-resume generator from GitHub/LeetCode',
      'Company dashboard for job posting',
      'Advanced filtering by skills',
      'Django REST API with JWT'
    ],
    tech: ['React.js', 'Django', 'Machine Learning', 'Scikit-learn', 'JWT'],
    github: 'https://github.com/nishimshah/ResumeExpert',
    video: 'https://drive.google.com/file/d/1TZwOOsa_b9wsj5IBnCP0MNMOSu9pWnI6/preview',
    image: '/resumepertss.png'
  },
  {
    title: 'Rewear - Community Clothing Exchange',
    shortDesc: 'Sustainable fashion platform for community clothing exchange.',
    description: 'Community-driven platform promoting sustainable fashion through clothing exchange and donation.',
    features: [
      'User authentication and profiles',
      'Clothing listing with images',
      'Search and filter system',
      'Exchange request system',
      'Community impact dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: 'https://github.com/s-dudhiya/Rewear-Community-Clothing-Exchange',
    video: 'https://drive.google.com/file/d/1OVqaqqY-sF02d4YlqxA8_YCBm5jhnRdi/preview',
    image: '/rewearss.jpg'
  },
  {
    title: 'InstaBuzz - Social Media Platform',
    shortDesc: 'Full-featured social media platform for content sharing and engagement.',
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
    shortDesc: 'Modern e-commerce platform with shopping cart and product catalog.',
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
    shortDesc: 'Educational platform for course management and online learning.',
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
    shortDesc: 'Desktop weather app with real-time weather information.',
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
  const scrollContainerRef = useRef(null);

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 200, friction: 30 }
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen lg:pl-20 py-24 bg-gray-50 dark:bg-dark-surface">
      <div className="px-6 md:px-12 lg:px-24">
        <animated.div style={fadeIn}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gray-600 dark:text-gray-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16 text-lg">
            A collection of {projects.length} projects showcasing my skills in full-stack development
          </p>

          {/* Desktop Timeline View */}
          <div className="hidden md:block relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-dark-border" />

            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="relative mb-12 md:ml-20"
              >
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-dark-surface" />

                <div 
                  className="group bg-white dark:bg-dark-elevated rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setModalIsOpen(true);
                  }}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="md:w-3/5 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-lg text-sm font-mono border border-gray-200 dark:border-dark-border">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-lg text-sm font-mono border border-gray-200 dark:border-dark-border">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <a 
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                        {project.video && (
                          <a 
                            href={project.video}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="relative">
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-dark-elevated rounded-full shadow-lg border border-gray-200 dark:border-dark-border"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-dark-elevated rounded-full shadow-lg border border-gray-200 dark:border-dark-border"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2 py-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[85vw] snap-center"
                    onClick={() => {
                      setSelectedProject(project);
                      setModalIsOpen(true);
                    }}
                  >
                    <div className="bg-white dark:bg-dark-elevated rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border shadow-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.shortDesc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map(tech => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded text-xs font-mono">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded text-xs font-mono">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                          <a 
                            href={project.github}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </a>
                          {project.video && (
                            <a 
                              href={project.video}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className="w-2 h-2 rounded-full bg-gray-300 dark:bg-dark-border"
                />
              ))}
            </div>
          </div>
        </animated.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="max-w-5xl mx-auto mt-10 mb-10 p-8 bg-white dark:bg-dark-elevated rounded-2xl border border-gray-200 dark:border-dark-border outline-none max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      >
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setModalIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedProject.video && (
              <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-dark-border">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    src={selectedProject.video}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gray-900 dark:text-white mr-3 mt-1">▹</span>
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map(tech => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-dark-surface rounded-lg text-gray-700 dark:text-gray-300 font-mono border border-gray-200 dark:border-dark-border">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source Code
            </a>
          </div>
        )}
      </Modal>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
