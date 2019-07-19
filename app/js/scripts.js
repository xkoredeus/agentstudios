$(function() {
	//preloader
	$(window).on('load', function () {
			$('.preloader').fadeOut();
	});

	//selections slider
	$('.sel__in').owlCarousel({
		nav: true,
		items: 1,
		loop: true,
		dots: true,
		margin: 20,
		smartSpeed: 900,
		autoplay: true,
		autoplayHoverPause: true,
		
		
		navText: ["<img src='img/slider__arrow_prev-black.png'>", "<img src='img/slider__arrow_next-black.png'>"],
		responsive : {
			0   : {
					nav: false,
					autoHeight: true,
			},
			1200 : {
					nav: true,
					dotsContainer: '.sel__in-dots',
			}
		}
	});
	//scroll by click 'next btn'
	$('.sel_next').on('click', function(e) {
		e.preventDefault();
		$('.sel__in .owl-next').trigger('click');
	});
	//announcements slider
	$('.ann__in').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
			return;
		}
		var carousel = e.relatedTarget;
		$('.ann__in-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	});
	$('.ann__in').owlCarousel({
		nav: true,
		loop: false,
		dots: true,
		smartSpeed: 900,
		autoplay: true,
		autoplayHoverPause: true,
		margin: 30,
		dotsContainer: '.ann__in-dots',
		navText: ["<img src='img/slider__arrow_prev-gray.png'>", "<img src='img/slider__arrow_next-gray.png'>"],
		responsive : {
			0   : {
					items: 1,
					// autoHeight: true,
			},
			768 : {
					items: 3
			},
			1040 : {
					items: 4
			}
		}
	});
	$('.ann__item-descr span:nth-child(2)').hide();
	$('.ann__item-btn').on('click', function(e) {
		e.preventDefault();
		$(this).hide().siblings('.ann__item-descr').find('span:nth-child(2)').slideToggle();
	});
	// tabs 
	$(document).ready(function () {
		$(".tabs__content-item:not(:first-child)").hide();
		$(".tabs__container div.tabs__content-item.active-tab").show();
		$('ul.tabs__list > li').click(function () {
			if (!($(this).hasClass('active'))) {
				var thisLi = $(this);
				var numLi = thisLi.index();
				thisLi.addClass('active').siblings().removeClass('active');
				thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
			}
		});
	});
	//anchors
	$('.anchor-link').on('click', function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 800);
	});
	//cab link
	$('.header__cab-top').on('click', function (e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
	})
	$(document).on('click', function (e) {
		var container = $('.header__cab');

		// if the target of the click isn't the container nor a descendant of the container
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
				container.removeClass('active')
		}
	});
	//hamb
	$(".hamburger__checkbox").change(function() {
		$('.header__menu').toggleClass('active');
		$('.hamburger__wrp').toggleClass('active');
		if ( $(window).width() < 1200 ) {
			$('body').toggleClass('fixed');
		}
	});
	//wow
	$(function() {
		new WOW().init();
	});
	// Tooltips
	if ( $(window).width() > 1200 ) {
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();
		});
	};
	$('.pop-popup').hide();
	$('.pop__item-rate').on('click', function(){
		$(this).parents('.pop__item-wrp').toggleClass('hover').find('.pop-popup').slideToggle();
	});
	$('.pop-popup__close').on('click', function(){
		$(this).parents('.pop__item-wrp').toggleClass('hover').find('.pop-popup').slideToggle();
	});
	// $(document).on('click', function (e) {
	// 	var container2 = $('.pop-popup');
	// 	// if the target of the click isn't the container nor a descendant of the container
	// 	if (!container2.is(e.target) && container2.has(e.target).length === 0) 
	// 	{
	// 			container2.hide();
	// 			$('.pop__item-wrp2').removeClass('hover');
	// 	}
	// });
	if ( $(window).width() < 1200 ) {
		$('.pop__list').removeClass('row').addClass('owl-carousel');
		$('.pop__item-wrp').removeClass('col-xl-4 col-sm-6');

		$('.pop__list').owlCarousel({
			nav: false,
			// items: 2,
			loop: true,
			smartSpeed: 700,
			margin: 20,
			dots: true,
			responsive : {
				0   : {
						items: 1
				},
				380 : {
						items: 1
				},
				480 : {
						items: 1
				},
				768 : {
						items: 2
				},
				1040 : {
						items: 3
				}
			}
	 });
	};
	$('.pop__item-rate').hover
	//main offer
	if ( $(window).width() > 1200 ) {
		$('.banner__bar-btn').on('click',function(e){
			e.preventDefault();
			$('.banner-filter__wrp').slideToggle();
			$(this).toggleClass('active').parents('.banner__offer').toggleClass('filter-open');
		});
		$('.banner-filter__top-btn').on('click',function(e){
			e.preventDefault();
			$('.banner-filter__wrp').slideToggle();
			$('.banner__bar-btn').removeClass('active');
			$(this).parents('.banner__offer').toggleClass('filter-open');
		});
	};
	if ( $(window).width() < 1200 ) {
		$('.banner-filter__top-btn').on('click', function () {
			$.fancybox.close();
		});
		$('.banner-filter__act').hide();
		$('.banner-filter input').on('input', function(){
			$('.banner-filter__act').slideDown();
		});
	};
	//jquery slider
	$(".banner-filter__slider").slider({
		min: 0,
		max: 50000,
		values: [0,50000],
		range: true,
		stop: function(event, ui) {
		$("input.banner-filter__input_min").val($(".banner-filter__slider").slider("values",0));
		$("input.banner-filter__input_max").val($(".banner-filter__slider").slider("values",1));
			$('.banner-filter__act').slideDown();
		},
		slide: function(event, ui){
		$("input.banner-filter__input_min").val($(".banner-filter__slider").slider("values",0));
		$("input.banner-filter__input_max").val($(".banner-filter__slider").slider("values",1));
			$('.banner-filter__act').slideDown();
		}
	});
	$("input.banner-filter__input_min").on('input', function(){
		var value1=$("input.banner-filter__input_min").val();
		var value2=$("input.banner-filter__input_max").val();

			if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input.banner-filter__input_min").val(value1);
		}
		$(".banner-filter__slider").slider("values",0,value1);
	});
	$("input.banner-filter__input_max").on( 'input', function() {
		var value1=$("input.banner-filter__input_min").val();
		var value2=$("input.banner-filter__input_max").val();
		
		if (value2 > 50000) { value2 = 50000; $("input.banner-filter__input_max").val(50000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input.banner-filter__input_max").val(value2);
		}
		$(".banner-filter__slider").slider("values",1,value2);
	});
	//accordeon
	if ( $(window).width() > 768 ) {
		$('.banner-filter__item').parent().removeClass('acc__item-wrp');
	};
	$('.acc__item-wrp .acc__cnt').hide();
	$('.acc__item-wrp .acc__btn').on('click', function () {
		$(this).toggleClass('active').parents('.acc__item-wrp').find('.acc__cnt').slideToggle();
	});
});