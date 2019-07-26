$(document).ready(function() {
        	$("#slider").bxSlider({

			  randomStart: true,
			  shrinkIteams: true,
			  speed: 300,

				//pagerSelector
			  pagerSelector: $('#pager'),
			  pagerType: "short",

			  auto: true,
			  minSlides: 1,
			  maxSlides: 1,
			  //slideWidth: 500,
			  slideMargin: 10
			});
    	});