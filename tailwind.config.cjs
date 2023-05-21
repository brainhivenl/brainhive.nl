/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				padding: '1rem'
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
				display: ['Averia Serif Libre ', 'sans-serif'],
				comfortaa: ['Comfortaa', 'sans-serif'],
			},
			colors: {
				'dark-blue': '#3a4f7e',
				'light-blue': '#eaf5f8',
				'light-red': '#FF5A5F'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
