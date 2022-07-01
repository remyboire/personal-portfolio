import React from 'react'

const viewportContext = React.createContext({})

export const ViewportProvider = ({ children }) => {
	const [width, setWidth] = React.useState()
	const [height, setHeight] = React.useState()
	const handleWindowResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return <viewportContext.Provider value={{ width, height }}>{children}</viewportContext.Provider>
}
export const useViewport = () => {
	const { width, height } = React.useContext(viewportContext)
	return { width, height }
}
