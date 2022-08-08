import { motion } from 'framer-motion'
import React from 'react'
import './aside.scss'

const Aside = ({ position, children }) => {
	return (
		<motion.aside
			initial={{
				opacity: 0,
				x: position === 'right' ? 50 : -50,
			}}
			transition={{
				delay: 0.5,
				type: 'spring',
				stiffness: 300,
				damping: 20,
				mass: 2,
			}}
			animate={{ opacity: 1, x: 0 }}
			className={`${position} aside z-50`}
		>
			{children}
		</motion.aside>
	)
}
export default Aside
