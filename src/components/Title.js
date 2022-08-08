import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { TITLE_PHYSICS } from '../config'
import { useViewport } from '../hooks/useViewport'

export default function Title({ children }) {
	const splittedByWords = children.toString().split(' ')
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['-1 1', '0 0'],
	})

	function useParallax(value, distance) {
		return useTransform(value, [0, 0.7], [distance, 0])
	}
	const { width, height } = useViewport()
	const WIDTH_SPREAD = width * 0.5
	const HEIGHT_SPREAD = height * 0.5

	return (
		<>
			<h2
				ref={ref}
				className='
			inline-block text-3xl md:text-4xl text-shadow font-bold
			text-accent
			pb-6 pt-3 md:pt-7 px-8 md:px-0'
			>
				{splittedByWords.map((word, wordIndex) => (
					<span key={wordIndex} className='inline-block mr-4 md:mr-8'>
						{word.split('').map((char, charIndex) => (
							<motion.span //
								key={wordIndex + charIndex}
								className='inline-block'
								style={{
									y: useParallax(scrollYProgress, HEIGHT_SPREAD * Math.random() - HEIGHT_SPREAD / 2),
									x: useParallax(scrollYProgress, WIDTH_SPREAD * Math.random() - WIDTH_SPREAD / 2),
									rotate: useSpring(useTransform(scrollYProgress, [0, 0.95], [Math.random() * 270 - 135, 0]), TITLE_PHYSICS),
									scale: useTransform(scrollYProgress, [0, 0.85], [2, 1]),
								}}
							>
								{char}
							</motion.span>
						))}
					</span>
				))}
			</h2>
		</>
	)
}
