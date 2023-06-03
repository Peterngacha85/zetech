jQuery(document).ready(function($) {

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
		},
		end: function() {
			console.log('stop');
		},
			scrollOffset: 0		
	});
	
	// prettyPhoto
	$("a[data-pretty^='prettyPhoto']").prettyPhoto();		

    // Localscrolling 
	$('#menu-main, .brand').localScroll();
	
	$('#menu-main li a').click(function(){
		var links = $('#menu-main li a');
		links.removeClass('selected');
		$(this).addClass('selected');
	});

    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }	
	
    if (iOS === false) {

        $('.flyIn').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUp');
            }
        });

        $('.flyLeft').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInLeftBig');
            }
        });

        $('.flyRight').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInRightBig');
            }
        });

    }
	
	// add animation on hover
		$(".service-box").hover(
			function () {
			$(this).find('img').addClass("animated pulse");
			$(this).find('h2').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('img').removeClass("animated pulse");
			$(this).find('h2').removeClass("animated fadeInUp");
			}
		);
		
	
	// cache container
	var $container = $('#portfolio-wrap');
	$.browser.safari = ($.browser.webkit && !(/chrome/.test(navigator.userAgent.toLowerCase())));	
	
	if($.browser.safari){ 	
	// initialize isotope
	$container.isotope({
		animationEngine : 'jquery',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});
	} else {	
	$container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});	
	
	$(window).resize(function() {
		$container.isotope('reLayout');
	});
	}
	// filter items when filter link is clicked
	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

	// flexslider main
	$('#main-flexslider').flexslider({						
		animation: "swing",
		direction: "vertical", 
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		prevText: '<i class="icon-angle-up icon-2x"></i>',       
		nextText: '<i class="icon-angle-down icon-2x active"></i>', 
		controlNav: false,
		smootheHeight:true,						
		useCSS: false
	});
});

// Read more content in index page blog section 
// function toggleContent() {
// 	var content = document.getElementById("additional-content");
// 	var link = document.getElementsByClassName("more")[0];
	
// 	if (content.style.display === "none") {
// 		content.style.display = "block";
// 		link.innerText = "Read less";
// 	} else {
// 		content.style.display = "none";
// 		link.innerText = "Read more";
// 	}
// }
// function toggleContent() {
// 	var content = document.getElementById("additional-content");
// 	var links = document.getElementsByClassName("more");
	
// 	if (content.style.display === "none") {
// 	  content.style.display = "block";
// 	  for (var i = 0; i < links.length; i++) {
// 		links[i].innerText = "Read less";
// 	  }
// 	} else {
// 	  content.style.display = "none";
// 	  for (var i = 0; i < links.length; i++) {
// 		links[i].innerText = "Read more";
// 	  }
// 	}
//   }
  
function toggleContent(link) {
    var content = link.previousElementSibling;
    
    if (content.style.display === "none") {
        content.style.display = "block";
        link.innerText = "Read less";
    } else {
        content.style.display = "none";
        link.innerText = "Read more";
    }
}
	// whatsaap image 
// 	var whatsappIcon = document.getElementById("whatsapp-icon");

// whatsappIcon.addEventListener("mousedown", function(event) {
//   var shiftX = event.clientX - whatsappIcon.getBoundingClientRect().left;
//   var shiftY = event.clientY - whatsappIcon.getBoundingClientRect().top;

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     whatsappIcon.style.left = pageX - shiftX + 'px';
//     whatsappIcon.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   whatsappIcon.onmouseup = function() {
//     document.removeEventListener("mousemove", onMouseMove);
//     whatsappIcon.onmouseup = null;
//   };
// });

// whatsappIcon.ondragstart = function() {
//   return false;
// };



