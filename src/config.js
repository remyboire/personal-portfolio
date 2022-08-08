module.exports = {
	email: 'hello@remyboire.fr',

	socialMedia: [
		{
			name: 'GitHub',
			url: 'https://github.com/remyboire',
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/rémy-boiré-8b507162/',
		},
		{
			name: 'remy@boire.dev',
			url: 'mailto:remy@boire.dev',
		},
	],

	navLinks: [
		{
			fr: [
				{
					name: 'Bonjour',
					url: '/#hello',
				},
				{
					name: 'Projets',
					url: '/#featured',
				},
				{
					name: 'Parcours',
					url: '/#parcours',
				},
				{
					name: 'Contact',
					url: '/#contact',
				},
			],
			en: [
				{
					name: 'Hello',
					url: '/en/#hello',
				},
				{
					name: 'Projects',
					url: '/en/#featured',
				},
				{
					name: 'Career',
					url: '/en/#parcours',
				},
				{
					name: 'Contact',
					url: '/en/#contact',
				},
			],
		},
	],

	colors: {
		bglight: '#f8f8f8',
		bgdark: '#212525',
		accentlight: '#dc4d00',
		accentdark: '#5ef0ce',
	},
	anim: {
		initial: { opacity: 0, y: 50 },
		triggered: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 20, mass: 2 },
		},
	},
	fadeFromLeft: {
		initial: { opacity: 0, x: -50 },
		triggered: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', stiffness: 300, damping: 20, mass: 2 },
		},
	},
	SCROLL_PHYSICS: {
		// physics used  in scroll
		damping: 4, //Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
		mass: 0.05, // Mass of the moving object. Higher values will result in more lethargic movement. Set to 1 by default.
		stiffness: 10, // Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
	},
	TITLE_PHYSICS: {
		// physics used for titles animations
		damping: 10, //Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
		mass: 2, // Mass of the moving object. Higher values will result in more lethargic movement. Set to 1 by default.
		stiffness: 100, // Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
	},
}
