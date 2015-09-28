(function ($) {
  Drupal.behaviors.codethenode = {
    attach: function (context) {

      /*----------------------------------------------------------------------*/
      /*  General Scripts
      /*----------------------------------------------------------------------*/

      // Reduce click delay on mobile devices
      // FastClick.attach(document.body);

      /*----------------------------------------------------------------------*/
      /*  Swiper Initializations
      /*----------------------------------------------------------------------*/
      // mySwiper = new Swiper('.swiper-container', {
      //   paginationClickable: true,
      //   pagination: '.pagination-nid-2',
      //   keyboardControl: true,
      //   // autoplay: 6000,
      //   nextButton: '.swiper-button-next',
      //   prevButton: '.swiper-button-prev',
      //   loop: true,
      //   touch: true,
      //   preventLinks: false
      // });
      // $('.swiper-container').addClass('animated fadeIn');

      /*----------------------------------------------------------------------*/
      /*  Modal
      /*----------------------------------------------------------------------*/
      $('.jquery_ajax_load').click(function() {
        $('#myModal').show();
      });

      function closeModal() {
        $loaded = $('#jquery_ajax_load_target .node-article');
        $title = $('#jquery_ajax_load_target title');
        $('#myModal').hide();
        $loaded.remove();
        $title.remove();
      }

      $('.close').click(function(){
        closeModal();
      });
      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      });
    }
  }
})(jQuery);
