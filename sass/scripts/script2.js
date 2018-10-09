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





// 00000000000000000000000000000000000000000000000000000000000000000

//FOOTER HTML CANVAS

var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.beginPath();


ctx.moveTo(797,0);

ctx.lineTo(764,22);

ctx.lineTo(764,22);

ctx.lineTo(730,0);

ctx.lineTo(695,22);

ctx.lineTo(660,0);

ctx.lineTo(625,22);

ctx.lineTo(590,0);

ctx.lineTo(555,22);

ctx.lineTo(520,0);

ctx.lineTo(485,22);

ctx.lineTo(450,0);

ctx.lineTo(415,22);

ctx.lineTo(380,0);

ctx.lineTo(345,22);

ctx.lineTo(310,0);

ctx.lineTo(275,22);

ctx.lineTo(240,0);

ctx.lineTo(205,22);

ctx.lineTo(170,0);

ctx.lineTo(135,22);

ctx.lineTo(100,0);

ctx.lineTo(65,22);

ctx.lineTo(30,0);





ctx.moveTo(790,24);

ctx.lineTo(764,46);

ctx.lineTo(730,24);

ctx.lineTo(695,46);

ctx.lineTo(660,24);

ctx.lineTo(625,46);

ctx.lineTo(590,24);

ctx.lineTo(555,46);

ctx.lineTo(520,24);

ctx.lineTo(485,46);

ctx.lineTo(450,24);

ctx.lineTo(415,46);

ctx.lineTo(380,24);

ctx.lineTo(345,46);

ctx.lineTo(310,24);

ctx.lineTo(275,46);

ctx.lineTo(240,24);

ctx.lineTo(205,46);

ctx.lineTo(170,24);

ctx.lineTo(135,46);

ctx.lineTo(100,24);

ctx.lineTo(65,46);

ctx.lineTo(30,24);



ctx.moveTo(790,70);

ctx.lineTo(764,46);

ctx.lineTo(730,70);

ctx.lineTo(695,46);

ctx.lineTo(660,70);

ctx.lineTo(625,46);

ctx.lineTo(590,70);

ctx.lineTo(555,46);

ctx.lineTo(520,70);

ctx.lineTo(485,46);

ctx.lineTo(450,70);

ctx.lineTo(415,46);

ctx.lineTo(380,70);

ctx.lineTo(345,46);

ctx.lineTo(310,70);

ctx.lineTo(275,46);

ctx.lineTo(240,70);

ctx.lineTo(205,46);

ctx.lineTo(170,70);

ctx.lineTo(135,46);

ctx.lineTo(100,70);

ctx.lineTo(65,46);

ctx.lineTo(30,70);


ctx.strokeStyle = "#aab5b4";

ctx.stroke();


// mobile canvas view

var c = document.getElementById("myCanvas-mobile");

var ctx = c.getContext("2d");

ctx.beginPath();


ctx.moveTo(50,0);

ctx.lineTo(84,20);

ctx.lineTo(84,59);

ctx.lineTo(50,78);

ctx.lineTo(16,59);

ctx.lineTo(16,20);

ctx.lineTo(50,0);

ctx.lineTo(84,20);



ctx.strokeStyle = "orange";

ctx.font = "1.4em Arial";
ctx.fillStyle = "orange";
ctx.fillText("OHK",25,46);
ctx.font = "0.74em Helvetica";
ctx.fillStyle = "orange";
ctx.fillText("OMPHALUS.H.KUA",-1,90);
ctx.font = "0.84em Helvetica";
ctx.fillStyle = "orange";
ctx.fillText("haluskua.one@gmail.com",-1,110);
// ctx.font = "0.84em Helvetica";
ctx.fillStyle = "orange";
ctx.fillText("0225732261",-1,130);


ctx.arc(50,38,30,0,2*Math.PI);

ctx.stroke();





// ===========================================================


// mobile canvas view

var c = document.getElementById("myCanvas-menu");

var ctx = c.getContext("2d");

ctx.beginPath();


ctx.moveTo(50,0);

ctx.lineTo(84,20);

ctx.lineTo(84,59);

ctx.lineTo(50,78);

ctx.lineTo(16,59);

ctx.lineTo(16,20);

ctx.lineTo(50,0);

ctx.lineTo(84,20);



ctx.strokeStyle = "orange";

ctx.font = "1.4em Arial";
ctx.fillStyle = "orange";
ctx.fillText("OHK",25,46);
ctx.font = "0.7em Helvetica";
ctx.fillStyle = "#635d49";
ctx.fillText("OMPHALUS.H.KUA",-1,90);
ctx.font = "0.75em Helvetica";
ctx.fillStyle = "#635d49";
ctx.fillText("haluskua.one@gmail.com",-1,110);
// ctx.font = "0.84em Helvetica";
ctx.fillStyle = "#635d49";
ctx.fillText("0225732261",-1,130);


ctx.arc(50,38,30,0,2*Math.PI);

ctx.stroke();



// ===========================================================


// header_desktop

var c = document.getElementById("myCanvas-menu1");

var ctx = c.getContext("2d");

ctx.beginPath();


ctx.moveTo(50,0);

ctx.lineTo(84,20);

ctx.lineTo(84,59);

ctx.lineTo(50,78);

ctx.lineTo(16,59);

ctx.lineTo(16,20);

ctx.lineTo(50,0);

ctx.lineTo(84,20);



// ctx.strokeStyle = "orange";
//
// ctx.font = "1.4em Arial";
// ctx.fillStyle = "orange";
// ctx.fillText("OHK",25,46);
// ctx.font = "0.7em Helvetica";
// ctx.fillStyle = "#635d49";
// ctx.fillText("OMPHALUS.H.KUA",-1,90);
// ctx.font = "0.75em Helvetica";
// ctx.fillStyle = "#635d49";
// ctx.fillText("haluskua.one@gmail.com",-1,110);
// // ctx.font = "0.84em Helvetica";
// ctx.fillStyle = "#635d49";
// ctx.fillText("0225732261",-1,130);


ctx.arc(50,38,30,0,2*Math.PI);

ctx.stroke();
