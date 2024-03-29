/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["var(--font-inter)"],
			mono: ["var(--font-roboto-mono)"],
			body: ["var(--font-work)", "sans-serif"],
			display: ["var(--font-fraunces)", "serif"],
			// mono: ['"Anonymous Pro"', '"Menlo"', "mono"],
		},
		extend: {},
	},
	plugins: [],
};
