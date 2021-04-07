if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,

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