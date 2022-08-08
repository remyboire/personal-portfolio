import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../components/Title'

export default function Section({ id, title, children }) {
	const { t } = useTranslation()

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 0', '1 1'], // target / container
	})

	return (
		<section className='section ' id={id} ref={ref}>
			<motion.div
				// bg-gradient-to-b from-background
				//  bg-gradient-to-b from-background via-background
				className='z-20 sticky -top-10 			
				 md:px-0 backdrop-blur w-full
				 border-b border-background
				 bg-background/50
					'
				style={
					{
						// opacity: useTransform(scrollYProgress, [0.2, 1], [0, 1]),
					}
				}
			>
				<div
					className=' 
	
					pt-6 pb-0 md:pl-12 lg:pl-72
	
					max-w-[1800px] m-auto
					'
				>
					<Title>{t(`${title}`)}</Title>
				</div>
			</motion.div>
			<div
				className='
			max-w-[1800px] m-auto px-8 md:px-24 lg:pl-72
			pt-10 md:pt-40
			pb-10 md:pb-24
			mb-24 md:mb-36
			md:pl-10 md:pr-24'
			>
				{children}
			</div>
		</section>
	)
}
