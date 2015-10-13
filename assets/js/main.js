$(document).ready(function() {
  'use strict';

  // HOME PAGE SPECIFIC ITEMS
  if ( $('body').attr('data-page') === 'home' ) {
    // Get navbar offset from top window to calculate when to affix the navbar to the top
    var navbarOffsetHome = $('#navbar-fixed-home').offset().top;
    $('#navbar-fixed-home').affix({
      offset: {
        top: navbarOffsetHome - 30,
        bottom: 0
      }
    });
    // Set up PACE options
    Pace.on('done', function(){
        $('.cover').fadeOut(2000);
    });
  };

  // WOW.js configuration
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true        // act on asynchronously loaded content (default is true)

    }
  );

  // Initialize wow.js for animations on scrolls
  wow.init();

  // Handles scroll on home page
  $('body').on('click', '[data-scroll-target]', function(e){
    e.preventDefault();
    var target = $(this).attr('data-scroll-target');
    $('html, body').animate({
      scrollTop: ($('#'+target).offset().top - 60
    )}, 800);
  });

  // Sets the top nav button to active
  $('.nav-controls-right li:first-child').addClass('active');

  // Set up nav controls on right to detect scroll position
  $(window).scroll(function(e){
    var scrollPos = $(document).scrollTop() + 46;
    // Handles the 'spy' functionality of right side dot nav
    $('.nav-controls-right li').each(function () {
        var currLink = $(this);
        var targetElement = $('#' + currLink.attr('data-scroll-target'));
        if ( targetElement.offset().top <= scrollPos && targetElement.offset().top + targetElement.height() > scrollPos ) {
            $('.nav-controls-right li').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });

    // Hides menu when scrolling down, shows on scroll up
    didScroll = true;

  }); // End window scroll event


  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.navbar-not-home').outerHeight();

  // run hasScrolled() and reset didScroll status
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(window).scrollTop();

    console.log(lastScrollTop);

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      console.log('scrolling down');
      // Scroll Down
      $('.navbar-not-home').removeClass('nav-down').addClass('nav-up');
    } else {
      console.log('scrolling up');
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        console.log('add');
          $('.navbar-not-home').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }

});
