import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { navLinks } from '../config'
import { useI18next } from 'gatsby-plugin-react-i18next'
import UseInView from '../hooks/UseInView'
import { anim } from '../config'
import { motion, MotionConfig } from 'framer-motion'

const NavLinks = ({ handleToggle }) => {
	const data = useStaticQuery(graphql`
		query {
			projects: allMarkdownRemark(
				filter: { frontmatter: { fr: { featured: { eq: true } } }, fileAbsolutePath: { regex: "/projets/" } }
				sort: { fields: [frontmatter___fr___position], order: ASC }
			) {
				edges {
					node {
						frontmatter {
							fr {
								title
							}
							en {
								title
							}
						}
					}
				}
			}
		}
	`).projects.edges.filter(({ node }) => node)

	const lng = useI18next().language

	addSubMenu(navLinks[0].fr, data, 'Projets')
	addSubMenu(navLinks[0].en, data, 'Projects')

	function addSubMenu(menu, elements, parent) {
		let submenu = []
		elements.forEach((data) => {
			const title = data.node.frontmatter[lng].title
			submenu.push({ url: '#' + title.replace(/ /g, '-'), name: title })
		})
		submenu.push({ url: '#archives', name: 'Archives' })
		const index = menu.findIndex((el) => el.name === parent)
		menu[index] = {
			...menu[index],
			...{ subMenu: submenu },
		}
	}
	return (
		<>
			<UseInView>
				<ul>
					{navLinks &&
						navLinks[0][lng].map((link, i) => (
							<li key={i} data-menu-item={link.name.replace(/ /g, '-').toLowerCase()}>
								<motion.div variants={anim}>
									<Link className='cursorFrame' to={link.url} onClick={handleToggle}>
										{link.name}
									</Link>
								</motion.div>
								{link.subMenu && link.subMenu.length > 0 ? (
									<ol className='submenu' aria-label='submenu'>
										{link.subMenu.map((subLink) => (
											<motion.li key={subLink.name} data-menu-item={subLink.name.replace(/ /g, '-').toLowerCase()} variants={anim}>
												<Link className='cursorFrame' to={subLink.url} onClick={handleToggle}>
													{subLink.name}
												</Link>
											</motion.li>
										))}
									</ol>
								) : null}
							</li>
						))}
				</ul>
			</UseInView>
		</>
	)
}

export default NavLinks
