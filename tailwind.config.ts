import type { Config } from 'tailwindcss';
const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				B100: '#1E1E1E',
				B200: '#232B39',
				B300: '#868D98',
				T100: '#BDC3CB',
				T300: '#E1E8F0',
				P100: '#7288FF'
			},
		}
	},
	plugins: [],
};
export default config;
