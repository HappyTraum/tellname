/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

// Beim Laden prüfen, ob scrollTo-Parameter vorhanden ist
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('scrollTo');
  if (targetId) {
    const target = $('#' + targetId);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 400);
    }
  }
});


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 400, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Shrink the navbar when page is scrolled
$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
});

// Smooth scrolling when on homepage
$(function () {
  $('a.page-scroll').on('click', function (event) {
    const pathname = location.pathname.replace(/\/$/, '');
    const thisPath = this.pathname.replace(/\/$/, '');

    if (pathname === thisPath && location.hostname === this.hostname) {
      const target = $(this.hash);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 400);
      }
    }
  });
});

// Smooth scroll from external pages (like impressum)
$(function () {
  const params = new URLSearchParams(window.location.search);
  const scrollTarget = params.get('scrollTo');
  if (scrollTarget) {
    setTimeout(() => {
      const target = $('#' + scrollTarget);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 400);
      }
    }, 300);
  }
});


// Redirect from other pages to homepage + scroll to section
$(function() {
  // Check if URL contains ?scrollTo=
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTarget = urlParams.get('scrollTo');
  if (scrollTarget) {
    // Wait a little to ensure page is rendered
    setTimeout(() => {
      const target = $('#' + scrollTarget);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
      }
    }, 300);
  }
});

