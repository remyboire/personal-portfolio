import * as React from 'react'
import UseInView from '../hooks/UseInView'
import { motion } from 'framer-motion'
import { anim } from '../config'

const Certifications = () => {
	const linkedInSkills = ['CSS', 'HTML', 'React.js', 'API REST', 'Illustrator', 'InDesign', 'Photoshop', 'After Effects']
	return (
		<UseInView>
			<div className='md:p-4'>
				<div className='py-2'>
					<motion.h3 variants={anim} className='font-xl text-accent font-bold lh-1'>
						<a
							className='cursorFrame'
							target='_blank'
							href='https://www.freecodecamp.org/certification/fccbcccb7cf-cff5-4c01-b53d-e5fbdf9b9804/javascript-algorithms-and-data-structures'
						>
							Scrimba Frontend Career Path
						</a>
					</motion.h3>
					<motion.p variants={anim} className='flex after:content-none py-3 md:px-4'>
						70 hours courses and hundred of hours of practice.
					</motion.p>
				</div>
				<div className='py-2'>
					<motion.h3 variants={anim} className='font-xl text-accent font-bold lh-1'>
						<a
							className='cursorFrame'
							target='_blank'
							href='https://www.freecodecamp.org/certification/fccbcccb7cf-cff5-4c01-b53d-e5fbdf9b9804/javascript-algorithms-and-data-structures'
						>
							JavaScript Algorithms & Data Structures
						</a>
					</motion.h3>
					<motion.p variants={anim} className='flex after:content-none py-3 md:px-4'>
						Developer Certification, representing approximately 300 hours of coursework.
					</motion.p>
				</div>
				<div className='py-2'>
					<motion.h3 variants={anim} className='font-xl text-accent font-bold lh-1'>
						<a className='cursorFrame' target='_blank' href='https://www.linkedin.com/in/r%C3%A9my-boir%C3%A9-8b507162/'>
							LinkedIn Skill Assessments
						</a>
					</motion.h3>

					<ul className='flex flex-wrap gap-2 md:gap-4 md:px-4 py-6'>
						{linkedInSkills.map((item) => (
							<motion.li variants={anim} key={item} className='py-2 px-4 border border-colorDimmed rounded-full'>
								{item}
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</UseInView>
	)
}
export default Certifications
