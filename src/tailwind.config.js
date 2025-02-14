/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  };

  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }

  module.exports = {
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }
  