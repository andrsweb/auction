document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	// showModal('.modal', '.кнопка вызова модалки')
})

const showModal = (selector, modalBtn) => {
	const modal = document.querySelector(selector)
	const button = document.querySelector(button)
	const closeButton = document.querySelector('.modal__close')

	if (!modal && !button & !closeButton) return

	button.addEventListener('click', () => {
		if (!modal.classList.contains('showed')) {
			modal.classList.add('showed')
		} else modal.classList.remove('showed')
	})

	closeButton.addEventListener('click', () => {
		modal.classList.remove('showed')
	})
}

