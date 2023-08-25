import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	// showModal('.modal', '.кнопка вызова модалки')
	regModal('.modal-reg_wrapper', '.call-reg')
	changeModalForms()
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

const changeModalForms = () => {
	const phoneBtn = document.querySelector('.phone-button')
	const emailBtn = document.querySelector('.email-button')
	const regBtn = document.querySelector('.registration')
	const enterBtn = document.querySelector('.enter')
	const enterText = document.querySelector('.enter-text')
	const regText = document.querySelector('.reg-text')
	const enterForm = document.querySelector('.enter-form')
	const mainForm = document.querySelector('.modal-reg_main')
	const emailReg = document.querySelector('.email-registration_wrapper')
	const phoneReg = document.querySelector('.phone-registration_wrapper')
	const servicesReg = document.querySelector('.services_text-reg')
	const servicesEnter = document.querySelector('.services_text-enter')
	const showTip = document.querySelector('.show-tip')
	const hiddenTip = document.querySelector('.hidden__tip')

	if(
		!phoneBtn && !emailBtn && !regBtn && !enterBtn && !enterText &&
		!regText && !enterForm && !mainForm && !emailReg && !phoneReg &&
		!servicesReg && !servicesEnter && !showTip && !hiddenTip
	) return

	phoneBtn.addEventListener('click', () => {
		emailReg.style.display = "none"
		phoneReg.style.display = "block"
	})

	emailBtn.addEventListener('click', () => {
		emailReg.style.display = "block"
		phoneReg.style.display = "none"
	})

	enterBtn.addEventListener('click', () => {
		enterForm.style.display = "block"
		mainForm.style.display = "none"
		enterText.style.display = "none"
		regText.style.display = "block"
		servicesReg.style.display = "none"
		servicesEnter.style.display = "block"
	})

	regBtn.addEventListener('click', () => {
		enterForm.style.display = "none"
		mainForm.style.display = "block"
		enterText.style.display = "block"
		regText.style.display = "none"
		servicesReg.style.display = "block"
		servicesEnter.style.display = "none"
	})

	showTip.addEventListener('click', () => {
		if(!hiddenTip.classList.contains('showed')) hiddenTip.classList.add('showed')
		else hiddenTip.classList.remove('showed')
	})
}

