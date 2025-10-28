// // // // // // // // export default function Contact() {
// // // // // // // //   return (
// // // // // // // //     <section className="max-w-4xl mx-auto p-6">
// // // // // // // //       <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
// // // // // // // //       <form className="flex flex-col space-y-4 max-w-md">
// // // // // // // //         <input type="text" placeholder="Your Name" className="p-2 border rounded" required />
// // // // // // // //         <input type="email" placeholder="Your Email" className="p-2 border rounded" required />
// // // // // // // //         <textarea placeholder="Your Message" rows="4" className="p-2 border rounded" required></textarea>
// // // // // // // //         <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Send Message</button>
// // // // // // // //       </form>
// // // // // // // //       <div className="mt-6 space-x-4">
// // // // // // // //         <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-purple-600 hover:underline">GitHub</a>
// // // // // // // //         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-purple-600 hover:underline">LinkedIn</a>
// // // // // // // //         <a href="mailto:youremail@example.com" className="text-purple-600 hover:underline">Email</a>
// // // // // // // //         <a href="/resume.pdf" download className="text-purple-600 hover:underline">Download Résumé</a>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // export default function Contact() {
// // // // // // //   return (
// // // // // // //     <section id="contact" className="max-w-2xl mx-auto my-24 bg-bgLight shadow-lg rounded-2xl border border-border p-10">
// // // // // // //       <h2 className="font-heading text-3xl text-accent font-bold mb-6">Contact Me</h2>
// // // // // // //       <form className="flex flex-col gap-4 max-w-xl font-body">
// // // // // // //         <input type="text" placeholder="Your Name" className="p-3 bg-bgDark border border-border rounded-md focus:border-accent outline-none text-textLight" required />
// // // // // // //         <input type="email" placeholder="Your Email" className="p-3 bg-bgDark border border-border rounded-md focus:border-accent outline-none text-textLight" required />
// // // // // // //         <textarea placeholder="Your Message" rows="4" className="p-3 bg-bgDark border border-border rounded-md focus:border-accent outline-none text-textLight" required></textarea>
// // // // // // //         <button type="submit" className="bg-gradient-to-r from-accent to-accent2 hover:from-accent2 hover:to-accent text-white font-heading px-6 py-2 rounded-full shadow transition text-lg">
// // // // // // //           Send Message
// // // // // // //         </button>
// // // // // // //       </form>
// // // // // // //       <div className="mt-8 flex flex-wrap gap-6">
// // // // // // //         <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-accent2 hover:underline">GitHub</a>
// // // // // // //         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-accent2 hover:underline">LinkedIn</a>
// // // // // // //         <a href="mailto:youremail@example.com" className="text-accent2 hover:underline">Email</a>
// // // // // // //         <a href="/resume.pdf" download className="text-accent2 hover:underline">Download Résumé</a>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useSpring, animated } from '@react-spring/web';

// // // // // // export default function Contact() {
// // // // // //   const fade = useSpring({ from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0 }, delay: 800 });

