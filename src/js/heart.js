document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	fillHearts()
} )

const fillHearts = () => {
	const cards = document.querySelectorAll( '.card' )
	const heart = document.querySelector( '.heart' )

	if( ! cards.length && ! heart ) return

	cards.forEach( card => {
		card.addEventListener('click', e => {
			const target = e.target
			const heart = target.closest('.heart')
		
			if( !heart ) return
		
			if (!heart.classList.contains('selected')) {
				heart.classList.add('selected')
		
			} else {
				heart.classList.remove('selected')
			}
		})
	} )
}

