if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,

		// lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,

		prevArrow: $('.prev'),
		nextArrow: $('.next'),

		// appendArrows:$('.slider-arrows ._container'),

		// nextArrow:'<button type="button" class="slick-next _container"></button>',
		// prevArrow:'<button type="button" class="slick-prev _container"></button>',

		responsive:[
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});
}