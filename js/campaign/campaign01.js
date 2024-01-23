$(document).ready(function () {
	const scrollThreshold = 300;

	$(window).scroll(function () {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition > scrollThreshold) {
			$('.r-s-intro').css({
				opacity: '1',
				transition: 'all 1s ease-out',
			});
		} else {
			$('.r-s-intro').css({
				opacity: '0',
				transition: 'all 0.5s ease-out',
			});
		}
	});
});

$(function () {
	const swiper1 = new Swiper('.mySwiper1', {
		// slidesPerView: 3,
		// spaceBetween: 50,
		freeMode: true,
		autoplay: {
			delay: 2000,
			loop: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// direction: 'vertical',
	});
	//swiper안에 Breakpoints를 쓰면 한번 실행 후엔 실행한 결과가 돌아오지 않음
	//그래서 onResize() 메소드를 사용
	$(window)
		.on('resize', function () {
			const width = $(window).width();
			if (width > 476) {
				swiper1.params.slidesPerView = 3;
				swiper1.params.spaceBetween = 30;
			} else {
				swiper1.params.slidesPerView = 1;
				swiper1.params.spaceBetween = 30;
			}
			swiper1.onResize();
		})
		.resize();
});

const swiper2 = new Swiper('.mySwiper2', {
	effect: 'cube',
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

$(document).ready(function () {
	const scrollThreshold = 1000;
	console.log(scrollThreshold);

	$(window).scroll(function () {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition > scrollThreshold) {
			$('.showCampagin-section').addClass('visible');
		} else {
			$('.showCampagin-section').removeClass('visible');
		}
	});
});
