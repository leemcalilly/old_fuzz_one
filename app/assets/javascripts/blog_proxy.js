$(document).ready(function() {
  $('#content #blog, #content #article').addClass('container');
  $('#content .row').removeClass('row');
  $('#content .tags a').addClass('btn btn-primary');
  $('#content .container').append($('.pagination').remove());
  $('#content .pagination li span:empty').closest('li').remove();
});
