let windowHeight = window.innerHeight

window.addEventListener('resize', () => {
	windowHeight = window.innerHeight
} )

export const getWindowHeight = () => windowHeight


export const numberWithDots = x => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export const isInScope = ( elementSelector, st, offset = 0 ) => {
	const element  = document.querySelector( elementSelector )
	if ( ! element) return
	let bodyRect  = document.body.getBoundingClientRect(),
		elemRect  = element.getBoundingClientRect(),
		elemTop    = elemRect.top - bodyRect.top

	if( ! element ) return

	if(
		st >= ( elemTop - getWindowHeight() + offset ) &&
		st <= ( elemTop + element.clientHeight - offset )
	) return true

    return false
}