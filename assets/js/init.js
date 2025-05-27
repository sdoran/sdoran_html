/*
 * Copyright (c) 2023 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	jara_tm_modalbox();
	jara_tm_portfolio_filter();
	jara_tm_trigger_menu();
	jara_tm_modalbox_news();
	jara_tm_modalbox_portfolio();
	jara_tm_imgtosvg();
	jara_tm_popup();
	jara_tm_data_images();
	jara_tm_down();
	jara_tm_partners();
	jara_tm_mycounter();
	jara_tm_waypoints();
	jara_tm_gradient_text();
	jara_tm_jarallax();
	
	jQuery(window).load('body', function(){
		jara_tm_my_load();
		jara_tm_process_image();
	});
	
});

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function jara_tm_modalbox(){
	"use strict";
	
	jQuery('.jara_tm_all_wrap').prepend('<div class="jara_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// -----------    PORTFOLIO FILTR    -------------------
// -----------------------------------------------------

function jara_tm_portfolio_filter(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.jara_tm_portfolio .portfolio_list > ul');
		var filter		 = jQuery('.portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function jara_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var mobileMenu		= jQuery('.jara_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.jara_tm_mobile_menu .dropdown .dropdown_inner > ul > li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function jara_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.jara_tm_modalbox');
	var button			= jQuery('.jara_tm_news .jara_tm_full_link, .jara_tm_news .list ul li .title a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('li');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= parent.find('.image .main').data('img-url');
		var meta		= parent.find('.date').html();
		var title		= parent.find('.details .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="assets/img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="meta"><span>'+meta+'</span></div><div class="title"><h3>'+title+'</h3></div></div>');
		jara_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function jara_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox	= jQuery('.jara_tm_modalbox');
	var button		= jQuery('.jara_tm_portfolio .portfolio_popup');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var image		= parent.find('.image .main').data('img-url');
		var details 	= parent.find('.hidden_content_portfolio').html();
		var title	 	= parent.find('.title a').text();
		
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="assets/img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3 class="title">'+title+'</h3></div>');	
		jara_tm_data_images();
		return false;
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function jara_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function jara_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){jara_tm_preloader();},speed);
	setTimeout(function(){jQuery('.jara_tm_all_wrap').addClass('ready');},speed+2000);
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function jara_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function jara_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function jara_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function jara_tm_down(){
	
	"use strict";
	
	var topbar		= jQuery('.jara_tm_header').outerHeight();
		
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar
			}, 500);
		}
		
		return false;
	});
}

// -----------------------------------------------------
// --------------------    MARQUEE    ------------------
// -----------------------------------------------------

function jara_tm_partners(){
	"use strict";
	$('.marquee').marquee({
        duration: 20000,
		duplicated: true,
		startVisible: true
    });
}

// -----------------------------------------------------
// --------------------    COUNTER    ------------------
// -----------------------------------------------------

function jara_tm_mycounter(){
	
	"use strict";
	
	jQuery('.tm_counter').removeClass('stop');
	
	jQuery('.tm_counter').each(function() {

	var el		= jQuery(this);
		el.waypoint({
			handler: function(){

				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'85%'	
		});
	});
}

// -----------------------------------------------------
// --------------    PROCESS IMAGE    ------------------
// -----------------------------------------------------

function jara_tm_process_image(){
	
	"use strict";
	
	if(jQuery('.jara_tm_process').length){
		var imagebox		= jQuery('.jara_tm_process .imagebox');
		var list			= jQuery('.jara_tm_process .list');
		var processInnerW	= jQuery('.jara_tm_process .process_inner').offset().left;
		var itemLi			= jQuery('.jara_tm_process .list li').outerWidth();
		var itemW			= jQuery('.jara_tm_process .list .list_inner').outerWidth();
		imagebox.css({width:processInnerW+itemW+'px'});
		list.css({paddingRight:itemLi+'px'});	
		$('.jarallax').jarallax('onResize');
	}
}

// -----------------------------------------------------
// ------------    WAIT FOR IMAGES   -------------------
// -----------------------------------------------------

$('.portfolio_list').waitForImages().done(function() {
	
	"use strict";
	
    // All descendant images have loaded, now slide up.
    $('.grid').masonry({
		itemSelector: '.grid-item',
	});
});

// -----------------------------------------------------
// ------------------- WAYPOINT   ----------------------
// -----------------------------------------------------

function jara_tm_waypoints(){
	
	"use strict";

	var div		= jQuery('.waypoint_effect');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"85%"
		});
		
	});
	
}

// -----------------------------------------------------
// ------------- WAYPOINT TEXT GRADIENT  ---------------
// -----------------------------------------------------

function jara_tm_gradient_text2(){
	'use strict';
	return false;
	var gradient		= jQuery('.text_gradient');
	gradient.each(function(){
		var element 	= jQuery(this);
		var text		= element.text();
		element.html('<span class="or">'+text+'</span>');
		element.append('<span class="inn">'+text+'</span>');
		var inn = element.find('.inn');
		inn.addClass('waypoint_effect');
		inn.waypoint({
			handler:function(){
				inn.addClass('load');
				element.find('.or').addClass('disable');
			},
			offset:"65%"
		});
	});
}

function jara_tm_gradient_text(){
	
	"use strict";
	
	var detail     	= $('.text_gradient');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			i *= -1;
			var y 	= (i*240)/h;
			console.log(y);
			element.css({backgroundSize: y+'% 100%'});
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function jara_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
			videoVolume: 0,
		});
	});
}