// // // // // //   return (
// // // // // //     <animated.section style={fade} id="contact" className="max-w-2xl mx-auto my-24 bg-card shadow-glass rounded-3xl border border-border p-10">
// // // // // //       <h2 className="font-heading text-3xl text-accent font-bold mb-6">Contact Me</h2>
// // // // // //       <form className="flex flex-col gap-4 max-w-xl font-body">
// // // // // //         <input type="text" placeholder="Your Name" className="p-3 bg-bgLight border border-border rounded-md focus:border-accent outline-none text-textMain" required />
// // // // // //         <input type="email" placeholder="Your Email" className="p-3 bg-bgLight border border-border rounded-md focus:border-accent outline-none text-textMain" required />
// // // // // //         <textarea placeholder="Your Message" rows="4" className="p-3 bg-bgLight border border-border rounded-md focus:border-accent outline-none text-textMain" required></textarea>
// // // // // //         <button type="submit" className="bg-gradient-to-r from-accent2 via-accent3 to-accent hover:from-accent hover:to-accent2 text-white font-heading px-6 py-2 rounded-full shadow transition-all text-lg">
// // // // // //           Send Message
// // // // // //         </button>
// // // // // //       </form>
// // // // // //       <div className="mt-8 flex flex-wrap gap-7">
// // // // // //         <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-accent2 hover:underline">GitHub</a>
// // // // // //         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-accent2 hover:underline">LinkedIn</a>
// // // // // //         <a href="mailto:youremail@example.com" className="text-accent2 hover:underline">Email</a>
// // // // // //         <a href="/resume.pdf" download className="text-accent2 hover:underline">Download Résumé</a>
// // // // // //       </div>
// // // // // //     </animated.section>
// // // // // //   );
// // // // // // }
// // // // // export default function Contact() {
// // // // //   return (
// // // // //     <section id="contact" className="max-w-5xl mx-auto my-16 bg-card p-10 rounded-3xl border border-borderNeon shadow-neon">
// // // // //       <h2 className="font-heading text-3xl text-neonGreen mb-6">Get in Touch</h2>
// // // // //       <form className="flex flex-col gap-6 font-body">
// // // // //         <input type="text" placeholder="Your Name" className="p-4 rounded-md bg-bgLight border border-borderNeon text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonGreen" required />
// // // // //         <input type="email" placeholder="Your Email" className="p-4 rounded-md bg-bgLight border border-borderNeon text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonGreen" required />
// // // // //         <textarea placeholder="Your Message" rows={5} className="p-4 rounded-md bg-bgLight border border-borderNeon text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonGreen" required />
// // // // //         <button className="bg-neonGreen text-bgDark font-heading px-6 py-3 rounded-full hover:bg-neonBlue transition">Send Message</button>
// // // // //       </form>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // export default function Contact() {
// // // //   return (
// // // //     <section id="contact" className="max-w-4xl mx-auto my-20 bg-card rounded-3xl border border-border p-10 shadow-glass">
// // // //       <h2 className="text-3xl font-heading font-bold mb-6 text-neonGreen">Get in Touch</h2>
// // // //       <form className="flex flex-col gap-6 font-body mb-8">
// // // //         <input type="text" placeholder="Your Name" className="p-4 rounded-md bg-bgLight border border-border focus:outline-none focus:ring-2 focus:ring-neonGreen" required />
// // // //         <input type="email" placeholder="Your Email" className="p-4 rounded-md bg-bgLight border border-border focus:outline-none focus:ring-2 focus:ring-neonGreen" required />
// // // //         <textarea rows={4} placeholder="Your Message" className="p-4 rounded-md bg-bgLight border border-border focus:outline-none focus:ring-2 focus:ring-neonGreen" required></textarea>
// // // //         <button className="px-8 py-3 bg-neonGreen text-bgDark rounded-full hover:bg-green-500 transition font-semibold">Send</button>
// // // //       </form>
// // // //       <div className="flex justify-center space-x-8 text-neonGreen font-code text-sm mt-4">
// // // //         <a href="#" className="hover:underline">GitHub</a>
// // // //         <a href="#" className="hover:underline">LinkedIn</a>
// // // //         <a href="mailto:youremail" className="hover:underline">Email</a>
// // // //         <a href="/resume.pdf" className="hover:underline">Resume</a>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }
// // // export default function Contact() {
// // //   return (
// // //     <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
// // //       <div className="max-w-2xl text-center">
// // //         <h2 className="text-text-heading mb-4">
// // //           <span className="text-accent-primary font-mono text-base block mb-4">04. What's Next?</span>
// // //           <span className="text-5xl font-bold">Get In Touch</span>
// // //         </h2>
        
// // //         <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-lg mx-auto">
// // //           I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
// // //           I'll try my best to get back to you!
// // //         </p>

// // //         <a
// // //           href="mailto:nishi@example.com"
// // //           className="inline-block border-2 border-accent-primary text-accent-primary px-8 py-4 rounded hover:bg-accent-primary/10 transition-all font-mono"
// // //         >
// // //           Say Hello
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { useState } from 'react';
// // import emailjs from '@emailjs/browser';

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });
// //   const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setStatus('sending');
// //     setErrorMessage('');

// //     // Validation
// //     if (!formData.name || !formData.email || !formData.message) {
// //       setStatus('error');
// //       setErrorMessage('Please fill in all fields');
// //       return;
// //     }

// //     try {
// //       // EmailJS configuration
// //       const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
// //       const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
// //       const publicKey = '119d633a-2a47-4c11-a791-919198e8ddc8'; // Replace with your EmailJS public key

