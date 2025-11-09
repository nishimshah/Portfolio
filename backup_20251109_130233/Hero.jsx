import { useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I craft digital experiences that matter.';

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
    config: config.slow
  });

  const glowAnimation = useSpring({
    from: { opacity: 0.3 },
    to: { opacity: 1 },
    loop: true,
    config: { duration: 2000 }
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <animated.div 
          style={glowAnimation}
          className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
        />
        <animated.div 
          style={glowAnimation}
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
      </div>

      <animated.div style={fadeIn} className="relative z-10 max-w-4xl">
        {/* Label with glassmorphism */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="text-sm font-mono text-gray-600 dark:text-gray-300">Available for opportunities</span>
        </div>
        
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-display">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Nishi M Shah
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-400">
            {displayedText}<span className="animate-pulse text-accent-cyan">|</span>
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Computer Science student passionate about building innovative web applications with 
          <span className="text-accent-cyan font-semibold"> React</span>, 
          <span className="text-accent-purple font-semibold"> Django</span>, and 
          <span className="text-accent-pink font-semibold"> Machine Learning</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-accent-cyan text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <div className="relative group">
            <button className="px-8 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              Resume
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 dark:bg-dark-elevated backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <a
                href="/ShahNishiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-sm text-gray-900 dark:text-gray-100 hover:bg-accent-cyan/20 transition-colors rounded-t-xl font-mono"
              >
                📄 View Resume
              </a>
              <a
                href="/ShahNishiResume.pdf"
                download="Nishi_Shah_Resume.pdf"
                className="block px-6 py-3 text-sm text-gray-900 dark:text-gray-100 hover:bg-accent-cyan/20 transition-colors rounded-b-xl font-mono"
              >
                ⬇️ Download
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </animated.div>
    </section>
  );
}
