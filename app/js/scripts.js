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
    $(this).parents('.pop__item-wrp').toggleClass('hover').find('.pop-popup').slideToggle(300,function() {
      $(this).parents('.pop__item-wrp').toggleClass('anim');
    });
  });
  $('.pop-popup__close').on('click', function(){
    $(this).parents('.pop__item-wrp').toggleClass('hover').find('.pop-popup').slideToggle(100,function() {
      $(this).parents('.pop__item-wrp').toggleClass('anim');
    });
  });

  $('.room__rate-in').hide();
  $('.room__rate-top').on('click', function(){
    $(this).parents('.room__rate').toggleClass('hover').find('.room__rate-in').slideToggle(300,function() {
      $(this).parents('.room__rate').toggleClass('anim');
    });
  });

  //anchors
  $('.anchor-link').on('click', function(e) {
    $(this).parents('.room__rate').toggleClass('hover anim').find('.room__rate-in').slideToggle();
       e.preventDefault();
       var id  = $(this).attr('href'),
          top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 600);
  });
  $('.pop-popup__close').on('click', function(){
    $(this).parents('.room__rate').toggleClass('hover').find('.room__rate-in').slideToggle();
  });

  $('.search__item-bot').hide();
  $('.search__item-more').on('click', function(){
    $(this).parents('.search__item').toggleClass('active').find('.search__item-bot').slideToggle();
  });
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
    $('.search__filter-act').hide();
    $('.search__filter input').on('input', function(){
      $('.search__filter-act').slideDown();
    });
    $('.search__filter select').change(function(){
      $('.search__filter-act').slideDown();
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
  $('.res-card__top').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    dots: false,
    margin: 20,
    smartSpeed: 900,
    // autoplay: true,
    // autoplayHoverPause: true,
    navText: ["<img src='img/slider__arrow_prev-white.png'>", "<img src='img/slider__arrow_next-white.png'>"]
  });

  $('.res-card__bot-descr span:nth-child(2)').hide();
  $('.res-card__bot-more').on('click', function(e) {
    e.preventDefault();
    $(this).hide().siblings('.res-card__bot-descr').find('span:nth-child(2)').slideToggle();
  });
  $('.res-card__bot-arr').on('click', function() {
    $(this).parents('.res-card__bot').toggleClass('active').find('span:nth-child(2)').slideToggle();
  });
  

  $('.res-card__bot-check').on('click', function(e) {
    e.preventDefault();
    $('.res-card').removeClass('checked');
    $(this).parents('.res-card').addClass('checked');
  });

  ////input type number
  $( '.quantity' ).on( 'click', '.quantity-minus, .quantity-plus', function () {
  var input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });

  //room slider
  var sync1 = $('.room__card-slider_top');
  var sync2 = $('.room__card-slider_bot');

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
    startPosition: 1,
    items:1,
    loop:false,
    margin:10,
    smartSpeed: 700,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    nav: true,
    navText: ["<img src='img/slider__arrow_prev-white.png'>", "<img src='img/slider__arrow_next-white.png'>"],
    dots: false
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 1,
    loop:false,
    margin: 10,
    autoplay:false,
    nav: false,
    dots: false,
    mouseDrag: true,
    responsive : {
      0   : {
          items: 1,
      },
      380 : {
          items: 1,
      },
      480 : {
          items: 1,
      },
      768 : {
          items: 3,
      },
      1040 : {
          items: 4,
      }
    },
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });
  $('.room__gallery-in').owlCarousel({
    nav: true,
    loop: true,
    smartSpeed: 700,
    margin: 20,
    dots: false,
    mouseDrag: false,
    navText: ["<img src='img/slider__arrow_prev-white.png'>", "<img src='img/slider__arrow_next-white.png'>"],
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
  $('.room__in-slider').owlCarousel({
    nav: true,
    loop: true,
    items: 1,
    smartSpeed: 700,
    margin: 20,
    dots: false,
    mouseDrag: false,
    navText: ["<img src='img/slider__arrow_prev-white.png'>", "<img src='img/slider__arrow_next-white.png'>"],
  });
  $('.popup__close').on('click', function(){
    $.fancybox.close();
  });
  $('[data-fancybox]').fancybox({
    animationDuration : 600,
    animationEffect   : 'slide-in-out',
    touch : false
  });
  if ( $(window).width() > 1200 ) {
    $('.banner__bar-act-link').removeAttr("data-fancybox");
  };
  $('.popup__search-btn').on('click', function () {
    $.fancybox.close();
  });
  //selects
  $('.selectmenu').selectmenu();
  $('.search__filter').on('mousewheel', function(){
    $(this).find('.selectmenu').selectmenu( 'close' );
  })
  //datepicker
  $('.datepicker').datepicker();
});
$(document).ready(function(){
  if ( $(window).width() > 1200 ) {
    $('.paym__select').selectmenu();
  };
});
$(document).ready(function(){

    function makeTimer() {

    var endTime = new Date("29 Noveber 2019 9:56:00 GMT+04:00");
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#paym__timer-item-min").html("<div class='paym__timer-item-val'>" + minutes + "</div>" + "<div class='paym__timer-item-ttl'>минуты</div>");
    $("#paym__timer-item-sec").html("<div class='paym__timer-item-val'>" + seconds + "</div>" + "<div class='paym__timer-item-ttl'>секунды</div>");

    }

    setInterval(function() { makeTimer(); }, 1000);

});
//Стилизованный input type file
$(".upload__file").change(function() {
  var filename = [];
  for (var i = 0; i < $(this).get(0).files.length; ++i) { // Запускаем цикл и перебираем все файлы
    filename.push($(this).get(0).files[i].name.slice(0, 8) + '...'); // Добавляем имена файлов в массив
  }
  $(this).next(".filename").text(filename.join(", "));
  $(this).parent().next('.upload__file-status').css('display','none');
});


//range cab rev
$(function() {
  var sheet = document.createElement('style'),  
    $rangeInput = $('.cab-rev__range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

  document.body.appendChild(sheet);

  var getTrackStyle = function (el) {  
    var curVal = el.value,
        val = (curVal - 1) * 10,
        style = '';
    
    // Set active label
    $('.cab-rev__range-labels li').removeClass('active selected');
    
    var curLabel = $('.cab-rev__range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    
    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
      style += '.cab-rev__range {background: linear-gradient(to right, #FFDB5F 0%, #FFDB5F ' + val + '%, #fff ' + val + '%, #fff 100%)}';
      style += '.cab-rev__range input::-' + prefs[i] + '{background: linear-gradient(to right, #FFDB5F 0%, #FFDB5F ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

    return style;
  }

  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  $('.cab-rev__range-labels li').on('click', function () {
    var index = $(this).index();
    
    $rangeInput.val(index + 1).trigger('input');
    
  });
});