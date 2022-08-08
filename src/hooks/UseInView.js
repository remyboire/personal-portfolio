import React from 'react'
import { motion } from 'framer-motion'

export default function UseInView({ children, className = 'InView' }) {
	const ref = React.useRef(null)

	const anim = {
		initial: {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.025,
			},
		},
		triggered: {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.025,
			},
		},
	}

	return (
		<motion.div ref={ref} variants={anim} initial='initial' whileInView='triggered' className={'InView ' + className}>
			{children}
		</motion.div>
	)
}
