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
    config: { tension: 200, friction: 30 }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '119d633a-2a47-4c11-a791-919198e8ddc8',
          ...formData,
          subject: `Portfolio Contact from ${formData.name}`
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
    <section id="contact" ref={ref} className="min-h-screen flex items-center px-6 py-24">
      <animated.div style={fadeIn} className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-accent-orange font-mono text-xl block mb-4">04. What's Next?</span>
          <h2 className="text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000" />
          <form onSubmit={handleSubmit} className="relative space-y-6 bg-white dark:bg-dark-card p-8 rounded-2xl border border-gray-200 dark:border-white/10">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:border-accent-cyan focus:outline-none transition-colors"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:border-accent-cyan focus:outline-none transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                rows="6"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                placeholder="Hi Nishi, I'd love to connect..."
                required
              />
            </div>

            {status === 'success' && (
              <div className="bg-accent-cyan/10 border border-accent-cyan rounded-xl p-4 text-accent-cyan text-center font-mono text-sm">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 text-red-500 text-center font-mono text-sm">
                ✗ Failed to send. Please email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-accent-cyan text-white rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-4">Or reach me directly:</p>
          <a
            href="mailto:nishishah0257@gmail.com"
            className="text-accent-cyan hover:underline font-mono text-lg"
          >
            nishishah0257@gmail.com
          </a>
        </div>
      </animated.div>
    </section>
  );
}
