import { motion } from 'framer-motion'
import * as React from 'react'
import { anim } from '../config'
import { Icon } from '../icons/'

const Source = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -50,
			}}
			transition={{
				delay: 0.5,
				type: 'spring',
				stiffness: 300,
				damping: 20,
				mass: 2,
			}}
			animate={{ opacity: 1, y: 0 }}
			className='hidden lg:block text-right pt-4 right-4 cursorFrame z-30 fixed '
			aria-label='Code source de ce portfolio'
		>
			<a
				className=' inline-block border border-accent hover:border-accentHover rounded-md px-4 py-3 bg-background/50 backdrop-blur'
				href='https://github.com/remyboire/personal-portfolio'
				target='_blank'
				aria-label='Télécharger le code source'
				rel='noreferrer'
			>
				<span className='mr-2'>
					<Icon name='GitHub' />
				</span>
				source
			</a>
		</motion.div>
	)
}
export default Source
