import * as React from 'react'
import Menu from '../components/Menu'
import ThemeToggle from '../components/ThemeToggle'
import LangSwitcher from '../components/LangSwitcher'
import Social from '../components/Social'
import Source from '../components/Source'
import Hero from '../sections/Hero'
import Featured from '../sections/Featured'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Aside from '../components/Aside'
import CustomCursor from '../components/CustomCursor'
import { Helmet } from 'react-helmet'
import '../styles/index.scss'
import { ViewportProvider } from '../hooks/useViewport'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

import Section from '../sections/Section'
import { motion } from 'framer-motion'
import Career from '../sections/Career'

const IndexPage = () => {
	console.log(` 
 __   __  ___     _______  __   __  _______  ______    _______    __  
|  | |  ||   |   |       ||  | |  ||       ||    _ |  |       |  |  | 
|  |_|  ||   |   |_     _||  |_|  ||    ___||   | ||  |    ___|  |  | 
|       ||   |     |   |  |       ||   |___ |   |_||_ |   |___   |  | 
|       ||   |     |   |  |       ||    ___||    __  ||    ___|  |__| 
|   _   ||   |     |   |  |   _   ||   |___ |   |  | ||   |___    __  
|__| |__||___|     |___|  |__| |__||_______||___|  |_||_______|  |__| 
`)
	console.log('This portfolio was built and designed by Rémy Boiré')
	console.log("It's constently evolving and a great place for me to experiment and learn new things.")
	console.log('Take a look at the source on GitHub')
	console.log('https://github.com/remyboire/personal-portfolio')

	return (
		<>
			<Helmet
				htmlAttributes={{
					lang: useI18next().language,
				}}
			>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='author' content='Rémy Boiré'></meta>
				<meta name='description' content='Le portfolio de Rémy Boiré, développeur Front-end junior' />
				<meta name='keywords' content='développeur web, développement web, développement front-end, frontend' />
				<title>Rémy Boiré, Front-End dev</title>
				<link rel='canonical' href='https://remy.boire.dev' />
			</Helmet>
			<ViewportProvider>
				<CustomCursor />
				<Menu />
				<Aside position='left'>
					<Social />
				</Aside>
				<Aside position='right'>
					<LangSwitcher />
					<ThemeToggle />
				</Aside>
				<motion.main className='' initial='initial' whileInView='triggered'>
					<div>
						<Source />
						<Hero />
						<Section id='featured' title='Voici quelques projets récents :'>
							<Featured />
						</Section>
						<Section id='archives' title="Et d'autres plus ou moins anciens :">
							<Projects />
						</Section>
						<Section id='skills' title='Mes compétences techniques :'>
							<Skills />
						</Section>
						<Section id='certifications' title='Quelques certifications :'>
							<Certifications />
						</Section>
						<Section id='parcours' title='Mon parcours :'>
							<Career />
						</Section>
						<Section id='contact' title='On discute ?'>
							<Contact />
						</Section>
						<Footer />
					</div>
				</motion.main>
			</ViewportProvider>
		</>
	)
}

export default IndexPage

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`