// //       const templateParams = {
// //         from_name: formData.name,
// //         from_email: formData.email,
// //         message: formData.message,
// //         to_name: 'Nishi M Shah', // Your name
// //       };

// //       await emailjs.send(serviceId, templateId, templateParams, publicKey);

// //       setStatus('success');
// //       setFormData({ name: '', email: '', message: '' });

// //       // Reset success message after 5 seconds
// //       setTimeout(() => {
// //         setStatus('');
// //       }, 5000);

// //     } catch (error) {
// //       console.error('Email send error:', error);
// //       setStatus('error');
// //       setErrorMessage('Failed to send message. Please try again or email me directly.');
// //     }
// //   };

// //   return (
// //     <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
// //       <div className="max-w-2xl w-full">
// //         <div className="text-center mb-12">
// //           <h2 className="text-text-heading mb-4">
// //             <span className="text-accent-primary font-mono text-base block mb-4">04. What's Next?</span>
// //             <span className="text-5xl font-bold">Get In Touch</span>
// //           </h2>
          
// //           <p className="text-text-secondary text-lg leading-relaxed max-w-lg mx-auto">
// //             I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
// //             I'll try my best to get back to you!
// //           </p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-lg border border-dark-elevated">
// //           {/* Name Input */}
// //           <div>
// //             <label htmlFor="name" className="block text-text-primary font-mono text-sm mb-2">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               disabled={status === 'sending'}
// //               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
// //               placeholder="Your Name"
// //               required
// //             />
// //           </div>

// //           {/* Email Input */}
// //           <div>
// //             <label htmlFor="email" className="block text-text-primary font-mono text-sm mb-2">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               disabled={status === 'sending'}
// //               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
// //               placeholder="your.email@example.com"
// //               required
// //             />
// //           </div>

// //           {/* Message Input */}
// //           <div>
// //             <label htmlFor="message" className="block text-text-primary font-mono text-sm mb-2">
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               disabled={status === 'sending'}
// //               rows="6"
// //               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
// //               placeholder="Hi Nishi, I'd love to connect..."
// //               required
// //             />
// //           </div>

// //           {/* Status Messages */}
// //           {status === 'success' && (
// //             <div className="bg-accent-primary/10 border border-accent-primary rounded p-4 text-accent-primary text-center font-mono text-sm">
// //               ✓ Message sent successfully! I'll get back to you soon.
// //             </div>
// //           )}

// //           {status === 'error' && (
// //             <div className="bg-red-500/10 border border-red-500 rounded p-4 text-red-400 text-center font-mono text-sm">
// //               ✗ {errorMessage}
// //             </div>
// //           )}

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             disabled={status === 'sending'}
// //             className="w-full border-2 border-accent-primary text-accent-primary px-8 py-4 rounded hover:bg-accent-primary/10 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// //           >
// //             {status === 'sending' ? (
// //               <>
// //                 <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                 </svg>
// //                 Sending...
// //               </>
// //             ) : (
// //               <>
// //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                 </svg>
// //                 Send Message
// //               </>
// //             )}
// //           </button>
// //         </form>

// //         {/* Alternative Contact Methods */}
// //         <div className="mt-12 text-center">
// //           <p className="text-text-secondary font-mono text-sm mb-4">Or reach me directly at:</p>
// //           <a
// //             href="mailto:nishishah0257@gmail.com"
// //             className="text-accent-primary hover:underline font-mono"
// //           >
// //             nishishah0257@gmail.com
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: '119d633a-2a47-4c11-a791-919198e8ddc8', // Replace with your key from web3forms.com
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//           subject: `New Contact Form Submission from ${formData.name}`
//         })
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus('success');
//         setFormData({ name: '', email: '', message: '' });
//         setTimeout(() => setStatus(''), 5000);
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('error');
//     }
//   };

//   return (
//     <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
//       <div className="max-w-2xl w-full">
//         <div className="text-center mb-12">
//           <h2 className="text-text-heading mb-4">
//             <span className="text-accent-primary font-mono text-base block mb-4">04. What's Next?</span>
//             <span className="text-5xl font-bold">Get In Touch</span>
//           </h2>
          
