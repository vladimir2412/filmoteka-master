/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-texture':
					"url('https://filmboxassets.tv2zcdn.com/images/welcome_page_assets/PaywallBGWeb-INT.jpg')",
				'background-ovetlay': "url('https://i.imgur.com/n75lTGZ.png')",
				'genre-cards-overlay':
					"url('https://app.filmbox.com/group-collection-card-gradient.ba6403270e3bdbea68b5.png')",
			},
			colors: {
				'body-color': '#27272a',
			},
		},
	},
	plugins: [],
};
