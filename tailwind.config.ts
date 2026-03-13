import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F5EEFF',
          100: '#EAD9FF',
          200: '#D4B3FF',
          300: '#B980FF',
          400: '#9F5FE8',
          500: '#7A5ACF',  // principal
          600: '#6847C4',
          700: '#5535A8',
          800: '#3E2480',
          900: '#281558',
        },
        secondary: {
          50:  '#F0F4FF',
          100: '#E0E9FF',
          200: '#C2D3FF',
          300: '#94AFFF',
          400: '#6B8EF5',
          500: '#4F72E3',
          600: '#3A59CC',
          700: '#2B44A8',
          800: '#1E2F80',
          900: '#111C55',
        },
        light: '#FCFAFF',
        dark:  '#241F33',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'count-up': 'countUp 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.webp')",
        'paw-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm18 0c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zM9 32c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm30 0c0-2.8 1.8-5.2 4.3-6.1C41.5 22.2 38 19 34 19c-2.5 0-4.8 1-6.5 2.7C25.8 20 23.5 19 21 19c-4 0-7.5 3.2-9.3 6.9C9.2 26.8 9 29 9 32c0 5.5 4.5 10 10 10h22c5.5 0 10-4.5 10-10z' fill='%23f0850f' fill-opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
