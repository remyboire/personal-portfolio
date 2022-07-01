import React from 'react'
import * as style from './hero.module.css'
import loadable from '@loadable/component'
import { Trans } from 'gatsby-plugin-react-i18next'
const Profil = loadable(() => import('../components/profil/Profil'))

const Hero = () => {
	return (
		<section className={style.wrapper + ' section no-snap menu-section'} id='hello'>
			<div className={style.scroll}>
				<a href='#featured'> scroll down</a>
			</div>
			<div className={style.profil}>
				<Profil />
			</div>
			<div className={style.inner}>
				<span className={'font-xxxl font-light text-shadow'}>
					<Trans>Bonjour</Trans>
				</span>

				<h1 className={'p'}>
					<Trans>Je m'appelle Rémy, je suis développeur Front-End Junior !</Trans>
				</h1>
				<p>
					<Trans>
						J’ai commencé à m’intéresser au développement lorsque j’ai eu à réaliser mon premier portfolio de jeune graphiste, il y a une dizaines d’années. J’ai du
						faire quelque chose bien loin des best-practices en m’appuyant sur 2/3 tutos du site du zéro.
					</Trans>
				</p>

				<p>
					<Trans>
						Au fil des ans, j’ai étendu mon intérêt pour le code en bidouillant des arduinos, en faisant et refaisant mon portfolio ou en customisant des thèmes
						tumblr...
					</Trans>
				</p>

				<p>
					<Trans>
						J’ai récemment pris gout au code lorsque j’ai remarqué que tout mes petits bouts de connaissances commencaient à faire un ensemble cohérent. J’ai alors eu
						envie de reprendre un peu les bases en suivant de manière assidue la formation de scrimba.
					</Trans>
				</p>

				<p>
					<Trans>
						En parallèle, j’ai travaillé sur le site de swindler and swindler (le studio d’illustration de ma compagne), et le site d’une amie architecte, ainsi que (
						beaucoup) d’exercices sur FrontEndMentor.
					</Trans>
				</p>

				<p>
					<Trans>Ces quelques mois d’apprentissage rigoureux me permettent aujourd’hui d’être plus confiant sur mes capacités en tant que développeur.</Trans>
				</p>

				<p>
					<Trans>C’est le moment name-dropping, voici une liste des technos dans lesquelles j’ai déjà mis le nez :</Trans>
				</p>

				<ul className='grid'>
					<li>React</li>
					<li>SASS</li>
					<li>barba.js</li>
					<li>GSAP</li>
					<li>three.js</li>
					<li>processing</li>
					<li>Gatsby</li>
					<li>PHP</li>
					<li>Java</li>
					<li>jQuery</li>
					<li>Wordpress </li>
					<li>Kirby CMS</li>
					<li>Node.js</li>
					<li>REST API</li>
				</ul>
			</div>
		</section>
	)
}

export default Hero
