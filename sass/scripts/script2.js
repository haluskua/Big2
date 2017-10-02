
$(document).ready(function(){
  //rund test initial page livereload
  checkSize();
  //run test on resize of the window
  $(window).resize(checkSize);

//function to the css rule
function checkSize(){
  if ($(".hetpage").css("width") > "480px"){
    // once width of header is less than 480 then jqery runs
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        // scroll eventListen function
            // var lastScrollTop = outerHeight;
            // var currentScrollPosition = $(this).scrollTop();
            //   if (currentScrollPosition === lastScrollTop) {
            //     alert("you have past the outerheigh");
            //
            //   }else {
            //     ""
            //   }
            //   lastScrollTop = currentScrollPosition;


      /*changing between classes */
        if (scrollTop > stickyNavTop) {
          $('.mobile-container').addClass('sticky');
          $('#folders-container').addClass('reduced');
          // $('#folders-container').addClass('reduced');
        } else {
            /*restoring back to normal */
          $('.mobile-container').removeClass('sticky');
          $('#folders-container').removeClass('reduced');
          // $('#folders-container').removeClass('reduced');
        }
      });

      //Get the header height
      var headerHeight = $('#folders-container').outerHeight();
      /* Stick navigation to the top of the page */

      $('.hamburger-menu').click(function(e) {
        // $("#menu-buttons").hide(800);
        //getting the href attribute
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
      }, 1000);
      e.preventDefault();
    });

    var stickyNavTop = $('.nav-folders').offset().top;


  }else{

    var headerHeight = 8;

    $('.hamburger-menu').click(function(e) {

        var linkHref = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(linkHref).offset().top - headerHeight
        }, 800);
        e.preventDefault();
      });

        //show menu bar onclick on main logo
        $(".haus-menu, #hetinfo").click(function(){
          $(".mobile-container").show();
          $(".nav-folders").show();
          $(".exit-menu").show();
          $(".haus").hide(1000);
        });
    //exit menu bar onclick
        $(".exit-menu").on("click", function(){
          $(".mobile-container").hide(200);
        });
        $('.main-menu').on("click", function(){
          $("#menu-buttons").show(1000);
        });
        $(".menu").on("click", function(){
          $(".haus").show(500);
        });
      }
    }
  });
