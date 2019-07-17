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
		smartSpeed: 900,
		autoplay: true,
		autoplayHoverPause: true,
		// autoHeight: true,
		dotsContainer: '.sel__in-dots',
		navText: ["<img src='img/slider__arrow_prev-black.png'>", "<img src='img/slider__arrow_next-black.png'>"],
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
					items: 1
			},
			380 : {
					items: 1
			},
			480 : {
					items: 1
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
	//hamb
	$(".hamburger__checkbox").change(function() {
		$('.header__menu').toggleClass('active');
		$('.hamburger__wrp').toggleClass('active');
	});
	//wow
	$(function() {
		new WOW().init();
	});
	// Tooltips
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	$("[data-toggle=popover]").popover({
		html : true,
		trigger: "hover focus",
		// delay: {
		// 		show: 100,
		// 		hide: 100
		// },
		show: function () {
				$(this).fadeIn('slow');
		},
		content: function() {
			var content = $(this).attr("data-popover-content");
			return $(content).children(".popover-body").html();
		}
	});
	//main offer
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
	
	//jquery slider
	$(".banner-filter__slider").slider({
		min: 0,
		max: 50000,
		values: [0,50000],
		range: true,
		stop: function(event, ui) {
		$("input.banner-filter__input_min").val($(".banner-filter__slider").slider("values",0));
		$("input.banner-filter__input_max").val($(".banner-filter__slider").slider("values",1));
		},
		slide: function(event, ui){
		$("input.banner-filter__input_min").val($(".banner-filter__slider").slider("values",0));
		$("input.banner-filter__input_max").val($(".banner-filter__slider").slider("values",1));
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
		$('.banner-filter__item').removeClass('acc__item');
	};
	$('.acc__item .acc__cnt').hide();
	$('.acc__item .acc__btn').on('click', function () {
		$(this).toggleClass('active').parent('.acc__item').siblings('.acc__cnt').slideToggle();
	});
});