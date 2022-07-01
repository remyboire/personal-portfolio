import * as React from 'react'
import Menu from '../components/Menu'
import ThemeToggle from '../components/ThemeToggle'
import LangSwitcher from '../components/LangSwitcher'
import Social from '../components/Social'
import Source from '../components/Source'
import Hero from '../sections/Hero'
import Featured from '../sections/Featured'
import Projects from '../sections/Projects'
import Parcours from '../sections/Parcours'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Aside from '../components/Aside'
import CustomCursor from '../components/CustomCursor'
import { Helmet } from 'react-helmet'
import '../styles/index.scss'
import { ViewportProvider } from '../hooks/useViewport'
import { useViewport } from '../hooks/useViewport'

import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

const IndexPage = () => {
	const { width } = useViewport()
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
				<link rel='canonical' href='https://remyboire.netlify.app' />
			</Helmet>
			<ViewportProvider>
				<CustomCursor />
			</ViewportProvider>
			<Menu />
			<Source />
			<main className='snap-container'>
				<Hero />
				<Featured />
				<Projects />
				<Parcours />
				<Contact />
				<Footer />
			</main>
			<Aside position='left'>
				<Social />
			</Aside>
			<Aside position='right'>
				<LangSwitcher />
				<ThemeToggle />
			</Aside>
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
