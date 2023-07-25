document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	changeButtonText()
})

const changeButtonText = () => {
	const buttons = document.querySelectorAll('.button_card')

	if (!buttons.length) return

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			if (!button.classList.contains('clicked')) {
				button.classList.add('clicked')
				button.textContent = 'Вы участвуете'
			} else {
				button.classList.remove('clicked')
				button.textContent = 'Участвовать'
			} 
		})
	})
}