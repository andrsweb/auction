import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	swiperWithPagination( '.card-swiper' )
	swiperWithUI( '.works-swiper' )
} )

const swiperWithPagination = () => {
	let swipers = document.querySelectorAll( '.card-swiper' )

	swipers.forEach( slider => {
		const swiper = new Swiper( slider, {
			grabCursor: true,
			loop: true,
			modules: [ Pagination ],
	
			pagination: {
				el: '.card-pagination',
				clickable: true,
			},
		} )
	} )
}

const swiperWithUI = ( selector ) => {

	const swiper = new Swiper( selector, {
		grabCursor: true,
		loop: true,
		modules: [ Pagination, Navigation ],

		pagination: {
			el: '.works-pagination',
			clickable: true,
			renderBullet: bullet
		},

		navigation: {
			nextEl: '.works-next',
			prevEl: '.works-prev'
		}
	} )
}

const bullet = (index, className) => {
	return '<span class="' + className +  '">' + (index + 1) + "</span>";
}