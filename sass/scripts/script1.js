
$(document).ready(function(){

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    /*changing between classes */
      if (scrollTop > stickyNavTop) {
        $('.mobile-container').addClass('sticky');
        $('#folders-container').addClass('reduced');
        }
        else {
          /*restoring back to normal */
        $('.mobile-container').removeClass('sticky');
        $('#folders-container').removeClass('reduced');
      }
    });

    var stickyNavTop = $('.nav-folders').offset().top;
    var headerHeight = 39;
      $('.hamburger-menu').click(function(e) {
          var linkHref = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
          }, 800);
          e.preventDefault();
        });

    // code for lightbox
    $(".img").click(function(){
      $src=$(this).attr("src");
        if(!$("#light-box").length > 0) {
          //creates a new div and includes lightbox properties
          $("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");
          $("#light-box").show();
          $("#light-box img").attr("src",$src);

          $("#light-box").append("<div id='next'<span class ='next'>-></span></div>");
          $("#light-box").append("<div id='prev'<span class ='prev'><-</span></div>");

        }else{
          $("#light-box").show();
          $("#light-box img").attr("src",$src);
        }
      });

      $("#mygrafix").on("click", "#light-box span", function() {
        $("#light-box").hide();
      });

    // jquery image slider
      $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          nextImg.addClass('active').css('z-index', 10);
        }
      });

      $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }
      });


      //show menu bar onclick on main logo
      $(".haus-menu, #hetinfo").click(function(){
        $(".mobile-container").show(900);
        $(".nav-folders").show(880);
        $(".haus").hide(1000);
        $(".exit-menu").show(12000);
      });
      $(".exit-menu").on("click", function(){
        $(".mobile-container").hide(500);
        $(".haus").show(500);
      });


    function checkSize(){
      checkSize();
      $(window).resize(checkSize);
      if ($(".hetpage").css("width") <= "480px"){

        $(".hamburger-menu").on("click", function(){
          alert("frog");
          $(".mobile-container").hide(500);
          $(".sticky").css("display, none");
          $(".haus").show(500);
          });

        $('.main-menu').on("click", function(){
          $("#menu-buttons").show(1000);
        });
      }
       else if ($(".hetpage").css("width") > "481px") {
        $(".hamburger-menu").on("click", function(){
          $(".haus").hide(0);
          $(".mobile-container").show(0);
        });
      }
    }
});
