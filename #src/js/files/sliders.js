if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,

		fade: true,
		cssEase: 'linear',

		slidesToShow: 1,
		slidesToScroll: 1,

		prevArrow: $('.prev'),
		nextArrow: $('.next'),

		responsive:[
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});
}
if($('.slider-mobile').length>0){
	$('.slider-mobile').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,

		fade: true,
		cssEase: 'linear',

		// slidesToShow: 1,
		// slidesToScroll: 1,

		responsive:[
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});
}

if($('.slider-mobile-gallery').length>0){
	$('.slider-mobile-gallery').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 800,
		autoplay: false,
		autoplaySpeed: 5000,

		// centerMode: true,

		// slidesToShow: 1,
		// slidesToScroll: 1,

		responsive:[
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});
}