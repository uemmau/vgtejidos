/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F9F4EA',
          200: '#F5F0E8',
          300: '#EDE5D5',
          DEFAULT: '#F5F0E8',
        },
        sand: {
          100: '#EDE5D5',
          200: '#E8DDD0',
          300: '#DDD0BE',
          400: '#C9B99E',
          DEFAULT: '#E8DDD0',
        },
        wool: {
          100: '#D4C5AE',
          200: '#C2AD92',
          300: '#A8906F',
          400: '#8B7355',
          DEFAULT: '#A8906F',
        },
        bark: {
          100: '#8B6914',
          200: '#6B5010',
          300: '#4A380B',
          DEFAULT: '#8B6914',
        },
        earth: {
          100: '#7C6B58',
          200: '#5E4F3E',
          300: '#3D2B1F',
          DEFAULT: '#3D2B1F',
        },
        warm: {
          100: '#C4B8AD',
          200: '#9C9087',
          300: '#736860',
          DEFAULT: '#9C9087',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(61, 43, 31, 0.08)',
        'warm-md': '0 4px 12px rgba(61, 43, 31, 0.12)',
        'warm-lg': '0 8px 30px rgba(61, 43, 31, 0.15)',
        'warm-xl': '0 20px 50px rgba(61, 43, 31, 0.2)',
      },
    },
  },
  plugins: [],
};
