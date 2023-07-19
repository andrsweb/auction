document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	fillHearts('.card', '.card__heart', '.card__heart' )
	fillHearts('.button.transparent', '.heart', '.button__heart' )
} )

const fillHearts = ( selector, img, closest ) => {
	const cards = document.querySelectorAll( selector )
	const heart = document.querySelector( img )

	if( ! cards.length && ! heart ) return

	cards.forEach( card => {
		card.addEventListener('click', e => {
			const target = e.target
			const heart = target.closest( closest)
		
			if( !heart ) return
		
			if (!heart.classList.contains('selected')) {
				heart.classList.add('selected')
		
			} else {
				heart.classList.remove('selected')
			}
		})
	} )
}

