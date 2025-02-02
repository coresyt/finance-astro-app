import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			black: "#000000",
			white: "#ffffff",
			blue: "#172554",
			blueLight: "#60a5fa",
			green: "#14532d",
			greenLight: "#4ade80",
			red: "#7f1d1d",
			redLight: "#f87171",
			yellow: "#ca8a04",
			yellowLight: "#facc15",
		},
		fontFamily: {
			OpenSans: ["OpenSans", ...defaultTheme.fontFamily.sans],
			Geist: ["Geist", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
