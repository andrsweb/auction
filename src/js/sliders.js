import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	swiperWithPagination( '.card-swiper' )
	swiperWithUI( '.works-swiper', 1, '.works-pagination', '.works-next', '.works-prev'  )
	swiperWithCustom( '.active-auc', 4, '.active-auc-pagination', '.active-next', '.active-prev'  )
	verticalSlider()
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

const swiperWithUI = ( selector, view, pag, next, prev ) => {

	const swiper = new Swiper( selector, {
		grabCursor: true,
		loop: true,
		slidesPerView: view,
		modules: [ Pagination, Navigation ],

		pagination: {
			el: pag,
			clickable: true,
			renderBullet: bullet
		},

		navigation: {
			nextEl: next,
			prevEl: prev
		}
	} )
}

const swiperWithCustom = ( selector, view, pag, next, prev ) => {

	const swiper = new Swiper( selector, {
		grabCursor: true,
		loop: true,
		slidesPerView: view,
		spaceBetween: 30,
		modules: [ Pagination, Navigation ],

		pagination: {
			el: pag,
			clickable: true,
		},

		navigation: {
			nextEl: next,
			prevEl: prev
		}
	} )
}

const verticalSlider = () => {
	const swiper = new Swiper( '.testi-swiper', {
		grabCursor: true,
		direction: 'vertical',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 50,
		modules: [ Pagination, Navigation, Autoplay ],

		autoplay: {
			delay: 2000,
		},
	} )
}

const bullet = (index, className) => {
	return '<span class="' + className +  '">' + (index + 1) + "</span>";
}