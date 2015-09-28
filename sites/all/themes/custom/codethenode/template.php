<?php

/**
 * @file
 * template.php
 */

 /**
  * Creates an html template just for project nodes.
  *
  * Implements hook_preprocess_html().
  */
  function codethenode_preprocess_html(&$vars) {
    if ($node = menu_get_object()) {
      if($node->type == "project") {
        $vars['theme_hook_suggestions'][] = 'html__project';
      }
    }
  }

 /**
  * Implements hook_preprocess_page().
  */
  function codethenode_preprocess_page(&$variables, $hook) {
  	if (isset($variables['node'])) {
      $variables['theme_hook_suggestions'][] = 'page__'. $variables['node']->type;
    }
  }
