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

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-6 max-w-7xl mx-auto py-24">
      <animated.div style={fadeIn} className="w-full">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent-cyan font-mono text-xl">01.</span>
          <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white">About Me</h2>
          <div className="h-px bg-gradient-to-r from-accent-cyan/50 to-transparent flex-grow max-w-sm" />
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Profile Card - Glassmorphism */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-white/10">
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={profilePic}
                    alt="Nishi M Shah"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/nishimshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-accent-cyan hover:text-white transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nishi-shah-a58a47344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-accent-cyan hover:text-white transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:nishishah0257@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-accent-cyan hover:text-white transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bio & Education - Takes more space */}
          <div className="lg:col-span-8 space-y-6">
            {/* Introduction Card */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-accent-cyan/50 transition-all">
              <h3 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-4">
                Hi, I'm Nishi! 👋
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A computer science student passionate about creating innovative web applications that solve real-world problems. 
                I specialize in full-stack development with a focus on modern frameworks and AI integration.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Django', 'Machine Learning', 'PostgreSQL', 'REST APIs'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-accent-cyan/10 text-accent-cyan rounded-lg text-sm font-mono border border-accent-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Current Education */}
              <div className="bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 rounded-2xl p-6 border border-accent-cyan/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-accent-cyan/20 rounded-lg">
                    <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm font-mono text-accent-cyan">2023 – 2027</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">BTech in CSE</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">LJ Institute of Engineering & Technology</p>
                <p className="text-sm font-mono text-accent-cyan mt-2">SPI: 9.28 / 10.0</p>
              </div>

              {/* Stats Card */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <h4 className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Projects</span>
                    <span className="text-2xl font-bold text-accent-cyan">8+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Languages</span>
                    <span className="text-2xl font-bold text-accent-purple">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Tech Stack</span>
                    <span className="text-2xl font-bold text-accent-pink">20+</span>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-white/10 md:col-span-2">
                <h4 className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4">🌍 Languages</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-700 dark:text-gray-300">English</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-700 dark:text-gray-300">Gujarati</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-700 dark:text-gray-300">Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
