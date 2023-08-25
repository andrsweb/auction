import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	cardSwiper('.card-swiper')
	swiperWithUI('.works-swiper', 1, '.works-pagination', '.works-next', '.works-prev')
	otherLotsSwiper('.other-lots')
	swiperWithCustom('.active-auc', '.active-auc-pagination', '.active-next', '.active-prev')
	verticalSlider()
	activeSwiper( '.active-lot-swiper', '.active-lot-pagination')
	activeSwiper( '.modal-reg-swiper', '.modal-reg-pagination')
	myLotsSwiper()
	imageSwiper()
})

const imageSwiper = () => {
	const swiper = new Swiper('.image-swiper', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		grabCursor: true,
		loop: true,
		spaceBetween: 30,

		modules: [Pagination],

			pagination: {
				el: '.image-pagination',
				clickable: true,
			}
	})
}

const myLotsSwiper = () => {
	const swiper = new Swiper('.my-lots-swiper', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		grabCursor: true,
		loop: true,
		spaceBetween: 30
	})
}

const activeSwiper = (selector, pag) => {
	const swiper = new Swiper(selector, {
		grabCursor: true,
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		modules: [Pagination],

		pagination: {
			el: pag,
			clickable: true,
		}
	})
}

const cardSwiper = () => {
	let swipers = document.querySelectorAll('.card-swiper')

	swipers.forEach(slider => {
		const swiper = new Swiper(slider, {
			grabCursor: true,
			loop: true,
			modules: [Pagination],

			pagination: {
				el: '.card-pagination',
				clickable: true,
			},
		})
	})
}

const swiperWithUI = (selector, view, pag, next, prev) => {

	const swiper = new Swiper(selector, {
		grabCursor: true,
		loop: true,
		slidesPerView: view,
		modules: [Pagination, Navigation],

		pagination: {
			el: pag,
			clickable: true,
			renderBullet: bullet
		},

		navigation: {
			nextEl: next,
			prevEl: prev
		}
	})
}

const swiperWithCustom = (selector, pag, next, prev) => {

	const swiper = new Swiper(selector, {
		grabCursor: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		modules: [Pagination, Navigation],

		pagination: {
			el: pag,
			clickable: true,
		},

		navigation: {
			nextEl: next,
			prevEl: prev
		}
	})

	const slideTo = (selector, num) => {
		const button = document.querySelector(selector)
		button.addEventListener( 'click', () => {
			swiper.slideTo(num)
		})
	}
	slideTo( '.gadget', 1)
	slideTo( '.tech', 2)
	slideTo( '.value', 3)
	slideTo( '.cert', 4)
}

const otherLotsSwiper = (selector) => {
	const swiper = new Swiper(selector, {
		grabCursor: true,
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 30
	})
}
const verticalSlider = () => {
	const swiper = new Swiper('.testi-swiper', {
		grabCursor: true,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 50,
		modules: [Pagination, Navigation, Autoplay],

		breakpoints: {
			320: {
				slidesPerView: 1,
				direction: 'horizontal',
			},

			568: {
				slidesPerView: 2,
			},

			992: {
				slidesPerView: 3,
				direction: 'vertical',
			}
		},

		pagination: {
			el: '.testi-pagination',
			clickable: true,
		},

		autoplay: {
			delay: 2000,
		},
	})
}

const bullet = (index, className) => {
	return '<span class="' + className + '">' + (index + 1) + "</span>";
}