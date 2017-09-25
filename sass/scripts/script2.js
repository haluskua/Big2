


$(document).ready(function(){
  //rund test initial page livereload
  checkSize();
  //run test on resize of the window
  $(window).resize(checkSize);
});

//function to the css rule
function checkSize(){
  if ($(".hetpage").css("width") < "480px"){
    // once width of header is greater than 480 then jqery runs
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

//show menu bar onclick on main logo
    $(".haus").click(function(){
      $(".mobile-container").show(500);
      $(".nav-folders").show(900);
    });
    $(".menu").click(function(){
      $("#folders-container").show(700);
    });
//exit menu bar onclick
    $(".exit-menu").on("click", function(){
      $(".mobile-container").hide(800);
    });
    $('.index').on("click", function(){
      $(".mobile-container").hide(500);
    });
  }else {
    alert('this is no longer a mobile view');
  }
}
