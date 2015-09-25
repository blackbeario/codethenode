/**
 * @file
 * Drupal AJAX Javascript file.
 */

/**
 * Call the ajax function to load article nodes.
 */
(function ($) {
  Drupal.behaviors.ajax_articles = function (context) {
    function ajax_articles_ajax_load() {
      $("#ajax-target").load("/get/ajax/node/3");
    }
}
})(jQuery);
