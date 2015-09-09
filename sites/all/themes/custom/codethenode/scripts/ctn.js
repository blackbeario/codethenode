(function ($) {
  Drupal.behaviors.codethenode = {
    attach: function () {

      /*-----------------------------------------------------------------------------------*/
      /*  General Scripts
       /*-----------------------------------------------------------------------------------*/

      // Reduce click delay on mobile devices
      // FastClick.attach(document.body);

      /*-----------------------------------------------------------------------------------*/
      /*  Swiper Initializations
      /*-----------------------------------------------------------------------------------*/

      mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        pagination: '.pagination-nid-2',
        keyboardControl: true,
        //autoplay: 6000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        touch: true,
        preventLinks: false
      });

      $('.swiper-container').addClass('animated fadeIn');

    }
  }
})(jQuery);
