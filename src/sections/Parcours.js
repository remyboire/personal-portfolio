import * as React from 'react'
import * as style from './parcours.module.scss'
import { Trans } from 'react-i18next'

const Parcours = () => {
	return (
		<section className='section snap menu-section' id='parcours'>
			<h2 className='font-xxl lh-1 text-shadow font-light spacing-block'>
				<Trans>Mon parcours :</Trans>
			</h2>
			<ul className={style.parcours}>
				<li className={style.item}>
					<div className={style.date}>
						<div>2022</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Développeur Front-end</Trans>
						</h3>
						<p>
							<Trans>Fraichement sur le marché ;), n'hésitez pas à me contacter, j'étudie toute opportunité.</Trans>
						</p>
						<a className='cursorFrame' href='www.remy.boire.dev'>
							remy.boire.dev
						</a>
					</div>
				</li>
				<li className={style.item}>
					<div className={style.date}>
						<div>2021</div>
						<div>2018</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Directeur artistique freelance - Vins & Spiritueux</Trans>
						</h3>
						<p>
							<Trans>Clients : Domaine Picard, Perrier & Fils, Château Rosan, Vignerons Ardéchois, LORON, Grandes Serres...</Trans>
						</p>
						<a className='cursorFrame' href='www.remyboire.fr'>
							remyboire.fr
						</a>
					</div>
				</li>
				<li className={style.item}>
					<div className={style.date}>
						<div>2018</div>
						<div>2015</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Co-fondateur du studio d’illustration Swindler & Swindler</Trans>
						</h3>
						<p>
							<Trans>Clients : American Express, Los Angeles Magazine, Huffington Post, Oscar Mayer, HBO Game of Thrones...</Trans>
						</p>
						<a className='cursorFrame' href='www.swindlerandswindler.com'>
							swindlerandswindler.com
						</a>
					</div>
				</li>
				<li className={style.item}>
					<div className={style.date}>
						<div>2015</div>
						<div>2014</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Typographe indépendant</Trans>
						</h3>
						<p>
							<Trans>Clients : Converse, Éditions Métamorphose, France 2, Caprice des Dieux, TBWA, BBDO, la chose...</Trans>
						</p>
						<a className='cursorFrame' href='www.behance.net/remyboire'>
							behance.net
						</a>
					</div>
				</li>
				<li className={style.item}>
					<div className={style.date}>
						<div>2014</div>
						<div>2012</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Graphiste dessinateur concepteur</Trans>
						</h3>
						<p>
							<Trans>©Zelda - Agence conseil en communication - Aix-les-Bains</Trans>
						</p>
					</div>
				</li>
				<li className={style.item}>
					<div className={style.date}>
						<div>2012</div>
						<div>2011</div>
					</div>
					<div className={style.content}>
						<h3 className={style.title}>
							<Trans>Opérateur graphiste pao</Trans>
						</h3>
						<p>
							<Trans>Etigraph - Imprimerie d’étiquettes adhésives - Drumettaz-Clarafond</Trans>
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}
export default Parcours
