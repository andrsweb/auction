document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showAndHidePassword()
})

const showAndHidePassword = () => {
	const eyeWrappers = document.querySelectorAll('.eye__wrapper')
	const inputs = document.querySelectorAll('.password-input')

	if (!eyeWrappers.length && !input) return

	eyeWrappers.forEach(eyeWrapper => {
		eyeWrapper.addEventListener('click', () => {
			if (!eyeWrapper.classList.contains('showed')) {
				eyeWrapper.classList.add('showed')
				inputs.forEach(input => {
					input.type = 'text'
				})
				
			} else {
				eyeWrapper.classList.remove('showed')
				inputs.forEach(input => {
					input.type = 'password'
				})
			}
		})
	})
}