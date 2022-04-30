module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: ' 2rem',
    },
    fontFamily: {
      display: ['Nunito Sans', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        base: {
          light: 'hsl(0, 0%, 98%)',
          dark: 'hsl(207, 26%, 17%)',
          content: { light: 'hsl(200, 15%, 8%)', dark: 'hsl(0, 0%, 100%)' },
        },
        primary: {
          light: 'hsl(0, 0%, 100%)',
          dark: 'hsl(209, 23%, 22%)',
        },
        secondary: {
          light: 'hsl(0, 0%, 52%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
