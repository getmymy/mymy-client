/** @type {import('tailwindcss').Config} */
module.exports = {
  compilerOptions: {
    esModuleInterop: true,
    jsx: 'preserve',
    baseUrl: '.',
    paths: {
      '@/components/*': ['src/components/*'],
      '@/lib/*': ['src/lib/*'],
    },
  },
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'black-100': 'var(--black-100)',
        'black-a10': 'var(--black-a10)',
        'black-a20': 'var(--black-a20)',
        'black-a4': 'var(--black-a4)',
        'black-a40': 'var(--black-a40)',
        'black-a60': 'var(--black-a60)',
        'black-a80': 'var(--black-a80)',
        'gray-100': 'var(--gray-100)',
        green: 'var(--green)',
        orange: 'var(--orange)',
        'white-100': 'var(--white-100)',
        'white-a10': 'var(--white-a10)',
        'white-a20': 'var(--white-a20)',
        'white-a4': 'var(--white-a4)',
        'white-a40': 'var(--white-a40)',
        'white-a60': 'var(--white-a60)',
        'white-a80': 'var(--white-a80)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
