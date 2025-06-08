/*!
 * agency.js – angepasst für richardwolf.co.at
 */

$(document).ready(function () {
  // Scrollen bei Parameter ?scrollTo=ziel
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

  // Interne Scroll-Links (z. B. #portfolio)
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      const target = $(this.hash);
      const scrollTarget = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (scrollTarget.length) {
        $('html, body').animate({
          scrollTop: scrollTarget.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Menü schließen bei Klick auf Link (nur bei mobilen Menüs relevant)
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Aktivieren von scrollspy (nur wenn Body das Attribut data-bs-spy hat)
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Navbar verkleinern bei Scroll
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // sofort prüfen
  navbarCollapse();

  // bei Scroll erneut prüfen
  $(window).scroll(navbarCollapse);
});

