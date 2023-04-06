/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-red": "#e53526",
				"dark-red": "#931910",
				yellow: "#ffbf39",
				dark: "#2a2a2a",
				"almost-dark": "##544746",
			},
			animation: {
				"move-horizontal": "move-horizontal 10s linear infinite",
			},
			keyframes: {
				"move-horizontal": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100vw)" },
				},
			},
		},
	},
	plugins: [],
};
