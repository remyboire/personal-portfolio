import * as React from 'react'
import { motion } from 'framer-motion'
import { anim } from '../config'
import { useViewport } from '../hooks/useViewport'

const Career = () => {
	const { isMobile } = useViewport()
	const top = (index) => (isMobile ? 5 * index + 9 + 'rem' : 6.5 * index + 11 + 'rem')
	const jobs = [
		{
			name: 'Opérateur graphiste pao',
			years: [2011, 2012],
			description: 'Etigraph - Imprimerie d’étiquettes adhésives - Drumettaz-Clarafond',
			link: {
				text: 'etigraph.fr',
				url: 'https://www.etigraph.fr',
			},
		},
		{
			name: 'Graphiste dessinateur concepteur',
			years: [2012, 2014],
			description: '©Zelda - Agence conseil en communication - Aix-les-Bains',
			link: {
				text: 'zelda.fr',
				url: 'https://www.zelda.fr',
			},
		},
		{
			name: 'Typographe indépendant',
			years: [2014, 2015],
			description: 'Clients : Converse, Éditions Métamorphose, France 2, Caprice des Dieux, TBWA, BBDO, la chose...',
			link: {
				text: 'behance',
				url: 'https://www.behance.net/remyboire',
			},
		},
		{
			name: 'Co-fondateur de Swindler & Swindler',
			years: [2015, 2018],
			description: 'Clients : American Express, Los Angeles Magazine, Huffington Post, Oscar Mayer, HBO Game of Thrones...',
			link: {
				text: 'swindlerandswindler.com',
				url: 'https://swindlerandswindler.com/',
			},
		},
		{
			name: 'DA freelance',
			years: [2018, 2021],
			description: 'Clients : Domaine Picard, Perrier & Fils, Château Rosan, Vignerons Ardéchois, LORON...',
			link: {
				text: 'remyboire.fr',
				url: 'https://www.remyboire.fr',
			},
		},
		{
			name: 'Développeur Front-end',
			years: [2021, 2022],
			description: "Fraichement sur le marché ;), n'hésitez pas à me contacter, j'étudie toute opportunité.",
			link: {
				text: 'remy.boire.dev',
				url: 'https://remy.boire.dev',
			},
		},
	]
	return (
		<ul className='flex flex-row items-stretch'>
			<div
				className='line border-r border-dashed border-accent mx-0 md:mx-8 h-auto  translate-y-[0] 
				before:content[] before:w-4 before:-left-2 before:border-b before:border-accent before:top before:absolute 
				after:content[] after:rotate-45 after:w-4 after:h-4 after:-right-2 after:border-b after:border-r after:border-accent after:-bottom-2 after:absolute '
			></div>
			<div className='grow  ml-6 md:ml-0 grid grid-rows-1 gap-96' id='jobWrapper'>
				{jobs.map((job, index) => (
					<motion.div variants={anim} initial='initial' whileInView='triggered' key={index} id={'job' + index} className='sticky' style={{ top: top(index) }}>
						<div
							data-years={job.years.join('   ')}
							className={`
							before:content-[attr(data-years)]
							before:flex before:text-center before:items-center
							before:text-2xs before:w-8 before:h-8 
							md:before:text-xs md:before:w-12 md:before:h-12 
							before:rounded-full 
							before:bg-accent before:text-background
							before:absolute 
							before:-left-10 md:before:-left-14 
							before:border before:border-accent
							bg-gradient-to-t from-background via-background 
							pt-20 -mt-20 lg:pt-5 lg:mt-5
							`}
						>
							<div className='text-lg md:text-2xl'>{job.name}</div>
							<div className='text-md'>{job.description}</div>
							{job.link && (
								<a className='cursorFrame' href={job.link.url}>
									{job.link.text}
								</a>
							)}
						</div>
					</motion.div>
				))}
				<div className={`sticky`} style={{ top: top(jobs.length + 1) }}></div>
			</div>
		</ul>
	)
}
export default Career
