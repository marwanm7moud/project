/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary colors from logo
          brown: {
            DEFAULT: '#4A2511', // Dark brown
            light: '#8B6144'    // Light brown
          },
          green: {
            DEFAULT: '#2F5C34', // Dark green
            light: '#4A8751'    // Light green
          },
          sand: {
            DEFAULT: '#C69C7B', // Sand color
            light: '#E5C4AC'    // Light sand
          }
        }
      }
    },
  },
  plugins: [],
};