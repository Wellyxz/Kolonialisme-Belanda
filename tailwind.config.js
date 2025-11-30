/** @type {import('tailwindcss').Config} */
export default {
  // 1. CONTENT (Dari bagian #1)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // 2. THEME (Menggabungkan 'extend' dari bagian #1 dan #2)
  theme: {
    extend: {
      // Keyframes dan Animation dipindahkan ke sini:
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 15s ease-in-out infinite alternate',
        'fade-in-1': 'fade-in-up 1s ease-out 0.5s forwards',
        'fade-in-2': 'fade-in-up 1s ease-out 1s forwards',
      },
    },
  },
  
  // 3. PLUGINS (Dari bagian #1)
  plugins: [],
}