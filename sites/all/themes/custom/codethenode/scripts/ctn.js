(function ($) {
  Drupal.behaviors.codethenode = {
    attach: function (context) {

      /*----------------------------------------------------------------------*/
      /*  General Scripts
      /*----------------------------------------------------------------------*/
      // Toggle the visibility of the sidemenu.
      tab = $('.menutab');
   		function toggleStuff() {
				$('aside,.menutab').toggleClass('visible');
   		}
      tab.click(function(){
        toggleStuff();
      });
      // Toggle the sidemenu if '[' key is pressed.
			$(document).on("keydown", function(e) {
				if (e.which === 77) {
					toggleStuff();
				}
			});
      // Reduce click delay on mobile devices
      // FastClick.attach(document.body);

      /*----------------------------------------------------------------------*/
      /*  Swiper Initializations
      /*----------------------------------------------------------------------*/
      mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        pagination: '.pagination-nid-2',
        keyboardControl: true,
        autoplay: 6000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        touch: true,
        preventLinks: false
      });
      $('.swiper-container').addClass('animated fadeIn');

      /*----------------------------------------------------------------------*/
      /*  Modal
      /*----------------------------------------------------------------------*/
      $('.jquery_ajax_load').click(function() {
        $('#myModal').show();
      });

      function closeModal() {
        $loaded = $('#jq .node-article, #jq .node-project');
        $myTitle = $('#jq title');
        $myScripts = $('#jq script');
        $('#myModal').hide();
        $loaded.remove();
        $myTitle.remove();
        $myScripts.remove();
      }

      $('.close').click(function(){
        closeModal();
      });
      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      });

      // WTF isn't this working on pages called in modal?
      // Moved to inline script until figured out.
      // // parallax test
      // $modal = $('#myModal');
      // $('section[data-type="background"]').each(function(){
      //   // declare the variable to affect the defined data-type
      //   var $scroll = $(this);
      //
      //   $modal.scroll(function() {
      //     // HTML5 proves useful for helping with creating JS functions!
      //     // also, negative value because we're scrolling upwards
      //     var yPos = -($modal.scrollTop() / $scroll.data('speed'));
      //
      //     // background position
      //     //  var coords = '50% '+ yPos + 'px';
      //      var coords = yPos + 'px';
      //     //  console.log(coords);
      //
      //     // move the background
      //     //  $scroll.css({ backgroundPosition: coords });
      //     $scroll.css({ 'transform':'translateY(' + coords +')' });
      //   }); // end window scroll
      // });  // end section function

    }
  }
})(jQuery);
