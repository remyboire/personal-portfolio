import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import * as style from './projects.module.scss'
import { Icon } from '../icons/'
import { useI18next } from 'gatsby-plugin-react-i18next'
import UseInView from '../hooks/UseInView'
import { motion } from 'framer-motion'
import { anim } from '../config'

const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			projects: allMarkdownRemark(
				filter: { frontmatter: { fr: { featured: { eq: false } } }, fileAbsolutePath: { regex: "/projets/" } }
				sort: { fields: [frontmatter___fr___position], order: ASC }
			) {
				edges {
					node {
						frontmatter {
							fr {
								body
								external
								github
								techs
								title
							}
							en {
								body
								external
								github
								techs
								title
							}
						}
					}
				}
			}
		}
	`)

	const projects = data.projects.edges.filter(({ node }) => node)
	const lng = useI18next().language

	const projectsInner = (node, i, lang) => {
		const { external, techs, title, github, body } = node.frontmatter[lang]

		return (
			<UseInView key={i}>
				<motion.div variants={anim} className={style.inner}>
					<div>
						<div className='font-s dimmed font-light'>Archive</div>
						<header className={style.header}>
							<h3 className='font-l lh-1 cursorFrame'>
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
					</div>
					<div className={style.body}>
						<p>{body}</p>
					</div>
					<div className={style.tech}>
						<footer>
							<ul>
								{techs.map((tech, i) => (
									<li className='font-s font-light dimmed' key={i}>
										{tech}
									</li>
								))}
							</ul>
						</footer>
					</div>
				</motion.div>
			</UseInView>
		)
	}

	return <div className={style.wrapper}>{projects && projects.map(({ node }, i) => projectsInner(node, i, lng))}</div>
}

export default Projects
