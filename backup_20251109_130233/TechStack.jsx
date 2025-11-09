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
    <section id="tech" ref={ref} className="min-h-screen px-6 max-w-7xl mx-auto py-24">
      <animated.div style={headerSpring}>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent-purple font-mono text-xl">02.</span>
          <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white">Tech Stack</h2>
          <div className="h-px bg-gradient-to-r from-accent-purple/50 to-transparent flex-grow max-w-sm" />
        </div>
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

      {/* Coursework Card */}
      <animated.div 
        style={useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(30px)',
          delay: 600,
          config: { tension: 200, friction: 30 }
        })}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000" />
        <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent-cyan/10 rounded-lg">
              <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">Relevant Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
              <span 
                key={course} 
                className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-accent-cyan transition-all font-mono text-sm"
              >
                {course}
              </span>
            ))}
          </div>
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
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-accent-cyan/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
        <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {trail.map((style, idx) => (
          <animated.div
            key={skills[idx].name}
            style={style}
            className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-accent-cyan/10 transition-all group/item cursor-pointer border border-transparent hover:border-accent-cyan/20"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <img
                src={skills[idx].logo}
                alt={skills[idx].name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-xs font-mono text-center group-hover/item:text-accent-cyan transition-colors">
              {skills[idx].name}
            </span>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
