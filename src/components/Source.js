import * as React from 'react'
import * as style from './source.module.scss'
import { Icon } from '../icons/'

const Source = () => {
	return (
		<aside className={style.source} aria-label='Code source de ce portfolio'>
			<a
				className={`${style.button} cursorFrame`}
				href='https://github.com/remyboire/remy-portfolio'
				target='_blank'
				aria-label='Télécharger le code source'
				rel='noreferrer'
			>
				<Icon name='GitHub' />
				source
			</a>
		</aside>
	)
}
export default Source
