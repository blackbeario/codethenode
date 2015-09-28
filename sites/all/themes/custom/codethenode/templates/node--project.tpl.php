<?php

/**
 * @file
 * Theme implementation to display a project node. Slideshows can be a bitch.
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <!-- project info -->
  <div class="project-info animated fadeInLeft">
    <h3><?php print render($content['field_project_link']); ?></h3>
    <?php print render($content['body']); ?>
  </div>

    <!-- fullscreen banner -->
    <div role="banner" id="hero" class="animated fadeInUp">
      <!--Images-->
      <?php
        $count = count($content['field_project_image']['#items']);
        for ($i = 0; $i < $count; $i++):
      ?>
      <div class="project-image slide<?php echo $i;?>" style="background-image: url('/sites/default/files/projects/<?php print render($content['field_project_image'][$i]['#item']['filename']); ?>')"></div>
      <?php endfor; ?>
      <!--End Images-->
    </div>
</div>
