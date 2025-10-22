/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F7F4',
          100: '#F0EDE8',
          200: '#E1D9D0',
          300: '#D4C5B8',
          400: '#C7B1A0',
          500: '#8B6F5B',
          600: '#7A5F4F',
          700: '#5C4033',
          800: '#4A3429',
          900: '#3D2B21',
        },
        accent: {
          50: '#FFF8F0',
          100: '#FFEBD9',
          200: '#FFD4B3',
          300: '#FFB380',
          400: '#FF8A4D',
          500: '#D4A74B',
          600: '#B8943F',
          700: '#9C7E33',
          800: '#806827',
          900: '#64521B',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
        },
      },
    },
  },
  plugins: [],
}
