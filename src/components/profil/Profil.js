import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import useDarkMode from 'use-dark-mode'
import { colors } from '../../config'
import './profil.scss'

function sketch(p5) {
	const particles = []
	let color, dataX, dataY
	let resolution
	let dispersion
	let frame = 0
	let direction = 1

	p5.setup = () => {
		p5.disableFriendlyErrors = true
		p5.createCanvas(document.querySelector('.profilCanvas').offsetWidth, document.querySelector('.profilCanvas').offsetWidth, p5.P2D)
		p5.noStroke()
		p5.frameRate(30)
		p5.describe('Mon portrait animé fait de points')
	}

	p5.updateWithProps = (props) => {
		color = props.darkMode ? colors.accentdark : colors.accentlight
		resolution = props.res
		dispersion = resolution / 4
		if (resolution) p5.resizeCanvas(resolution, resolution)

		import(`./${props.darkMode ? 'dark' : 'light'}/data`)
			.then((module) => {
				dataX = module.X
				dataY = module.Y
			})
			.then(() => {
				placeParticles()
			})
	}
	p5.draw = () => {
		if (dataX && dataY) {
			p5.clear()
			p5.fill(color)
			if (frame >= Object.keys(dataX).length - 1) direction = -1
			else if (frame <= 0) direction = 1
			frame += direction
			for (let i = 0; i < particles.length; i++) {
				particles[i].update()
				particles[i].draw()
			}
		}
	}

	function placeParticles() {
		particles.length = 0
		for (let i = 0; i < dataX[0].length; i++) {
			particles.push(new Particle((dataX[0][i] / 1000) * resolution, (dataY[0][i] / 1000) * resolution, i))
		}
	}

	class Particle {
		constructor(x, y, index) {
			this.x = x
			this.y = y
			this.index = index
			this.randomX = Math.random() * dispersion - dispersion / 2
			this.randomY = Math.random() * dispersion - dispersion / 2
			this.currentvx = 0
			this.currentvy = 0
		}

		update() {
			this.x = (dataX[frame][this.index] * resolution) / 1000
			this.y = (dataY[frame][this.index] * resolution) / 1000

			const mouseD = Math.hypot(p5.mouseX - this.x, p5.mouseY - this.y)
			const mouseF = p5.map(mouseD, resolution, 0, 0.7, 1.1)

			this.size = Math.min(Math.max(p5.map(mouseD, 800, 0, 1, resolution / 175), 1.5), resolution / 150)
			this.x -= this.randomX - this.randomX * Math.min(Math.max(mouseF, 0), 1) - this.currentvx
			this.y -= this.randomY - this.randomY * Math.min(Math.max(mouseF, 0), 1) - this.currentvy
		}

		draw() {
			p5.ellipse(this.x, this.y, this.size, this.size)
		}
	}
}

const Profil = () => {
	const isBrowser = typeof window !== 'undefined'
	const [load, setLoad] = React.useState(false)
	const [canvasWidth, setCanvasWidth] = React.useState()
	const darkMode = useDarkMode(false)

	React.useEffect(() => {
		if (window.innerWidth > 1050 && document.querySelector('.profilCanvas') !== null) {
			const handleResize = () => {
				if (document.querySelector('.profilCanvas') !== null) setCanvasWidth(document.querySelector('.profilCanvas').offsetWidth)
			}
			window.addEventListener('resize', handleResize)
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	})

	React.useEffect(() => {
		setLoad(true)
		setCanvasWidth(document.querySelector('.profilCanvas').offsetWidth)
	}, [])

	return (
		<div className={`profilCanvas select-none ${load && 'loaded'}`}>
			<ReactP5Wrapper sketch={sketch} darkMode={darkMode.value} res={canvasWidth} />
		</div>
	)
}
export default Profil
