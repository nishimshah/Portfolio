#!/bin/bash

# ========================================
# Remove Emojis & Green Colors
# Pure Monochrome Professional Theme
# ========================================

echo "🔧 Removing emojis and green colors..."

# ========================================
# 1. UPDATE NAVBAR - REMOVE EMOJIS
# ========================================

cat > src/components/Navbar.jsx << 'EOF'
import { useState, useEffect } from 'react';
import LightDarkToggle from './LightDarkToggle.jsx';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tech', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'about', label: 'About', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
    { id: 'tech', label: 'Skills', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )},
    { id: 'projects', label: 'Projects', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'contact', label: 'Contact', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )}
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border flex-col items-center py-8 z-50">
        <a 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="mb-12 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-bold text-xl group-hover:scale-110 transition-transform">
            N
          </div>
        </a>

        <div className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative group flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
                activeSection === item.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-elevated'
              }`}
              title={item.label}
            >
              {item.icon}
              
              <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-white" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <LightDarkToggle />
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded">N</span>MS
          </a>

          <div className="flex items-center gap-4">
            <LightDarkToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-elevated"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 dark:border-dark-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 transition-colors ${
                  activeSection === item.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'hover:bg-gray-50 dark:hover:bg-dark-elevated text-gray-900 dark:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
EOF

# ========================================
# 2. UPDATE ABOUT ME - REMOVE EMOJIS
# ========================================

cat > src/components/AboutMe.jsx << 'EOF'
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
      <div className="w-full px-6 md:px-12 lg:px-24 py-24">
        <animated.div style={fadeIn}>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white">
            About <span className="text-gray-600 dark:text-gray-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-900 dark:bg-white opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-dark-border shadow-2xl">
                <img
                  src={profilePic}
                  alt="Nishi M Shah"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Nishi
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a Computer Science student passionate about creating innovative web applications that solve real-world problems. I specialize in full-stack development with a focus on modern frameworks and AI integration.
              </p>

              {/* Education */}
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-dark-elevated rounded-xl border-l-4 border-gray-900 dark:border-white">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">BTech in Computer Science</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">2023 – 2027</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">LJ Institute of Engineering & Technology</p>
                  <p className="text-gray-900 dark:text-white font-bold mt-2">SPI: 9.28 / 10.0</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl text-center border border-gray-200 dark:border-dark-border">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">8+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl text-center border border-gray-200 dark:border-dark-border">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-dark-elevated rounded-xl text-center border border-gray-200 dark:border-dark-border">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {['English', 'Gujarati', 'Hindi'].map(lang => (
                    <span key={lang} className="px-4 py-2 bg-white dark:bg-dark-elevated rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border">
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
EOF

# ========================================
# 3. UPDATE TECH STACK - REMOVE EMOJIS
# ========================================

cat > src/components/TechStack.jsx << 'EOF'
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
    <section id="tech" ref={ref} className="min-h-screen lg:pl-20 py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <animated.div style={headerSpring}>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white">
            Tech <span className="text-gray-600 dark:text-gray-400">Stack</span>
          </h2>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Coursework */}
        <animated.div 
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
            delay: 600,
          })}
          className="p-8 bg-white dark:bg-dark-surface rounded-2xl border-l-4 border-gray-900 dark:border-white"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
              <span 
                key={course} 
                className="px-4 py-2 bg-gray-50 dark:bg-dark-elevated rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </animated.div>
      </div>
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
    <div className="p-6 bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-dark-border hover:border-gray-900 dark:hover:border-white transition-all">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
        {category}
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {trail.map((style, idx) => (
          <animated.div
            key={skills[idx].name}
            style={style}
            className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-dark-elevated hover:bg-gray-100 dark:hover:bg-dark-border transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src={skills[idx].logo}
                alt={skills[idx].name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-xs text-center font-medium">
              {skills[idx].name}
            </span>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
EOF

# ========================================
# 4. UPDATE CONTACT - REMOVE EMOJIS
# ========================================

cat > src/components/Contact.jsx << 'EOF'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '119d633a-2a47-4c11-a791-919198e8ddc8',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center lg:pl-20 py-24">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <animated.div style={fadeIn} className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Get In <span className="text-gray-600 dark:text-gray-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-dark-surface p-8 rounded-2xl border border-gray-200 dark:border-dark-border">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-elevated border border-gray-200 dark:border-dark-border rounded-xl focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-elevated border border-gray-200 dark:border-dark-border rounded-xl focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="6"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-elevated border border-gray-200 dark:border-dark-border rounded-xl focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {status === 'success' && (
              <div className="bg-gray-100 dark:bg-dark-elevated border border-gray-900 dark:border-white rounded-xl p-4 text-gray-900 dark:text-white text-center">
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-500 rounded-xl p-4 text-red-600 dark:text-red-400 text-center">
                Failed to send message.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <a href="mailto:nishishah0257@gmail.com" className="text-gray-900 dark:text-white hover:underline font-mono">
              nishishah0257@gmail.com
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
EOF

# ========================================
# 5. UPDATE PROJECTS - REMOVE EMOJIS FROM DROPDOWN
# ========================================

cat > src/components/Projects.jsx << 'EOFPROJECTS'
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
EOFPROJECTS

# ========================================
# 6. UPDATE HERO - REMOVE EMOJIS FROM DROPDOWN
# ========================================

cat > src/components/Hero.jsx << 'EOF'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-100 dark:bg-dark-elevated border border-gray-200 dark:border-dark-border">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-900 dark:bg-white"></span>
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Available for opportunities</span>
          </div>

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
EOF

echo ""
echo "✅ All emojis removed"
echo "✅ Green colors removed"
echo "✅ Pure monochrome theme applied"
echo ""
echo "Run: npm run dev"
