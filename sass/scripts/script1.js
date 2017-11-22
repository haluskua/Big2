
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
    var headerHeight = 0;
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

            if (jQuery(window).width() <= 481) {
                $(".exit-menu, .hamburger-menu").on("click", function(){
                  $(".mobile-container").hide(300);
                  $(".haus").show(300);
                });
                //show menu bar onclick on main logo
                $(".haus-menu, #hetinfo").click(function(){
                  $(".mobile-container").show(500);
                  $(".nav-folders").show(480);
                  $(".haus").hide(500);
                  $(".exit-menu").show(700);
                });
            }

});
