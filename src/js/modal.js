import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	// showModal('.modal', '.кнопка вызова модалки')
	regModal('.modal-reg_wrapper', '.call-reg')
})

const showModal = (selector, modalBtn) => {
	const modal = document.querySelector(selector)
	const button = document.querySelector(modalBtn)
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

const regModal = (selector, btn) => {
	const modal = document.querySelector(selector)
	const button = document.querySelector(btn)
	setTargetElement(document.querySelector('#reg-lock'))

	if (!modal && !button ) return

	button.addEventListener('click', () => {
		if (!modal.classList.contains('showed')) {
			modal.classList.add('showed')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		} else {
			modal.classList.remove('showed')
			enableBodyScroll(getTargetElement())
		} 
	})

	window.addEventListener('click', e => {
		e.stopPropagation()

		const target = e.target

		if (target.className && target.classList.contains('modal-reg_wrapper')) {
			modal.classList.remove('showed')
			enableBodyScroll(getTargetElement())
		}
	})
}

