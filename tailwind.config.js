/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent)',
				accentHover: 'var(--accent-hover)',
				background: 'var(--bg)',
				backgroundAccent: 'var(--bg-accent)',
				color: 'var(--color)',
				colorDimmed: 'var(--color-dimmed),',
			},
			zIndex: {
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
			},
			fontSize: {
				'2xs': [
					'0.5rem',
					{
						lineHeight: '0.75rem',
					},
				],
			},
		},
	},
	plugins: [],
}
