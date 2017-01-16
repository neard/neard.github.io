$(document).ready(function(){
  // Hack related to: https://github.com/twbs/bootstrap/issues/10236
  $(window).on('load resize', function() {
    $(window).trigger('scroll');
  });

  // Smooth scrolling
  $('a.scrollto').on('click', function(e) {
    var target = this.hash;
    e.preventDefault();
    $('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });
  });

  // Hide or show the "back to top" link
  if ($('.cd-top').length > 0) {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.cd-top').addClass('cd-is-visible')
      } else {
        $('.cd-top').removeClass('cd-is-visible cd-fade-out');
      }
      if ($(this).scrollTop() > 1200) {
        $('.cd-top').addClass('cd-fade-out');
      }
    });

    // Smooth scroll to top
    $('.cd-top').on('click', function(event){
      event.preventDefault();
      $('body, html').animate({
          scrollTop: 0
        }, 700
      );
    });
  }

  actionNav.init();
  actionHome.init();
  actionCards.init();
  actionScreenshots.init('.screenshots');
});