import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	swiperWithPagination()
} )

const swiperWithPagination = () => {

	const swiper = new Swiper('.works-swiper', {
		grabCursor: true,
		loop: true,
		modules: [ Pagination ],

		pagination: {
			el: '.card-pagination',
			clickable: true,
		},
	} )
}