import { motion, useDragControls, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'

import React, { useRef, useState } from 'react'
import { anim, TITLE_PHYSICS } from '../config'

import { useViewport } from '../hooks/useViewport'

export default function HeroTitle() {
	const title = 'Bonjour!'

	const { width, height } = useViewport()

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 0', '1 0.5'], // target / container
	})

	const handleMove = (event) => {
		mouseX.set(event.clientX - width / 2)
		mouseY.set(event.clientY - height / 2)
	}

	const WIDTH_SPREAD = width * 0.3
	const HEIGHT_SPREAD = height * 0.75

	return (
		<motion.div
			variants={anim}
			ref={ref}
			className='flex justify-center pt-[150vh] mb-20 md:mb-40'
			style={{
				x: useSpring(useTransform(mouseX, [-width / 2, width / 2], [100, -100]), { damping: 5 }),
				y: useSpring(useTransform(mouseY, [-height / 2, height / 2], [100, -100]), { damping: 5 }),
			}}
			onMouseMove={(e) => handleMove(e)}
			onMouseLeave={() => {
				mouseX.set(0)
				mouseY.set(0)
			}}
		>
			{title.split('').map((char, index) => (
				<motion.span
					key={index}
					drag
					dragSnapToOrigin={true}
					// dragControls={dragControls}
					// onDrag={(event, info) => console.log(info, info.point.x, info.point.y)}
					// onPointerDown={startDrag}
					className='text-6xl md:text-9xl font-light text-backgroundAccent text-shadow inline-block'
					style={{
						y: useSpring(useTransform(scrollYProgress, [0, 1], [Math.random() * HEIGHT_SPREAD - HEIGHT_SPREAD * 2, 0]), TITLE_PHYSICS),
						x: useSpring(useTransform(scrollYProgress, [0, 1], [Math.random() * WIDTH_SPREAD - WIDTH_SPREAD / 2, 0]), TITLE_PHYSICS),
						rotate: useSpring(useTransform(scrollYProgress, [0, 1], [Math.random() * 180 - 90, 0]), TITLE_PHYSICS),
						scale: useTransform(scrollYProgress, [0, 1], [2, 1]),
						opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
					}}
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	)
}
