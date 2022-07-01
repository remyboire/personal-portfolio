import React from 'react'
import useDarkMode from 'use-dark-mode'
import { Trans } from 'react-i18next'

const DarkModeToggle = () => {
	const darkMode = useDarkMode(false)

	return (
		<div className='label'>
			<a className='button cursorFrame' onClick={darkMode.toggle} aria-label='dark mode toggle' role='switch' aria-checked={darkMode.value} type='button'>
				<Trans>Passer en mode {darkMode.value ? 'clair' : 'sombre'}</Trans>
			</a>
		</div>
	)
}

export default DarkModeToggle
