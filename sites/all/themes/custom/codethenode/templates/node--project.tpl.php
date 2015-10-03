<?php

/**
 * @file
 * Theme implementation to display a project node. Slideshows can be a bitch.
 */
?>
<!-- Don't load all the JS scripts with jQuery AJAX Load, use inline script. -->
<script type="text/javascript">
  (function ($) {
    $modal = $('#myModal');
    // If mobile device simulate fixed backgrounds with translateY.
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('section[data-type="background"]').each(function(){
        // On scroll.
        var $scroll = $(this);
        $modal.scroll(function() {
          // Negative value because we're scrolling upwards.
          var yPos = -($modal.scrollTop() / $scroll.data('speed'));
          var coords = yPos + 'px';
          // Move the background.
          $scroll.css({ 'transform':'translateY(' + coords +')' });
        });
      });
    }
    //
    $info = $('.project-info');
    $infoHt = $info.height() * 2 + 'px';

    $info.each(function(){
      // On scoll.
      var $scroll = $(this);
      $modal.scroll(function() {
        // Negative value because we're scrolling upwards.
        var xPos = $modal.scrollTop() + 'px';
        // console.log(xPos,$infoHt);

        // Add fadeout on scroll.
        if (xPos > $infoHt) {
          $scroll.addClass('fadeOut');
        }
        // Add fadeIn on scroll back to 0.
        if (xPos == '0px') {
          $scroll.removeClass('fadeOut').addClass('fadeIn');
        }
      });
    });
  })(jQuery);
</script>

<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <!-- project info -->
  <div class="project-info animated">
    <h3><?php print render($content['field_project_link']); ?></h3>
    <?php print render($content['body']); ?>
  </div>

  <div role="banner" id="project-container" class="animated fadeInUp">
    <?php
      $count = count($content['field_project_image']['#items']);
      for ($i = 0; $i < $count; $i++):
    ?>
    <section class="project-image slide_<?php echo $i;?>" data-speed="<?php echo $i*10;?>" data-type="background" style="background-image: url('/sites/default/files/projects/<?php print render($content['field_project_image'][$i]['#item']['filename']); ?>')"></section>
    <?php endfor; ?>

  </div>
</div>
