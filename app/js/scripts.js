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
		navText: ["<img src='img/slider__arrow_prev-gray.png'>", "<img src='img/slider__arrow_next-gray.png'>"],
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
		margin: 15,
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
	//hamb
	$(".hamburger__checkbox").change(function() {
		$('.header__menu').toggleClass('active');
	});
	//wow
	$(function() {
		new WOW().init();
	});
});