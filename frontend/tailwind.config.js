/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			fontSize:{
				'12xl':'14rem',
				'5xl':'3rem',
			},
			colors:{
				designText: '#d9f509',
				developmentText: '#f5ffa7'
			}
		}, 
	}, 
	plugins: [], 
}