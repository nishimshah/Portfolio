export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-light-elevated dark:bg-dark-elevated py-8 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-textLight-secondary dark:text-text-secondary text-sm">
          © 2025 Nishi M Shah. Designed & Built with 
          <span className="text-accent-primary dark:text-accent-primaryDark"> ❤️ </span>
          using React & Tailwind CSS
        </p>
        <div className="mt-4 flex items-center justify-center gap-6">
          <a
            href="https://github.com/nishimshah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textLight-secondary dark:text-text-secondary hover:text-accent-primary dark:hover:text-accent-primaryDark transition-colors"
          >
            GitHub
          </a>
          <span className="text-border-light dark:text-border-dark">•</span>
          <a
            href="https://www.linkedin.com/in/nishi-shah-a58a47344"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textLight-secondary dark:text-text-secondary hover:text-accent-sage dark:hover:text-accent-sageDark transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border-light dark:text-border-dark">•</span>
          <a
            href="mailto:nishishah0257@gmail.com"
            className="text-textLight-secondary dark:text-text-secondary hover:text-accent-clay dark:hover:text-accent-sand transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
