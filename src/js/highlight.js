document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	navHighlighter()
	highLightScroll()
} )

const sections = document.querySelectorAll('section[id]');

const navHighlighter =() => {
	let scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		) {
			document.querySelector(".highlight_link[href*=" + sectionId + "]").classList.add('active')
		} else {
			document.querySelector(".highlight_link[href*=" + sectionId + "]").classList.remove('active')
		}
	})
}

window.addEventListener("scroll", navHighlighter)

const highLightScroll = () => {
	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY
		const highlight = document.querySelector('.highlight')

		if (!highlight) return

		if (scrollTop > 100) {
			if (!highlight.classList.contains('scrolled'))
				highlight.classList.add('scrolled')
		} else {
			highlight.classList.remove('scrolled')
		}
	})
}


