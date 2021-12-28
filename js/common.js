$(function () {

	$('.tile-slider').slick({
		dots: false,
		arrows: true, //화살표 사용여부
		prevArrow: $('.fa-caret-left'), //이전 화살표
		nextArrow: $('.fa-caret-right'), //다음 화살표
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		infinite: true,
		slidesToShow: 1, //보여질 슬라이드 갯수
		slidesToScroll: 1, //넘겨질 슬라이드 갯수

		// responsive: [//반응형여부
		//
		// 	{
		// 		breakpoints: 480, //해상도 브레이크 포인트 설정
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			dots: false,
		// 			infinite: true,
		//
		// 			// arrows: false,
		//
		// 			prevArrow:false,
		// 			nextArrow: false,
		// 		}
		// 	},{
		// 		breakpoints:600, //해상도 브레이크 포인트 설정
		// 		settings:{
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			dots: false,
		// 			infinite:true,
		// 		}
		// 	}
		// ]

	});

	$('.video-slider').slick({
		dots: true,
		arrows: false, //화살표 사용여부
		fade: false,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1500,
		infinite: true,
		slidesToShow: 1, //보여질 슬라이드 갯수
		slidesToScroll: 1, //넘겨질 슬라이드 갯수
	})

	$('.product-menu li').click(function (){
		$(this).addClass('active').siblings().removeClass('active');

		const value = $(this).attr('data-value');
		$('.item-box').removeClass('active');
		$('.'+ value).addClass('active');
	})
});
