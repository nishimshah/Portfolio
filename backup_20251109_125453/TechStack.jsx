import { useSpring, useTrail, animated } from '@react-spring/web';
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
    <section id="tech" ref={ref} className="min-h-screen px-6 max-w-7xl mx-auto py-24 bg-light-bg dark:bg-dark-bg">
      <animated.div style={headerSpring}>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-primary dark:bg-accent-primaryDark rounded-full animate-pulse"></span>
            <h2 className="text-3xl font-bold text-textLight-heading dark:text-text-heading">
              Technologies
            </h2>
          </div>
          <div className="h-px bg-border-light dark:bg-border-dark flex-grow max-w-md"></div>
        </div>
        <p className="text-textLight-secondary dark:text-text-secondary mb-16">
          Tools and technologies I use to bring ideas to life
        </p>
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

      <animated.div 
        style={useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(30px)',
          delay: 600,
          config: { tension: 200, friction: 30 }
        })}
        className="bg-gradient-to-br from-accent-sage/10 to-accent-sand/20 dark:from-accent-sage/5 dark:to-accent-primary/5 border border-accent-sage/30 dark:border-accent-sage/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">📚</span>
          <h3 className="text-xl font-bold text-accent-sage dark:text-accent-sageDark">Relevant Coursework</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Data Structures & Algorithms', 'Database Management System', 'Advanced Calculus'].map(course => (
            <span 
              key={course} 
              className="px-4 py-2 bg-light-elevated dark:bg-dark-bg/60 text-textLight-secondary dark:text-text-secondary rounded-lg text-sm border border-border-light dark:border-border-dark hover:border-accent-sage dark:hover:border-accent-sageDark hover:text-accent-sage dark:hover:text-accent-sageDark transition-all"
            >
              {course}
            </span>
          ))}
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
    <div className="bg-gradient-to-br from-light-elevated to-accent-sand/10 dark:from-dark-card dark:to-accent-primary/5 border border-border-light dark:border-border-dark rounded-2xl p-6 hover:border-accent-sage dark:hover:border-accent-sage/30 transition-all duration-300 group shadow-sm hover:shadow-lg">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
        <div className="w-2 h-2 bg-accent-primary dark:bg-accent-primaryDark rounded-full group-hover:animate-pulse"></div>
        <h3 className="text-lg font-bold text-textLight-heading dark:text-text-heading">
          {category}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {trail.map((style, idx) => (
          <animated.div
            key={skills[idx].name}
            style={style}
            className="flex flex-col items-center p-3 rounded-xl bg-light-bg dark:bg-dark-bg/40 hover:bg-accent-sand/20 dark:hover:bg-accent-sage/10 transition-all group/item cursor-pointer"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <img
                src={skills[idx].logo}
                alt={skills[idx].name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-textLight-secondary dark:text-text-secondary text-xs text-center group-hover/item:text-accent-primary dark:group-hover/item:text-accent-primaryDark transition-colors font-medium">
              {skills[idx].name}
            </span>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
