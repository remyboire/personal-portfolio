import * as React from 'react'
import { Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import UseInView from '../hooks/UseInView'
import { anim } from '../config'

const Skills = () => {
	const skillsList = [
		{
			name: 'Développement',
			skills: [
				'JavaScript(ES6+)',
				'HTML5',
				'SASS',
				'CSS3',
				'Tailwind',
				'React.js',
				'Gatsby',
				'Java (Arduino)',
				'REST API',
				'GSAP',
				'three.js',
				'barba.js',
				'processing',
				'p5.js',
				'Git',
				'Chart.js',
				'Framer Motion',
			],
		},
		{
			name: 'Design',
			skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Adobe After Effects', 'Adobe InDesign', 'Glyphs', 'Lightroom'],
		},
		{
			name: '3D',
			skills: ['Blender', 'Keyshot', 'Fusion 360', 'Esko Studio'],
		},
	]

	return (
		<div className='md:p-4'>
			{skillsList.map((skill) => (
				<UseInView key={skill.name}>
					<div className='mb-8 mt-4'>
						<motion.h3 variants={anim} className='font-xl lh-1 text-accent font-bold mb-4'>
							<Trans>{skill.name}</Trans>
						</motion.h3>
						<ul className='flex flex-wrap gap-2 md:gap-4 md:px-4 py-4'>
							{skill.skills.map((item) => (
								<motion.li variants={anim} key={item} className='py-2 px-4 border border-colorDimmed rounded-full'>
									{item}
								</motion.li>
							))}
						</ul>
					</div>
				</UseInView>
			))}
		</div>
	)
}
export default Skills
