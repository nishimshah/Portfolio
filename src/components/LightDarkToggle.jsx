// // // // // import { useState, useEffect } from 'react';

// // // // // export default function LightDarkToggle() {
// // // // //   const [dark, setDark] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const root = window.document.documentElement;
// // // // //     if (dark) {
// // // // //       root.classList.add('dark');
// // // // //     } else {
// // // // //       root.classList.remove('dark');
// // // // //     }
// // // // //   }, [dark]);

// // // // //   return (
// // // // //     <button
// // // // //       onClick={() => setDark(!dark)}
// // // // //       // className="fixed top-4 right-4 p-2 rounded bg-purple-300 dark:bg-gray-700 transition"
// // // // //       aria-label="Toggle Dark Mode"
// // // // //     >
// // // // //       {dark ? '☀️' : '🌙'}
// // // // //     </button>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from 'react';

// // // // export default function LightDarkToggle() {
// // // //   const [dark, setDark] = useState(false);

// // // //   useEffect(() => {
// // // //     const root = window.document.documentElement;
// // // //     if (dark) {
// // // //       root.classList.add('dark');
// // // //     } else {
// // // //       root.classList.remove('dark');
// // // //     }
// // // //   }, [dark]);

// // // //   return (
// // // //     <button
// // // //       onClick={() => setDark(!dark)}
// // // //       className="ml-2 bg-bgDark border border-accent2 text-accent2 rounded-full p-2 hover:bg-accent2 hover:text-bgDark transition"
// // // //       aria-label="Toggle Dark Mode"
// // // //     >
// // // //       {dark ? '☀️' : '🌙'}
// // // //     </button>
// // // //   );
// // // // }
// // // import { useState, useEffect } from 'react';

// // // export default function LightDarkToggle() {
// // //   const getPref = () => localStorage.getItem('theme') === 'dark' ||
// // //     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

// // //   const [dark, setDark] = useState(getPref());

// // //   useEffect(() => {
// // //     const root = window.document.documentElement;
// // //     if (dark) {
// // //       root.classList.add('dark');
// // //       localStorage.setItem('theme', 'dark');
// // //     } else {
// // //       root.classList.remove('dark');
// // //       localStorage.setItem('theme', 'light');
// // //     }
// // //   }, [dark]);

// // //   return (
// // //     <button
// // //       onClick={() => setDark(!dark)}
// // //       className="bg-bgLight border border-accent2 text-accent2 rounded-full p-2 hover:bg-accent2 hover:text-card transition"
// // //       aria-label="Toggle Dark Mode"
// // //     >
// // //       {dark ? '☀️' : '🌙'}
// // //     </button>
// // //   );
// // // }
// // import { useState, useEffect } from 'react';

// // export default function LightDarkToggle() {
// //   const [dark, setDark] = useState(() => {
// //     const saved = localStorage.getItem('theme');
// //     return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
// //   });

// //   useEffect(() => {
// //     if (dark) {
// //       document.documentElement.classList.add('dark');
// //       localStorage.setItem('theme', 'dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //       localStorage.setItem('theme', 'light');
// //     }
// //   }, [dark]);

// //   return (
// //     <button
// //       onClick={() => setDark(!dark)}
// //       className="p-2 rounded hover:bg-dark-elevated transition-colors"
// //       aria-label="Toggle theme"
// //     >
// //       {dark ? '☀️' : '🌙'}
// //     </button>
// //   );
// // }
// import { useState, useEffect } from 'react';

// export default function LightDarkToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage first, then system preference
//     const saved = localStorage.getItem('theme');
//     if (saved) return saved === 'dark';
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (isDark) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="relative w-14 h-7 bg-dark-elevated dark:bg-accent-primary/20 rounded-full border border-dark-elevated dark:border-accent-primary/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
//       aria-label="Toggle theme"
//     >
//       <div
//         className={`absolute top-0.5 left-0.5 w-6 h-6 bg-accent-primary rounded-full transition-transform duration-300 flex items-center justify-center ${
//           isDark ? 'translate-x-7' : 'translate-x-0'
//         }`}
//       >
//         {isDark ? (
//           <svg className="w-4 h-4 text-dark-bg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//           </svg>
//         ) : (
//           <svg className="w-4 h-4 text-dark-bg" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//           </svg>
//         )}
//       </div>
//     </button>
//   );
// }
import { useState, useEffect } from 'react';

export default function LightDarkToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, default to light if not set
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-14 h-7 bg-gray-200 dark:bg-accent-primary/20 rounded-full border border-gray-300 dark:border-accent-primary/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-accent-primary dark:bg-accent-primaryDark rounded-full transition-transform duration-300 flex items-center justify-center shadow-md ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  );
}
