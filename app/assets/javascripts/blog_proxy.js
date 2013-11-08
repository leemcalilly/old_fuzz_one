var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j('#content #blog, #content #article').addClass('container');
  $j('#content .row').removeClass('row');
  $j('#content .tags a').addClass('btn btn-primary');
  $j('#content .container').append($('.pagination').remove());
  $j('#content .pagination li span:empty').closest('li').remove();
});
