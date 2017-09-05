

$(document).ready(function() {

    //Get the header height
    var headerHeight = $('#nav').outerHeight();

    $('.hamburger-menu').click(function(e) {
      //getting the href attribute
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1755);
    e.preventDefault();
  });

  /* Stick navigation to the top of the page */
  var stickyNavTop = $('#nav').offset().top;

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

  /*changing between classes */
    if (scrollTop > stickyNavTop) {
      $('#nav').addClass('sticky');
      $('.parent-hetpage').addClass('shifted');
      $('#folders-container').addClass('reduced');
    } else {
        /*restoring back to normal */
      $('#nav').removeClass('sticky');
      $('.parent-hetpage').removeClass('shifted');
      $('#folders-container').removeClass('reduced');
    }
  });
  
// togging the menu log button on landing page
    $(".home-logo").on("click", function() {
      $(".nav-folders").toggle(1000);
    });

});



// hamburger menu

// $(document).ready(function() {
//   $('.home-logo'). on('click' function(){
//     $('.#folders-container').toggleClass('open');
//   });
// });


    // jQuery(document).ready(function($) {
    //
    //   /* Stick navigation to the top of the page */
    //   var stickyNavTop = $('.navbar').offset().top;
    //
    //   $(window).scroll(function() {
    //     var scrollTop = $(window).scrollTop();
    //
    //   /*changing between classes */
    //     if (scrollTop > stickyNavTop) {
    //       $('.navbar').addClass('sticky');
    //       $('main').addClass('shifted');
    //     } else {
    //         /*restoring back to normal */
    //       $('.navbar').removeClass('sticky');
    //       $('main').removeClass('shifted');
    //     }
    //   });
    // });
//
//   // smooth scrolling:
//   $(document).ready(function() {
//      function filter(string) {
//         return string
//            .replace(/^\//,'')
//            .replace(/(index|default)\.[a-zA-Z]{3,4}$/,'')
//            .replace(/\/$/,'')
//      }
//      $('a[href*=#]').each(function() {
//         if (filter(location.pathname) == filter(this.pathname)
//            && location.hostname == this.hostname
//   	 && this.hash.replace(/#/,'') ) {
//   	    var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//   	    var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//   	    if ($target) {
//   	       var targetOffset = $target.offset().top;
//   	       $(this).click(function() {
//   	          $('html, body').animate({scrollTop: targetOffset}, 400);
//   	          return false;
//   	        });
//               }
//            }
//         });
//      });
//
// });



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
