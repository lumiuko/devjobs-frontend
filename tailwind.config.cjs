/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet: '#9e7f66',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        white: '#ffffff',
        'light-grey': '#F4F6F8',
        gray: '#9DAEC2',
        'dark-grey': '#6E8098',
        primary: '#5964E0',
        'primary-hover': '#939BF4',
        secondary: '#eff0fc',
        'secondary-hover': '#c5c9f4',
        'secondary-dark': '#303642',
        'secondary-dark-hover': '#535862'
      },
      borderRadius: {
        'card-logo': '15px',
        switch: '12px',
        input: '6px',
        btn: '5px'
      }
    },
    fontSize: {
      h1: '1.75rem',
      h2: '1.5rem',
      h3: '1.25rem',
      h4: '0.875rem'
    },
    backgroundImage: {
      header: 'url("/assets/mobile/bg-pattern-header.svg")',
      'header-tablet': 'url("/assets/tablet/bg-pattern-header.svg")',
      'header-desktop': 'url("/assets/desktop/bg-pattern-header.svg")',
      check: 'url("/assets/desktop/icon-check.svg")',
      location: 'url("/assets/desktop/icon-location.svg")',
      search: 'url("/assets/desktop/icon-search.svg")'
    },
    screens: {
      md: '768px',
      xl: '1190px'
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: []
}
