import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import * as style from './featured.module.scss'
import { Icon } from '../../src/icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'
import UseInView from '../hooks/UseInView'
import { motion } from 'framer-motion'
import { anim, fadeFromLeft } from '../config'
import Title from '../components/Title'
import UseParallax from '../hooks/UseParallax'

const Featured = () => {
	const data = useStaticQuery(graphql`
		query {
			projets: allMarkdownRemark(
				filter: { frontmatter: { fr: { featured: { eq: true } } }, fileAbsolutePath: { regex: "/projets/" } }
				sort: { fields: [frontmatter___fr___position], order: ASC }
			) {
				edges {
					node {
						frontmatter {
							fr {
								title
								techs
								github
								external
								position
								body
								featuredimage {
									childImageSharp {
										gatsbyImageData(width: 1400, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
									}
								}
							}
							en {
								title
								techs
								github
								external
								position
								body
								featuredimage {
									childImageSharp {
										gatsbyImageData(width: 1400, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const projets = data.projets.edges.filter(({ node }) => node)
	const { t } = useTranslation()
	const lng = useI18next().language

	const projetsInner = (node, i, lang) => {
		const { external, techs, title, github, featuredimage, body } = node.frontmatter[lang]
		const image = getImage(featuredimage)

		return (
			<div className={`${style.inner} menu-section`} id={title.replace(/ /g, '-')}>
				<UseParallax amount={1}>
					<div className={style.frameWrapper}>
						<div className='bg-background'>
							<motion.div variants={anim} initial='initial' whileInView='triggered'>
								<GatsbyImage image={image} alt={title} className='img' />
							</motion.div>
						</div>
					</div>
				</UseParallax>
				<motion.div //
					variants={fadeFromLeft}
					initial='initial'
					whileInView='triggered'
					className={`${style.info} z-10`}
				>
					<div className='font-s dimmed font-light'>
						<Trans>Projet</Trans> {i < 10 ? '0' + (i + 1) : i + 1}
					</div>
					<header className={style.header}>
						<h3 className='font-xl lh-1 cursorFrame'>
							{external ? (
								<a href={external} target='_blank' rel='noopener noreferrer'>
									{title}
								</a>
							) : (
								title
							)}
						</h3>
						<ul className={style.links}>
							{github && (
								<li className='cursorFrame'>
									<a href={github} target='_blank' rel='noopener noreferrer' title={`voir ${title} sur github`}>
										<Icon name='GitHub' />
									</a>
								</li>
							)}
							{external && (
								<li className='cursorFrame'>
									<a href={external} target='_blank' rel='noopener noreferrer' title={`voir ${title} en live`}>
										<Icon name='External' />
									</a>
								</li>
							)}
						</ul>
					</header>
					<div className={style.body}>
						<p>{body}</p>
					</div>
					<footer className={style.tech}>
						<ul>
							{techs.map((tech, i) => (
								<li className='font-s font-light dimmed' key={i}>
									{tech}
								</li>
							))}
						</ul>
					</footer>
				</motion.div>
			</div>
		)
	}
	return (
		projets &&
		projets.map(({ node }, i) => (
			<div key={i} className={style.project + ' snap '}>
				{projetsInner(node, i, lng)}
			</div>
		))
	)
}

export default Featured
