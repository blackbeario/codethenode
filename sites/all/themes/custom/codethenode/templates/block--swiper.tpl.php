<?php
/**
 * @file
 * This file contains the basic swiper plugin markup implementation.
 *
 * To more details access:
 * http://www.idangero.us/sliders/swiper
 */
?>
<?php $node_id = $variables['elements']['#node']->nid;?>
<div class="main-swiper-wrapper">
  <div class="swiper-container-nid-<?php print $node_id;?> swiper-container">
    <div class="swiper-wrapper">
      <!--Slides-->
      <?php
      foreach ($variables['elements']['#swiper_content'] as $content):
				$content = strip_tags($content, '<p>');
      ?>
      <div class="swiper-slide-nid-<?php print $node_id;?> swiper-slide cover" style="background-image: url(<?php print $content; ?>)"></div>
      <?php endforeach; ?>
      <!--End Slides-->
    </div>
  </div>
	<!-- Pagination -->
  <div class="pagination-nid-<?php print $node_id;?> pagination"></div>
	<!-- Navigation buttons -->
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
	<!-- Keyboard -->
	<div class="nav-helper hidden-xs hidden-sm">
		<h5> Use keyboard to navigate </h5>
		<img src="<?php print drupal_get_path('theme',$GLOBALS['theme']);?>/images/keyboard.png">
	</div>
</div>
