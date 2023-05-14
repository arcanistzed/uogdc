/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: "hsl(0, 0%, 50%)",
				red: "hsl(5, 80%, 50%)",
				yellow: "hsl(40, 100%,60%)",
				dark: "hsl(0, 0%, 16%)",
				"almost-dark": "hsl(5, 10%, 30%)",
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
