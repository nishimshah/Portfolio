/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm Minimalist Light Theme
        light: {
          bg: '#FAF8F5',           // Warm cream
          elevated: '#FFFFFF',      // Pure white
          card: '#FFFFFF',          // White cards
        },
        // Warm Minimalist Dark Theme
        dark: {
          bg: '#1C1917',           // Warm charcoal
          elevated: '#292524',      // Lighter charcoal
          card: '#292524',          // Card background
        },
        // Text Colors
        textLight: {
          heading: '#1C1917',       // Dark charcoal
          primary: '#292524',       // Primary text
          secondary: '#57534E',     // Secondary text
        },
        text: {
          heading: '#FAF8F5',       // Light cream
          primary: '#E7E5E4',       // Primary text dark
          secondary: '#A8A29E',     // Secondary text dark
        },
        // Accent Colors - Warm Palette
        accent: {
          primary: '#D97757',       // Terracotta
          primaryDark: '#E8956F',   // Light terracotta
          sage: '#81B29A',          // Sage green
          sageDark: '#9AC3AD',      // Light sage
          sand: '#E8DCC8',          // Warm sand
          clay: '#C1876B',          // Clay brown
        },
        // Border Colors
        border: {
          light: '#E7E5E4',
          dark: '#44403C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
