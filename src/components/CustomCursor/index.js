import React from 'react'
import './style.scss'
// import { useViewport } from '../../hooks/useViewport'

const CustomCursor = () => {
	// let { width } = useViewport()
	const dot = React.useRef()
	const positionRef = React.useRef({
		mouseX: -100,
		mouseY: -100,
		currentX: 0,
		currentY: 0,
		width: 30,
		height: 30,
		currentWidth: 30,
		currentHeight: 30,
		radius: 30,
		hoveringLink: false,
		key: -1,
	})

	const handleMove = (event) => {
		if (!positionRef.current.hoveringLink) {
			const { clientX, clientY } = event
			positionRef.current.mouseX = clientX - dot.current.clientWidth / 2
			positionRef.current.mouseY = clientY - dot.current.clientHeight / 2
		}
	}
	const handleClick = (event) => {
		const { clientX, clientY } = event
		const div = document.createElement('div')
		div.className = 'cursor-click'
		div.style.left = clientX + 'px'
		div.style.top = clientY + 'px'
		document.body.appendChild(div)
		setTimeout(() => {
			document.body.removeChild(div)
		}, 1000)
	}
	const handleEnter = (event) => {
		const { width, height, top, left } = event.target.getBoundingClientRect()
		positionRef.current.hoveringLink = true
		positionRef.current.mouseX = left - 6
		positionRef.current.mouseY = top - 6
		positionRef.current.width = width + 12
		positionRef.current.height = height + 12
		positionRef.current.radius = 5
	}
	const handleOut = () => {
		positionRef.current.hoveringLink = false
		positionRef.current.width = 30
		positionRef.current.height = 30
		positionRef.current.radius = 30
	}
	React.useEffect(() => {
		document.addEventListener('mousemove', handleMove)
		document.addEventListener('click', handleClick)
		document.querySelectorAll('.cursorFrame, a').forEach((link) => {
			link.addEventListener('mouseenter', handleEnter)
			link.addEventListener('mouseleave', handleOut)
		})

		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse)
			const { mouseX, mouseY, currentX, currentY, width, height, currentWidth, currentHeight, radius } = positionRef.current

			positionRef.current.currentX = lerp(currentX, mouseX, 0.1)
			positionRef.current.currentY = lerp(currentY, mouseY, 0.1)
			positionRef.current.currentWidth = lerp(currentWidth, width, 0.1)
			positionRef.current.currentHeight = lerp(currentHeight, height, 0.1)

			if (dot.current) {
				dot.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
				dot.current.style.width = currentWidth + 'px'
				dot.current.style.height = currentHeight + 'px'
				dot.current.style.borderRadius = radius + 'px'
			}
		}
		followMouse()

		return () => {
			document.removeEventListener('mousemove', handleMove)
			document.querySelectorAll('.cursorFrame, a').forEach((link) => {
				link.removeEventListener('mouseover', handleEnter)
				link.removeEventListener('mouseout', handleOut)
			})
		}
	}, [])

	function lerp(start, end, amt) {
		return (1 - amt) * start + amt * end
	}

	return (
		<div className={`cursor-wrapper`}>
			<div className='secondary-cursor' ref={dot}>
				<div className='cursor-background'></div>
			</div>
		</div>
	)
}

export default CustomCursor
