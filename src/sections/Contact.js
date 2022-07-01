import * as React from 'react'
import * as style from './contact.module.scss'
import { Trans } from 'react-i18next'

// useful link https://www.seancdavis.com/posts/how-to-use-netlify-forms-with-gatsby/

const Contact = () => {
	return (
		<section className='section snap menu-section' id='contact'>
			<h2 className='font-xxl lh-1 text-shadow font-light spacing-block'>
				<Trans>On discute ?</Trans>
			</h2>
			<form className={style.wrapper} name='contact' method='POST' data-netlify='true' action='/thank-you'>
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
			</form>
		</section>
	)
}
export default Contact
