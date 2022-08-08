import * as React from 'react'
// @ts-ignore
import * as style from './contact.module.scss'
import { Trans } from 'react-i18next'
import UseInView from '../hooks/UseInView'
import { motion } from 'framer-motion'
import { anim } from '../config'

// useful link https://www.seancdavis.com/posts/how-to-use-netlify-forms-with-gatsby/

const Contact = () => {
	return (
		<motion.form //
			initial={{ scale: 0.9, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			transition={{ ease: 'easeInOut', delay: 0.15 }}
			className={style.wrapper}
			name='contact'
			method='POST'
			data-netlify='true'
			action='/thank-you'
		>
			<input type='hidden' name='form-name' value='contact' />
			<div className={style.form}>
				<input type='email' name='email' id='email' />
				<label htmlFor='email'>
					<Trans>Votre Email :</Trans>
				</label>
			</div>
			<div className={style.form}>
				<textarea name='message' id='message'></textarea>
				<label htmlFor='message'>
					<Trans>Message :</Trans>
				</label>
			</div>
			<div className={style.button}>
				<button type='submit' className='cursorFrame'>
					<Trans>Envoyer</Trans>
				</button>
			</div>
		</motion.form>
	)
}
export default Contact
