<?php
/**
 * @file
 * Custom block to embed the meteor_logo svg.
 */
?>
<section id="<?php print $block_html_id; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <small>Proudly developing with</small>
  <a href="https://www.meteor.com" target="_blank">
    <?php $meteor_logo = drupal_get_path('theme',$GLOBALS['theme']) . '/images/meteor-logo.svg'; ?>
    <?php print file_get_contents($meteor_logo); ?>
  </a>

</section>
