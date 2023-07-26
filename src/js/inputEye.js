document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showAndHidePassword()
})

const showAndHidePassword = () => {
	const eyeWrapper = document.querySelector( '.eye__wrapper')
	const input      = document.querySelector( '.password-input')

	eyeWrapper.addEventListener( 'click', () => {
		if(!eyeWrapper.classList.contains('showed')) {
			eyeWrapper.classList.add('showed')
			input.type = 'text'
		} else {
			eyeWrapper.classList.remove('showed')
			input.type = 'password'
		}
	})
}