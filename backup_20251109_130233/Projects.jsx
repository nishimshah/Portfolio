import { useState } from 'react';
import Slider from 'react-slick';
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
      'Interactive exercises & quizzes for vocabulary and grammar',
      'Progress tracking & streak system for engagement',
      'Responsive React.js frontend with DRF-powered backend APIs'
    ],
    tech: ['React.js', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/nishimshah/Polyglo',
    video: 'https://drive.google.com/file/d/1ANNsJ-HGQOLoP2a2ts5FlIsuZNgDsc1B/preview',
    image: '/polygloss.png',
    color: 'cyan'
  },
  {
    title: 'SkillSwap - Peer-to-Peer Learning',
    shortDesc: 'Web platform for users to exchange skills and collaborate in real-time.',
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
    image: '/skillswapss.png',
    color: 'purple'
  },
  {
    title: 'ResumeXpert - ML Resume Scoring',
    shortDesc: 'Intelligent platform to score and generate resumes using ML.',
    description: 'Built an AI-powered resume analysis and generation platform that leverages machine learning to evaluate candidate profiles. Integrates with GitHub, LinkedIn, and LeetCode for comprehensive skill assessment.',
    features: [
      'ML-based scoring system adapting to candidate activity',
      'Resume generator auto-populating from GitHub/LeetCode data',
      'Company dashboard for job posting and bulk resume uploads',
      'Advanced filtering based on job requirements and skills',
      'Django REST API backend with JWT authentication'
    ],
    tech: ['React.js', 'Django', 'Machine Learning', 'Scikit-learn', 'JWT'],
    github: 'https://github.com/nishimshah/ResumeExpert',
    video: 'https://drive.google.com/file/d/1TZwOOsa_b9wsj5IBnCP0MNMOSu9pWnI6/preview',
    image: '/resumepertss.png',
    color: 'pink'
  },
  {
    title: 'Rewear - Clothing Exchange',
    shortDesc: 'Sustainable fashion platform for community-based clothing exchange.',
    description: 'Community-driven platform promoting sustainable fashion through clothing exchange and donation. Users can list items, browse, and arrange exchanges.',
    features: [
      'User authentication and profile management',
      'Clothing listing with images and descriptions',
      'Search and filter system for clothing items',
      'Exchange request and acceptance system',
      'Donation tracking and community impact dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/s-dudhiya/Rewear-Community-Clothing-Exchange',
    video: 'https://drive.google.com/file/d/1OVqaqqY-sF02d4YlqxA8_YCBm5jhnRdi/preview',
    image: '/rewearss.jpg',
    color: 'orange'
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
    centerPadding: '15%',
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: '10%', arrows: true }
      },
      {
        breakpoint: 768,
        settings: { centerPadding: '5%', arrows: false }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section id="projects" ref={ref} className="px-4 md:px-6 max-w-7xl mx-auto py-24">
      <animated.div style={fadeIn}>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent-pink font-mono text-xl">03.</span>
          <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="h-px bg-gradient-to-r from-accent-pink/50 to-transparent flex-grow max-w-sm" />
        </div>

        <div className="projects-carousel">
          <Slider {...settings}>
            {projects.map((project, idx) => (
              <div key={idx} className="px-3">
                <div 
                  className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-cyan transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    project.color === 'cyan' ? 'from-accent-cyan to-accent-purple' :
                    project.color === 'purple' ? 'from-accent-purple to-accent-pink' :
                    project.color === 'pink' ? 'from-accent-pink to-accent-orange' :
                    'from-accent-orange to-accent-cyan'
                  }`} />
                  
                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-dark-elevated">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-accent-cyan">Featured Project</span>
                      <div className="flex-grow h-px bg-gradient-to-r from-accent-cyan/20 to-transparent" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-3 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-lg border border-gray-200 dark:border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                      <a 
                        href={project.github} 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-cyan transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
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
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-cyan transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
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
            ))}
          </Slider>
        </div>
      </animated.div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-5xl mx-auto mt-10 mb-10 p-8 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/10 outline-none max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      >
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-accent-cyan font-mono text-sm">Featured Project</span>
                <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white mt-2">{selectedProject.title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedProject.video && (
              <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    src={selectedProject.video}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title="Project Demo"
                  />
                </div>
              </div>
            )}

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                    <span className="text-accent-cyan mr-3 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(tech => (
                  <span key={tech} className="font-mono text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source Code
            </a>
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
      className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 text-accent-cyan rounded-full hover:bg-accent-cyan hover:text-white transition-all"
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
      className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 text-accent-cyan rounded-full hover:bg-accent-cyan hover:text-white transition-all"
      aria-label="Previous project"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
