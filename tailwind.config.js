/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		backdropBlur: {
		  sm: '4px',
		},
		colors: {
		  primary: '#800000',       // Deep maroon
		  secondary: '#a52a2a',     // Brownish red
		  accent: '#b22222',        // Firebrick
		  lightMaroon: '#9b1c1c',   // Optional lighter tone
		},
	  },
	},
	plugins: [],
  }
  