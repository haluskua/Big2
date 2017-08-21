

jQuery(document).ready(function($) {

  /* Stick navigation to the top of the page */
  var stickyNavTop = $('#navtabs').offset().top;

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

  /*changing between classes */
    if (scrollTop > stickyNavTop) {
      $('#navtabs').addClass('sticky');
      $('#nav').addClass('shifted');
    } else {
        /*restoring back to normal */
      $('#navtabs').removeClass('sticky');
      $('#nav').removeClass('shifted');
    }
  });
});



// test one for sticky nav


// $(window).scroll(function(){
//   if($(this).scrollTop()>107){
//       $('#navtabs').addClass("sticky");
//   }
//   else
//     {
//       $('#navtabs').removeClass("sticky")
//     }
// });
//
//
// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide()
//   })
// });
