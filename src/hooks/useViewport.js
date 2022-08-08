import React, { createContext, useContext, useState } from 'react'

const viewportContext = createContext({})

export const ViewportProvider = ({ children }) => {
	// This is the exact same logic that we previously had in our hook
	const isBrowser = typeof window !== 'undefined'

	const [width, setWidth] = useState(isBrowser ? window.innerWidth : undefined)
	const [height, setHeight] = useState(isBrowser ? window.innerHeight : undefined)
	const [isMobile, setIsMobile] = useState(isBrowser ? (window.innerWidth < 768 ? true : false) : true)

	const handleWindowResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
		setIsMobile(window.innerWidth < 768 ? true : false)
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	/* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
	return <viewportContext.Provider value={{ width, height, isMobile }}>{children}</viewportContext.Provider>
}

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export const useViewport = () => {
	/* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
	const { width, height, isMobile } = useContext(viewportContext)
	return { width, height, isMobile }
}
