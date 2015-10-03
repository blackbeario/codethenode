(function ($) {
  // parallax test
  $modal = $('#myModal');
  $('section[data-type="background"]').each(function(){
    // declare the variable to affect the defined data-type
    var $scroll = $(this);

    $modal.scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards
      var yPos = -($modal.scrollTop() / $scroll.data('speed'));

      // background position
      //  var coords = '50% '+ yPos + 'px';
       var coords = yPos + 'px';
      //  console.log(coords);

      // move the background
      //  $scroll.css({ backgroundPosition: coords });
      $scroll.css({ 'transform':'translateY(' + coords +')' });
    }); // end window scroll
  });  // end section function
})(jQuery);
