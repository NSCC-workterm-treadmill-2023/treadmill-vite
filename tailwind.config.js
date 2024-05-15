/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
      customscreen: '1200px',
      custom: '1080px', // Custom breakpoint added here
    },
    extend: {
      backgroundColor: {
        'side-bar-bg': 'rgba(35, 37, 48, 0.66)',
        'side-bar-rectangle': 'rgba(36, 42, 46, 0.43)',
        colors: {
          "dark-purple": '#081A51',
          'light-white': 'rgba(255,255,255,0.18'
        }
      },
      borderColor: {
        'side-bar-rectangle-border': 'rgba(0, 0, 0, 0.22)',
      },
      borderRadius: {
        rectangle: '8px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}