import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showAsideMenu()
	showAsidesItems()
})

const showAsideMenu = () => {
	const button = document.querySelector('.auc__menu_arrow')
	const aside = document.querySelector('.all')

	if (!button && !menu) return

	button.addEventListener('click', () => {
		setTargetElement(document.querySelector('#aside-lock'))
		if (!aside.classList.contains('opened')) {
			aside.classList.add('opened')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		} else {
			aside.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})

	aside.addEventListener('click', e => {
		e.stopPropagation()

		const target = e.target

		if (target.className && target.classList.contains('auc__menu')) {
			aside.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})
}

const showAsidesItems = () => {
	const buttons = document.querySelectorAll('.auc__nav_item')
	
	if (!buttons.length) return

	buttons.forEach(button => {
		button.addEventListener('click', e => {
				if (!button.classList.contains('opened')) {
					button.classList.add('opened')
					button.style.backdropFilter = parseInt(button.style.backdropFilter)+'blur('+3+'px)';
				} else {
					button.classList.remove('opened')
				}
		})
	})
}