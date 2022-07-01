import React from 'react'
import loadable from '@loadable/component'
const ProfilLive = loadable(() => import('./ProfilLive'))
import ProfilStatic from './ProfilStatic'

const Profil = () => {
	const isBrowser = typeof window !== 'undefined'
	const [width, setWidth] = React.useState(window.innerWidth)

	React.useEffect(() => {
		if (!isBrowser) return false
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})
	return width > 1050 ? <ProfilLive /> : <ProfilStatic />
}
export default Profil
