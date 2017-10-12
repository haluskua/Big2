
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
      var headerHeight2 = $('.mobile-container').outerHeight();
      /* Stick navigation to the top of the page */

      $('.hamburger-menu').click(function(e) {
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight2
      }, 1000);
      e.preventDefault();
    });

    var stickyNavTop = $('.nav-folders').offset().top;

  }

    var headerHeight = 22;
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


// code for lightbox

        $(".img").click(function(){
          $src=$(this).attr("src");
            if(!$("#light-box").length > 0) {
              //creates a new div and includes lightbox properties
              $("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");

              $("#light-box").show();
              $("#light-box img").attr("src",$src);
            }else{
              $("#light-box").show();
              $("#light-box img").attr("src",$src);
            }
          });
          $("#light-box").click(function(){
            $src=$(this).append("#dive id='charmtag'>kjkjkjkj</>");
          });
          $("#mygrafix").on("click", "#light-box span", function() {
            $("#light-box").hide();
          });








        // //onclick function for image gallery
        // $('#img1').on("click", function() {
        //     $('#mobile-box').css('display','flex');
        //     // $('#mobile-box').addClass('.mobile-image-box');
        // });



        //
        //
        // var height = 600
        // var animationSpeed = 1000
        // var pause = 3000;
        // setInterval(function() {
        //   $('#right-box .li-grafix').animate({'margin-top': '-='+height}, animationSpeed);
        // }, pause);
        //
        //
        //


    }




  });
