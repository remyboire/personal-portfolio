import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

const LangSwitcher = () => {
	const { language, languages, originalPath } = useI18next()
	return (
		<>
			{languages
				.filter((lang) => lang !== language)
				.map((lang) => (
					<div className='label cursorFrame' key={lang}>
						<Link to={originalPath} language={lang}>
							{lang === 'fr' ? 'Passer en Français' : 'Switch to English'}
						</Link>
					</div>
				))}
		</>
	)
}

export default LangSwitcher
