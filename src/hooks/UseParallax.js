import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { useViewport } from '../hooks/useViewport'

// parallax is proportional to viewport height,
// amount is divided by 10 for easier control

export default function UseParallax({ children, amount = 1 }) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	function useParallax(value, distance) {
		return useTransform(value, [0, 1], [-distance, distance])
	}
	const { height } = useViewport()
	return (
		<motion.span //
			ref={ref}
			className='inline-block'
			style={{
				y: useParallax(scrollYProgress, (amount / 10) * height),
			}}
		>
			{children}
		</motion.span>
	)
}
