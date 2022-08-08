import * as React from 'react'
import NavLinks from './NavLinks'
import './menu.scss'
import DarkModeToggle from './ThemeToggle'
import LangSwitcher from '../components/LangSwitcher'


const Menu = () => {
	const [menuToggle, setMenuToggle] = React.useState(false)
	return (
		<>
				<nav className={`menu`}>
					<NavLinks handleToggle={() => setMenuToggle(!menuToggle)} />
				</nav>
				<button
					className={`burger_menu cursorFrame burger ${menuToggle ? ' is-opened' : ''}`}
					onClick={() => setMenuToggle(!menuToggle)}
					aria-label='Menu toggle'
					role='switch'
					aria-checked={menuToggle}
					type='button'
				>
					<span className='burger__line'></span>
					<span className='burger__line'></span>
					<span className='burger__line'></span>
				</button>
				<nav className={`menu-mobile ${menuToggle ? ' is-opened' : ''}`}>
					<NavLinks handleToggle={() => setMenuToggle(!menuToggle)} />
					<DarkModeToggle />
					<LangSwitcher />
				</nav>
		</>
	)
}
export default Menu
