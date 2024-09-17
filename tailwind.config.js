/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["var(--font-inter)"],
			mono: ["var(--font-roboto-mono)"],
			body: ["var(--font-work)", "sans-serif"],
			display: ["var(--font-fraunces)", "serif"],
			fraunces: ["Fraunces", "serif"],
			"work-sans": ["Work Sans", "sans-serif"],
			"martian-mono": ["Martian Mono", "monospace"],
			// mono: ['"Anonymous Pro"', '"Menlo"', "mono"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
