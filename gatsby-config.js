module.exports = {
	siteMetadata: {
		title: `Rémy Boiré - Front-End dev`,
		siteUrl: `https://remy.boire.dev`,
	},
	plugins: [
		'gatsby-plugin-netlify',
		'gatsby-plugin-use-dark-mode',
		'remark-mdx',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-remark',
		`gatsby-plugin-react-helmet`,
		`gatsby-image`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-robots-txt`,

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projets`,
				path: `${__dirname}/content/projets/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`en`, `fr`],
				defaultLanguage: `fr`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: `https://remyboire.netlify.app/`,
				// if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
				trailingSlash: 'always',
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [
					{
						matchPath: '/admin/',
						languages: ['fr'],
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ['G-WWT0BSX0Q9'],
				gtagConfig: {
					anonymize_ip: true,
				},
				pluginConfig: {
					head: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-matomo',
			options: {
				siteId: process.env.GATSBY_MATOMO_SITE_ID,
				matomoUrl: process.env.GATSBY_MATOMO_URL,
				siteUrl: process.env.GATSBY_MATOMO_SITE_URL,
			},
		},

		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'content/images/icon.png',
				name: 'Rémy Boiré',
				start_url: '/',
			},
		},
	],
}
