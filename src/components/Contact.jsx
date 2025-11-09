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
