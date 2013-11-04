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
//= require bootstrap
//= require glide.min
//= require_tree .

$(document).ready(function(){
//   $('.slider').glide({
//     autoplay: false,
//     arrows: true,
//     arrowRightText: "→",
//     arrowLeftText: "←"
//   });

  $('body').on('click', '.buy-now', function(){
    _gaq.push(["_trackEvent", "Helium Cart", "Viewed Products"]);
  });  
});

$('#Helium').on('ready', function(e){ 
  console.log('ready');
  $('#Helium').on('add-to-cart', function(e, sku){
      console.log('added '+ sku + ' to cart');
      _gaq.push(["_trackEvent", "Helium Cart", "Add To Cart", "Peruvian Strap", "Dick Dale"]);
  });
});