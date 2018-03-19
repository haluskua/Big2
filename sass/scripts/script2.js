/**
 * Author: Tim Vervoort - info@timvervoort.com
 * Licence: Free for commercial use
 * Last update: 8th November 2017 - v1.0
 */
$('document').ready(function() {
  //Make gallery objects clickable
  $('.fs-gal').click(function() {
    fsGal_DisplayImage($(this));
  });
  //Display gallery
  function fsGal_DisplayImage(obj) {
    //Clear navigation buttons
    $('.fs-gal-view > .fs-gal-prev').fadeOut();
    $('.fs-gal-view > .fs-gal-next').fadeOut();
    //Set current image
    var title = obj.attr('alt');
    if (!title || title == '') { title = obj.attr('title'); }
    $('.fs-gal-view > h1').text(title);
    if (!title || title == '') { $('.fs-gal-view > h1').fadeOut(); }
    else { $('.fs-gal-view > h1').fadeIn(); }
    var img = obj.data('url');
    $('.fs-gal-view').css('background-image', 'url('+img+')');
    //Create buttons
    var current = $('.fs-gal').index(obj);
    var prev = current - 1;
    var next = current + 1;
    if (prev >= 0) {
      $('.fs-gal-view > .fs-gal-prev').data('img-index', prev);
      $('.fs-gal-view > .fs-gal-prev').fadeIn();
    }
    if (next < $('.fs-gal').length) {
      $('.fs-gal-view > .fs-gal-next').data('img-index', next);
      $('.fs-gal-view > .fs-gal-next').fadeIn();
    }
    $('.fs-gal-view').fadeIn(); //Display gallery
  }
  //Gallery navigation
  $('.fs-gal-view .fs-gal-nav').click(function() {
    var index = $(this).data('img-index');
    var img = $($('.fs-gal').get(index));
    fsGal_DisplayImage(img);
  });
  //Close gallery
  $('.fs-gal-view .fs-gal-close').click(function() {
    $('.fs-gal-view').fadeOut();
  });
  //Keyboard navigation
  $('body').keydown(function(e) {
    if (e.keyCode == 37) {
      $('.fs-gal-view .fs-gal-prev').click(); //Left arrow
    }
    else if(e.keyCode == 39) { // right
      $('.fs-gal-view .fs-gal-next').click(); //Right arrow
    }
    else if(e.keyCode == 27) { // right
      $('.fs-gal-view .fs-gal-close').click(); //ESC
    }
  });

  // accordion effect for website page
  $(".open-caption").on("click", function() {
    $("#skills-descOpen").css("display", "none");
    $("#skills-descClose").css("display", "flex");
    $(".scpmt").css("display", "flex");
    $(".close-caption").css("z-index", "999");
    $("#hide_h2").css("display", "flex");
  });

  $(".close-caption").on("click", function(){
    $("#skills-descOpen").css("display", "flex");
    $("#skills-descClose").css("display", "none");
    $(".scpmt").css("display", "none");
    $(".open-caption").css("z-index", "999");
    $("#hide_h2").css("display", "none");
  });




  // accordion effect for Graphic Design page
  $(".gdReadmore").on("click", function() {
    $("#gd-descOpen").css("display", "none");
    $("#gd-descClose").css("display", "flex");
    $(".scpmt-gd").css("display", "flex");
    $(".gdClose").css("z-index", "999");
    $("#hide_h2_gd").css("display", "flex");
  });

  $(".gdClose").on("click", function(){
    $("#gd-descOpen").css("display", "flex");
    $("#gd-descClose").css("display", "none");
    $(".scpmt-gd").css("display", "none");
    $(".gdReadmore").css("z-index", "999");
    $("#hide_h2_gd").css("display", "none");
  });



  // accordion effect for Digital Media page
  $(".dmReadmore").on("click", function() {
    $("#dm-descOpen").css("display", "none");
    $("#dm-descClose").css("display", "flex");
    $(".scpmt-dm").css("display", "flex");
    $(".dmClose").css("z-index", "999");
    $("#hide_h2_dm").css("display", "flex");
  });

  $(".dmClose").on("click", function(){
    $("#dm-descOpen").css("display", "flex");
    $("#dm-descClose").css("display", "none");
    $(".scpmt-dm").css("display", "none");
    $(".dmReadmore").css("z-index", "999");
    $("#hide_h2_dm").css("display", "none");
  });


  // accordion effect for Digital Media page
  $(".tReadmore").on("click", function() {
    $("#t-descOpen").css("display", "none");
    $("#t-descClose").css("display", "flex");
    $(".scpmt-t").css("display", "flex");
    $(".tClose").css("z-index", "999");
    $("#hide_h2_t").css("display", "flex");
  });

  $(".tClose").on("click", function(){
    $("#t-descOpen").css("display", "flex");
    $("#t-descClose").css("display", "none");
    $(".scpmt-t").css("display", "none");
    $(".tReadmore").css("z-index", "999");
    $("#hide_h2_t").css("display", "none");
  });


});




// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});



// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();
