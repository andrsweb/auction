document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMoreCards( '.show-more' )
} )

const showMoreCards = ( button ) => {
	const cardsButton = document.querySelector( button )

	if ( ! cardsButton ) return

	cardsButton.addEventListener( 'click', () => {
		const cards = document.querySelectorAll( '.buy__items_item:not(.visible)' )

		if ( ! cards.length ) {
			cardsButton.remove()
			return
		}

		for ( let i = 0; i < 3; i++ ) {
			if ( ! cards[i] ) break
			cards[i].classList.add( 'visible' )
		}

		if ( cards.length <= 8 ) cardsButton.remove()
	} )
}
