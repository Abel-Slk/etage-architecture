if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,

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