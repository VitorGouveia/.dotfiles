/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          title: 'hsl(240, 3%, 96%)',
          base: 'hsl(240, 3%, 65%)',
          support: 'hsl(240, 3%, 46%)',
          placeholder: 'hsl(240, 3%, 22%)',
          background: 'hsl(240, 3%, 6%)',
        },
        danger: {
          lightest: 'hsl(360, 80%, 94%)',
          light: 'hsl(360, 80%, 82%)',
          base: 'hsl(360, 80%, 60%)',
          darker: 'hsl(360, 80%, 42%)',
          darkest: 'hsl(360, 80%, 31%)',
        },
        warning: {
          lightest: 'hsl(50, 80%, 94%)',
          light: 'hsl(50, 80%, 82%)',
          base: 'hsl(50, 80%, 60%)',
          darker: 'hsl(50, 80%, 42%)',
          darkest: 'hsl(50, 80%, 31%)',
        },
        success: {
          lightest: 'hsl(120, 55%, 94%)',
          light: 'hsl(120, 55%, 82%)',
          base: 'hsl(120, 55%, 60%)',
          darker: 'hsl(120, 55%, 42%)',
          darkest: 'hsl(120, 55%, 31%)',
        },
      },
    },
  },
};
