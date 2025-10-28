# #!/bin/bash

# # Project root
# mkdir -p my-project/src/components
# mkdir -p my-project/src/assets
# mkdir -p my-project/public

# # Navigate to project folder
# cd my-project || exit

# # Create main entry and style files
# touch src/main.jsx
# touch src/index.css
# touch src/App.jsx

# # Create component files
# touch src/components/Hero.jsx
# touch src/components/AboutMe.jsx
# touch src/components/TechStack.jsx
# touch src/components/Projects.jsx
# touch src/components/Experience.jsx
# touch src/components/Testimonials.jsx
# touch src/components/Contact.jsx
# touch src/components/LightDarkToggle.jsx

# # Create public folder files
# touch public/index.html

# # Create configuration files
# touch vite.config.js
# touch tailwind.config.js
# touch postcss.config.js
# touch package.json

# echo "Basic folder structure and essential files created under my-project/"

#!/bin/bash

# Project root
mkdir -p src/components

# Create Hero.jsx
cat > src/components/Hero.jsx <<EOL
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 p-8 rounded-lg shadow-lg">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-6 italic">Turning ideas into code</p>
        <button className="px-6 py-3 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition">View My Work</button>
      </div>
    </section>
  );
}
EOL

# Create AboutMe.jsx
cat > src/components/AboutMe.jsx <<EOL
export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-3">About Me</h2>
      <p className="mb-4">I am a passionate Full Stack Developer with experience in React, Django, and Node.js.</p>
      <div className="border-l-4 border-purple-400 pl-4">
        <p><strong>2019:</strong> Started learning web development</p>
        <p><strong>2023:</strong> Graduated with Computer Science degree</p>
      </div>
    </section>
  );
}
EOL

# Create TechStack.jsx
cat > src/components/TechStack.jsx <<EOL
export default function TechStack() {
  const techs = ['React', 'Django', 'Node.js', 'Python', 'Tailwind CSS'];
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
      <div className="flex space-x-4">
        {techs.map(tech => (
          <div key={tech} className="px-4 py-2 bg-purple-100 rounded-full shadow">{tech}</div>
        ))}
      </div>
    </section>
  );
}
EOL

# Create Projects.jsx
cat > src/components/Projects.jsx <<EOL
export default function Projects() {
  const projects = [
    {name: 'Portfolio Website', description: 'A personal portfolio built with React and Tailwind.', tech: ['React', 'Tailwind'], github: '#', demo: '#'},
    {name: 'Blog Platform', description: 'Blogging platform with Django backend.', tech: ['Django', 'Python'], github: '#', demo: '#'},
  ];
  return (
    <section className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2">
      {projects.map(({name, description, tech, github, demo}) => (
        <div key={name} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="mb-2">{description}</p>
          <div className="mb-2 space-x-2">
            {tech.map(t => (
              <span key={t} className="inline-block bg-purple-200 px-2 py-1 rounded text-xs">{t}</span>
            ))}
          </div>
          <div className="space-x-4">
            <a href={github} target="_blank" rel="noopener" className="text-purple-600 hover:underline">GitHub</a>
            <a href={demo} target="_blank" rel="noopener" className="text-purple-600 hover:underline">Live Demo</a>
          </div>
        </div>
      ))}
    </section>
  );
}
EOL

# Create Experience.jsx
cat > src/components/Experience.jsx <<EOL
export default function Experience() {
  const experiences = [
    {role: 'Software Engineer', company: 'Tech Corp', period: '2023 - Present', details: ['Developed web apps', 'Collaborated with UI team']},
    {role: 'Intern', company: 'Web Solutions', period: '2022 - 2023', details: ['Maintained backend APIs', 'Performed testing']},
  ];
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Experience & Education</h2>
      <div className="space-y-4">
        {experiences.map(({role, company, period, details}) => (
          <div key={role + company} className="border-l-4 border-purple-400 pl-4">
            <h3 className="text-xl font-bold">{role} - {company}</h3>
            <span className="italic text-sm">{period}</span>
            <ul className="list-disc list-inside mt-1">
              {details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
EOL

# Create Testimonials.jsx
cat > src/components/Testimonials.jsx <<EOL
export default function Testimonials() {
  const testimonials = [
    {name: 'John Doe', quote: 'Great developer, highly recommended!'},
    {name: 'Jane Smith', quote: 'Delivered the project on time and exceeded expectations.'},
  ];
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map(({name, quote}) => (
          <div key={name} className="bg-purple-50 rounded-lg p-4 shadow">
            <p className="italic mb-2">"{quote}"</p>
            <p className="font-bold text-right">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOL

# Create Contact.jsx
cat > src/components/Contact.jsx <<EOL
export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" required />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" required />
        <textarea placeholder="Your Message" rows="4" className="p-2 border rounded" required></textarea>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Send Message</button>
      </form>
      <div className="mt-6 space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-purple-600 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-purple-600 hover:underline">LinkedIn</a>
        <a href="mailto:youremail@example.com" className="text-purple-600 hover:underline">Email</a>
        <a href="/resume.pdf" download className="text-purple-600 hover:underline">Download Résumé</a>
      </div>
    </section>
  );
}
EOL

# Create LightDarkToggle.jsx
cat > src/components/LightDarkToggle.jsx <<EOL
import { useState, useEffect } from 'react';

export default function LightDarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 rounded bg-purple-300 dark:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
EOL

echo "Component files with starter code created inside my-project/src/components/"
