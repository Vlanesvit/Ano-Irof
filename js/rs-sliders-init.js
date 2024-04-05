/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-news__button-prev');
			const arrowNext = slider.querySelector('.rs-news__button-next');
			const pagination = slider.querySelector('.rs-news__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Кол-во показываемых слайдов
				slidesPerView: 1,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
				},
			});

			swiperMain.on('slideChangeTransitionStart', function () {
				const activeSlide = slider.querySelector('.swiper-slide-active');

				if (activeSlide.classList.contains('rs-slider__dark-theme')) {
					document.documentElement.classList.add("_dark-theme");
				} else {
					document.documentElement.classList.remove("_dark-theme");
				}
			});
		});
	}

	if (document.querySelector('.rs-slider-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider-block__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-slider-block__button-prev');
			const arrowNext = slider.querySelector('.rs-slider-block__button-next');
			const pagination = slider.querySelector('.rs-slider-block__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.215,
						spaceBetween: 24,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-project__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-project__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-project__button-prev');
			const arrowNext = slider.querySelector('.rs-project__button-next');
			const pagination = slider.querySelector('.rs-project__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.215,
						spaceBetween: 24,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					}, 
					1439.98: {
						slidesPerView: 3,
						spaceBetween: 65,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});