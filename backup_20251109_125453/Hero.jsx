import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I craft beautiful digital experiences.';

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
    <section id="hero" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto bg-light-bg dark:bg-dark-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-sage/10 dark:bg-accent-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-primary/10 dark:bg-accent-primary/5 rounded-full blur-3xl"></div>

      <animated.div style={fadeIn} className="max-w-3xl relative z-10">
        <div className="text-accent-primary dark:text-accent-primaryDark font-mono mb-6 text-base md:text-lg font-medium">
          Hello there! 👋
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-textLight-heading dark:text-text-heading mb-4 tracking-tight">
          Nishi M Shah
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-textLight-secondary dark:text-text-secondary mb-8">
          {displayedText}<span className="animate-pulse text-accent-sage">|</span>
        </h2>

        <p className="text-textLight-secondary dark:text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          A passionate <span className="text-accent-primary dark:text-accent-primaryDark font-medium">Computer Science student</span> creating 
          thoughtful and impactful web experiences with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-accent-primary dark:bg-accent-primaryDark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-primary/30 dark:hover:shadow-accent-primaryDark/30 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-clay dark:from-accent-primaryDark dark:to-accent-sage opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* Resume Dropdown */}
          <div className="relative group">
            <button className="px-8 py-4 border-2 border-accent-sage dark:border-accent-sageDark text-accent-sage dark:text-accent-sageDark rounded-lg font-medium hover:bg-accent-sage/10 dark:hover:bg-accent-sage/5 transition-all flex items-center gap-2">
              Resume
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-light-card dark:bg-dark-card border border-border-light dark:border-border-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <a
                href="/ShahNishiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-bg dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-t-lg"
              >
                📄 View Resume
              </a>
              <a
                href="/ShahNishiResume.pdf"
                download="Nishi_Shah_Resume.pdf"
                className="block px-6 py-3 text-sm text-textLight-secondary dark:text-text-secondary hover:bg-light-bg dark:hover:bg-dark-elevated hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors rounded-b-lg"
              >
                ⬇️ Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-accent-sage dark:text-accent-sageDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </animated.div>
    </section>
  );
}