//           <p className="text-text-secondary text-lg leading-relaxed max-w-lg mx-auto">
//             I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
//             I'll try my best to get back to you!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-lg border border-dark-elevated">
//           <div>
//             <label htmlFor="name" className="block text-text-primary font-mono text-sm mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               disabled={status === 'sending'}
//               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
//               placeholder="Your Name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-text-primary font-mono text-sm mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               disabled={status === 'sending'}
//               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
//               placeholder="xyz@gmail.com"
//               required 
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-text-primary font-mono text-sm mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               disabled={status === 'sending'}
//               rows="6"
//               className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
//               placeholder="Hi Nishi, I'd love to connect..."
//               required
//             />
//           </div>

//           {status === 'success' && (
//             <div className="bg-accent-primary/10 border border-accent-primary rounded p-4 text-accent-primary text-center font-mono text-sm animate-fade-in">
//               ✓ Message sent successfully! I'll get back to you soon.
//             </div>
//           )}

//           {status === 'error' && (
//             <div className="bg-red-500/10 border border-red-500 rounded p-4 text-red-400 text-center font-mono text-sm animate-fade-in">
//               ✗ Failed to send message. Please try emailing me directly.
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={status === 'sending'}
//             className="w-full border-2 border-accent-primary text-accent-primary px-8 py-4 rounded hover:bg-accent-primary/10 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//           >
//             {status === 'sending' ? (
//               <>
//                 <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Sending...
//               </>
//             ) : (
//               <>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Send Message
//               </>
//             )}
//           </button>
//         </form>

//         <div className="mt-12 text-center">
//           <p className="text-text-secondary font-mono text-sm mb-4">Or reach me directly at:</p>
//           <a
//             href="mailto:nishishah0257@gmail.com"
//             className="text-accent-primary hover:underline font-mono"
//           >
//             nishishah0257@gmail.com
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
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
          access_key: '119d633a-2a47-4c11-a791-919198e8ddc8', // Replace with your key from web3forms.com
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
          <h2 className="text-textLight-heading dark:text-text-heading mb-4">
            <span className="text-accent-primary dark:text-accent-primaryDark font-mono text-base block mb-4">04. What's Next?</span>
            <span className="text-5xl font-bold">Get In Touch</span>
          </h2>
          
          <p className="text-textLight-secondary dark:text-text-secondary text-lg leading-relaxed max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-light-card dark:bg-dark-card p-8 rounded-lg border border-border-light dark:border-border-dark shadow-lg">
          <div>
            <label htmlFor="name" className="block text-textLight-primary dark:text-text-primary font-mono text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-light-elevated dark:bg-dark-bg border border-border-light dark:border-border-dark rounded text-textLight-primary dark:text-text-primary focus:border-accent-primary dark:focus:border-accent-primaryDark focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-textLight-primary dark:text-text-primary font-mono text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-light-elevated dark:bg-dark-bg border border-border-light dark:border-border-dark rounded text-textLight-primary dark:text-text-primary focus:border-accent-primary dark:focus:border-accent-primaryDark focus:outline-none transition-colors disabled:opacity-50"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-textLight-primary dark:text-text-primary font-mono text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              rows="6"
              className="w-full px-4 py-3 bg-light-elevated dark:bg-dark-bg border border-border-light dark:border-border-dark rounded text-textLight-primary dark:text-text-primary focus:border-accent-primary dark:focus:border-accent-primaryDark focus:outline-none transition-colors resize-none disabled:opacity-50"
              placeholder="Hi Nishi, I'd love to connect..."
              required
            />
          </div>

          {status === 'success' && (
            <div className="bg-accent-primary/10 dark:bg-accent-primaryDark/10 border border-accent-primary dark:border-accent-primaryDark rounded p-4 text-accent-primary dark:text-accent-primaryDark text-center font-mono text-sm animate-fade-in">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500 rounded p-4 text-red-500 text-center font-mono text-sm animate-fade-in">
              ✗ Failed to send message. Please try emailing me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full border-2 border-accent-primary dark:border-accent-primaryDark text-accent-primary dark:text-accent-primaryDark px-8 py-4 rounded hover:bg-accent-primary/10 dark:hover:bg-accent-primaryDark/10 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          <p className="text-textLight-secondary dark:text-text-secondary font-mono text-sm mb-4">Or reach me directly at:</p>
          <a
            href="mailto:nishishah0257@gmail.com"
            className="text-accent-primary dark:text-accent-primaryDark hover:underline font-mono"
          >
            nishishah0257@gmail.com
          </a>
        </div>
      </animated.div>
    </section>
  );
}
