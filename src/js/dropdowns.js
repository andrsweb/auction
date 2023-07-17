document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toogleDropdown()
	toggleShowMore()
})

const toogleDropdown = () => {
	const dropdowns = document.querySelectorAll('.dropdown')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => {
		if (dropdown.classList.contains('opened'))
			reCalculateDropdownHeight(dropdown)
	})

	dropdowns.forEach(dropdown => {
		dropdown.addEventListener('click', () => {
			const dropdownOpen = dropdown.querySelector('.dropdown-open')

			if (!dropdown.classList.contains('opened')) {
				dropdown.classList.add('opened')
				reCalculateDropdownHeight(dropdown)
			}
			else {
				dropdown.classList.remove('opened')
				dropdownOpen.style.height = '0'
			}
		})
	})
}

window.addEventListener('resize', () => {
	const dropdowns = document.querySelectorAll('.dropdown.opened')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

const reCalculateDropdownHeight = dropdown => {
	const dropdownOpen = dropdown.querySelector('.dropdown-open'),
		dropdownInner = dropdown.querySelector('.dropdown-inner')

	if (!dropdownOpen || !dropdownInner) return

	dropdownOpen.style.height = `${dropdownInner.getBoundingClientRect().height}px`
}

document.addEventListener('DOMContentLoaded', () => {
	'use strict'


})

const toggleShowMore = () => {
	const button = document.querySelector('.show-more-dropdowns'),
		list = document.querySelector('.more-dropdowns')

	if (!button || !list) return

	button.addEventListener('click', () => {
		if (!list.classList.contains('more')) {
			list.classList.add('more')
			button.textContent = 'Cвернуть'
		} else {
			list.classList.remove('more')
			button.textContent = 'Показать еще...'
		}
	})
}