// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require modernizr
//= require bootstrap
//= require glide.min
//= require jquery.videobackground.js
//= require_tree .

// Because helium is a jerk and messes up $ we need to store our own ref to
// jQuery and use that.
$j = jQuery.noConflict();
(function($) {
  $(document).ready(function(){
    $('.slider').glide({
      autoplay: false,
      arrows: true,
      arrowRightText: "›",
      arrowLeftText: "‹"
    });

    $('.brand-feature').prepend('<div class="video-background"></div>');
    if (Modernizr.touch) {
    } else {
      $('.video-background').videobackground({
        videoSource: [['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.mp4', 'video/mp4'],
        ['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.webm', 'video/webm'], 
        ['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.ogv', 'video/ogg']], 
        loop: true,
        preload: 'auto',
        resize: false,
        poster: '/assets/video-still.jpg',
        loadedCallback: function() {
        $(this).videobackground('mute');
        }
      });
    }

    $('li.slide img').first().one('load', function() {
      $(window).resize();
    });

    $(window).on('resize', function() {
      $('ul.slides').height($('li.slide img').height());
    });

    $('body').on('click', '.buy-now', function(){
      _gaq.push(["_trackEvent", "Helium Cart", "Viewed Products"]);
    });
  });
})($j)

// $('#Helium').on('ready', function(e){ 
//   $('#Helium').on('add-to-cart', function(e, sku){
//       _gaq.push(["_trackEvent", "Helium Cart", "Add To Cart", "Peruvian Strap", "Dick Dale"]);
//   });
// });
