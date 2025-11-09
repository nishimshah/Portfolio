import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/nishi12.jpg';

export default function AboutMe() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 200, friction: 30 }
  });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center lg:pl-20 bg-gray-50 dark:bg-dark-surface">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20">
        <animated.div style={fadeIn}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            About <span className="text-gray-600 dark:text-gray-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Image - Smaller column */}
            <div className="lg:col-span-2">
              <div className="relative group max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gray-900 dark:bg-white opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-dark-border shadow-lg">
                  <img
                    src={profilePic}
                    alt="Nishi M Shah"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href="https://github.com/nishimshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-dark-elevated rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all border border-gray-200 dark:border-dark-border"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nishi-shah-a58a47344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-dark-elevated rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all border border-gray-200 dark:border-dark-border"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:nishishah0257@gmail.com"
                    className="p-2.5 bg-white dark:bg-dark-elevated rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all border border-gray-200 dark:border-dark-border"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Content - Larger column */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Hi, I'm Nishi
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  A computer science student passionate about creating things that live on the internet.
                </p>
              </div>

              {/* Education Cards - Compact */}
              <div className="space-y-3">
                {/* BTech */}
                <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl border-l-4 border-gray-900 dark:border-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">BTech in Computer Science and Engineering</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">LJ Institute of Engineering and Technology</p>
                      <p className="text-gray-900 dark:text-white font-semibold text-sm mt-2">SPI: 9.28 / 10.0 <span className="text-xs font-normal text-gray-600 dark:text-gray-400">(up to 4th sem)</span></p>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-mono whitespace-nowrap">2023 – 2027</span>
                  </div>
                </div>

                {/* Class 12 & 10 - Side by side on larger screens */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl border border-gray-200 dark:border-dark-border hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">Class 12 - GSEB</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Little Flower School</p>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-mono whitespace-nowrap">2023</span>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-dark-surface rounded text-xs font-medium text-gray-900 dark:text-white">Grade B2</span>
                  </div>

                  <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl border border-gray-200 dark:border-dark-border hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">Class 10 - GSEB</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Little Flower School</p>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-mono whitespace-nowrap">2021</span>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-dark-surface rounded text-xs font-medium text-gray-900 dark:text-white">Grade B2</span>
                  </div>
                </div>
              </div>

              {/* Languages Known - Compact */}
              <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl border border-gray-200 dark:border-dark-border">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Languages Known
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Gujarati', 'Hindi'].map(lang => (
                    <span key={lang} className="px-3 py-1.5 bg-gray-50 dark:bg-dark-surface rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
