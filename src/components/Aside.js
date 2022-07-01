import React from 'react'
import './aside.scss'

const Aside = ({ position, children }) => {
	return <aside className={`${position} aside`}>{children}</aside>
}
export default Aside
