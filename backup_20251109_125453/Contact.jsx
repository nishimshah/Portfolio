import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 200, friction: 30 }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '119d633a-2a47-4c11-a791-919198e8ddc8',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`
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
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-24 bg-light-bg dark:bg-dark-bg">
      <animated.div style={fadeIn} className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-accent-clay dark:bg-accent-sand rounded-full animate-pulse"></span>
            <h2 className="text-4xl md:text-5xl font-bold text-textLight-heading dark:text-text-heading">
              Let's Connect
            </h2>
          </div>

          <p className="text-textLight-secondary dark:text-text-secondary text-lg leading-relaxed max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-light-elevated to-accent-sand/10 dark:from-dark-card dark:to-accent-primary/5 p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-xl">
          <div>
            <label htmlFor="name" className="block text-textLight-primary dark:text-text-primary font-medium text-sm mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-border-light dark:border-border-dark rounded-xl text-textLight-primary dark:text-text-primary focus:border-accent-sage dark:focus:border-accent-sageDark focus:outline-none focus:ring-2 focus:ring-accent-sage/20 dark:focus:ring-accent-sage/10 transition-all disabled:opacity-50"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-textLight-primary dark:text-text-primary font-medium text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-border-light dark:border-border-dark rounded-xl text-textLight-primary dark:text-text-primary focus:border-accent-sage dark:focus:border-accent-sageDark focus:outline-none focus:ring-2 focus:ring-accent-sage/20 dark:focus:ring-accent-sage/10 transition-all disabled:opacity-50"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-textLight-primary dark:text-text-primary font-medium text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              rows="6"
              className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-border-light dark:border-border-dark rounded-xl text-textLight-primary dark:text-text-primary focus:border-accent-sage dark:focus:border-accent-sageDark focus:outline-none focus:ring-2 focus:ring-accent-sage/20 dark:focus:ring-accent-sage/10 transition-all resize-none disabled:opacity-50"
              placeholder="Hi Nishi, I'd love to connect about..."
              required
            />
          </div>

          {status === 'success' && (
            <div className="bg-accent-sage/10 dark:bg-accent-sage/5 border border-accent-sage dark:border-accent-sage/30 rounded-xl p-4 text-accent-sage dark:text-accent-sageDark text-center text-sm animate-fade-in flex items-center justify-center gap-2">
              <span className="text-xl">✓</span>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 text-red-500 text-center text-sm animate-fade-in flex items-center justify-center gap-2">
              <span className="text-xl">✗</span>
              Failed to send message. Please try emailing me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-accent-primary to-accent-clay dark:from-accent-sage dark:to-accent-sageDark text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 dark:hover:shadow-accent-sage/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-textLight-secondary dark:text-text-secondary text-sm mb-4">Or reach me directly at:</p>
          <a
            href="mailto:nishishah0257@gmail.com"
            className="text-accent-primary dark:text-accent-primaryDark hover:underline font-medium"
          >
            nishishah0257@gmail.com
          </a>
        </div>
      </animated.div>
    </section>
  );
}
