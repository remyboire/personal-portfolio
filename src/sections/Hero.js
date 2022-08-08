import React from 'react'
import * as style from './hero.module.css'
import loadable from '@loadable/component'
import { Trans } from 'gatsby-plugin-react-i18next'
import UseInView from '../hooks/UseInView'
import { motion } from 'framer-motion'
import { anim } from '../config'

import HeroTitle from '../components/HeroTitle'

const Profil = loadable(() => import('../components/profil/Profil'))
const content = [
	"Je m'appelle Rémy, je suis développeur Front-End Junior !",
	'J’ai commencé à m’intéresser au développement lorsque j’ai eu à réaliser mon premier portfolio de jeune graphiste, il y a une dizaines d’années. J’ai du faire quelque chose bien loin des best-practices en m’appuyant sur 2/3 tutos du site du zéro.',
	'Au fil des ans, j’ai étendu mon intérêt pour le code en bidouillant des arduinos, en faisant et refaisant mon portfolio ou en customisant des thèmes tumblr...',
	'J’ai récemment pris gout au code lorsque j’ai remarqué que tout mes petits bouts de connaissances commencaient à faire un ensemble cohérent. J’ai alors eu envie de reprendre un peu les bases en suivant de manière assidue la formation de scrimba.',
	'En parallèle, j’ai travaillé sur le site de swindler and swindler (le studio d’illustration de ma compagne), et le site d’une amie architecte, ainsi que (beaucoup) d’exercices sur FrontEndMentor.',
	'Ces quelques mois d’apprentissage rigoureux me permettent aujourd’hui d’être plus confiant sur mes capacités en tant que développeur.',
]

const Hero = () => {
	return (
		<section className={style.wrapper + ' section no-snap menu-section  md:mx-12 lg:ml-72 m-auto select-none relative'}>
			<div className=' absolute w-full flex items-center left-1/2 m-auto -translate-x-1/2 top-0 min-h-screen  select-none  md:max-w-3xl'>
				<Profil />
			</div>
			<div className='w-full grow'>
				<HeroTitle />
				<UseInView className={'flex justify-center'}>
					<div className='md:max-w-[70ch] mx-8 md:-mt-16 m-auto mb-40 scroll-m-96' id='hello'>
						{content.map((item, index) =>
							index === 0 ? (
								<motion.h1 variants={anim} className='p mt-16' key={index}>
									<Trans>{item}</Trans>
								</motion.h1>
							) : (
								<motion.p variants={anim} key={index}>
									<Trans>{item}</Trans>
								</motion.p>
							)
						)}
					</div>
				</UseInView>
			</div>
		</section>
	)
}

export default Hero
