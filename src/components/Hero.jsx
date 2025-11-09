import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full-Stack Developer & ML Enthusiast';

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
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    delay: 300,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center lg:pl-20">
      <div className="w-full px-6 md:px-12 lg:px-24 py-24">
        <animated.div style={fadeIn} className="max-w-4xl">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-100 dark:bg-dark-elevated border border-gray-200 dark:border-dark-border">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-900 dark:bg-white"></span>
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Available for opportunities</span>
          </div> */}

          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900 dark:text-white">
            Nishi M Shah
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-400 mb-8 min-h-[3rem]">
            {displayedText}<span className="animate-pulse text-gray-900 dark:text-white">|</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
            Computer Science student building innovative web applications with React, Django, and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <div className="relative group">
              <button className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all flex items-center gap-2">
                Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a
                  href="/ShahNishiResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-dark-surface rounded-t-xl transition-colors"
                >
                  View Resume
                </a>
                <a
                  href="/ShahNishiResume.pdf"
                  download="Nishi_Shah_Resume.pdf"
                  className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-dark-surface rounded-b-xl transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <a href="https://github.com/nishimshah" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-elevated transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nishi-shah-a58a47344" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-elevated transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:nishishah0257@gmail.com" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-elevated transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
