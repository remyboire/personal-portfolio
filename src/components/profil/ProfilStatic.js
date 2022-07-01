import * as React from 'react'
import useDarkMode from 'use-dark-mode'
import { StaticImage } from 'gatsby-plugin-image'

const ProfilStatic = () => {
	const darkMode = useDarkMode(false)

	return darkMode.value ? (
		<StaticImage src='./dark.jpg' alt='Mon portrait animé fait de points' />
	) : (
		<StaticImage src='./light.jpg' alt='Mon portrait animé fait de points' />
	)
}

export default ProfilStatic
