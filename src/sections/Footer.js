import * as React from 'react'
import * as style from './footer.module.css'
import { Trans } from 'react-i18next'
const Footer = () => {
	return (
		<div className={style.footer + ' section'}>
			<p>
				<Trans>Entièrement conçu and développé par moi-même</Trans>
			</p>
			<p>
				<Trans>Ce portfolio utilise </Trans>
				<a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
					Gatsby
				</a>{' '}
				et{' '}
				<a href='https://netlify.app/' target='_blank' rel='noreferrer'>
					Netlify
				</a>
				<Trans>, grande première pour moi.</Trans>
			</p>
			<p>
				<Trans>L'animation du haut de page a été fait en utilisant l'algo d'</Trans>
				<a href='https://github.com/mwkm/atoMeow' target='_blank' rel='noreferrer'>
					ateMeow
				</a>{' '}
				<Trans>avec</Trans>{' '}
				<a href='https://processing.org/' target='_blank' rel='noreferrer'>
					processing
				</a>
				, <Trans>elle est affichée grace à</Trans>{' '}
				<a href='https://p5js.org/' target='_blank' rel='noreferrer'>
					p5.js
				</a>
				.
			</p>
			<p>
				<Trans>Une des principale source d'inspiration a été le portfolio de</Trans>{' '}
				<a href='https://brittanychiang.com/' target='_blank' rel='noreferrer'>
					Brittany Chiang
				</a>
				.
			</p>
		</div>
	)
}

export default Footer
