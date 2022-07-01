import * as React from 'react'
import { socialMedia } from '../config'

const Social = () => {
	return (
		<>
			{socialMedia &&
				socialMedia.map((media, i) => (
					<div key={i} className='cursorFrame'>
						<a href={media.url} target='_blank' rel='noreferrer'>
							{media.name}
						</a>
					</div>
				))}
		</>
	)
}
export default Social
