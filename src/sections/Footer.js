import * as React from 'react'
import { Trans } from 'react-i18next'

const Footer = () => {
	return (
		<section className='section text-center mt-40 max-w-[1800px] m-auto'>
			<div className='bg-backgroundAccent py-20 md:py-40  px-8 md:px-24 rounded-t-2xl mx-8 lg:mx-24'>
				<div className='mb-5'>
					<Trans>Entièrement conçu and développé par moi-même.</Trans>
				</div>
				<div className='mb-5'>
					<Trans>Ce portfolio utilise </Trans>
					<a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
						Gatsby
					</a>{' '}
					et{' '}
					<a href='https://netlify.app/' target='_blank' rel='noreferrer'>
						Netlify
					</a>
					<Trans>, grande première pour moi.</Trans>
				</div>
				<div className='mb-5'>
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
				</div>
				<div>
					<Trans>Une des principale source d'inspiration a été le portfolio de</Trans>{' '}
					<a href='https://brittanychiang.com/' target='_blank' rel='noreferrer'>
						Brittany Chiang
					</a>
					.
				</div>
			</div>
		</section>
	)
}

export default Footer
