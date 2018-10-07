
$(document).ready(function(){

      // Anime.js code
    // anime({
    //   targets: '#hetinfo',
    //   duration: 7500,
    //   delay: 7000,
    //   rotate: '1turn',
    //   loop: true, // Play the animation 3 times
    //   // direction: 'reverse', // Play the animation in reverse
    //   autoplay: true // Animation paused by default
    // });


 //// Script targeting mainly mobile menus

    if (jQuery(window).width() <= 480) {
        $(".exit-menu, .hamburger-menu, .logo-desc").on("click", function(){
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

        //readmore_text onclick function
        $(".container_text").click(function(){
          $("#open_read").hide(300);
        });

        // Undisplaying the mobie menu-bar
        jQuery(window).resize(function () {
          if (jQuery(window).width() > 642) {
            $("#folders-container").show(300);
              jQuery(".haus").css("display", "none");
          }
        });

        ///////////////////Animation for mobile view///////////////////
        anime({
          targets: '.box',
          translateY: [
            { value: -5, duration: 1100},
            { value: 0, duration: 1100}
          ],
          rotate:{
          value: '-0.02turn',
          duration: 3500,
          easing: 'easeInOutQuart'
        },
        scale: {
          value: 1.05,
          duration: 2500,
          delay: 1000,
          easing: 'easeInOutQuart'
        },
        loop: true,
        // direction: 'reverse', // Play the animation in reverse
          delay: function(el, i, l){
            return i *2000}

        });

    }


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
      $('.hamburger-menu, .logo-desc, .grafix, .box').click(function(e) {
          var linkHref = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
          }, 800);
          e.preventDefault();
        });

// targeting tablet view because of menu top height change from mobile to tablet
        if (jQuery(window).width() > 481) {
            var stickyNavTop = $('.nav-folders').offset().top;
            var headerHeight = 62;
              $('.hamburger-menu, .logo-desc, #snaps, .box').click(function(e) {
                  var linkHref = $(this).attr('href');
                  $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - headerHeight
                  }, 800);
                  e.preventDefault();
                });

        }


        // targeting tablet view because of menu top height change from tablet to desktop
                if (jQuery(window).width() > 800) {
                    var stickyNavTop = $('.nav-folders').offset().top;
                    var headerHeight = 0;
                      $('.hamburger-menu, .logo-desc, #snaps, .box').click(function(e) {
                          var linkHref = $(this).attr('href');
                          $('html, body').animate({
                            scrollTop: $(linkHref).offset().top - headerHeight
                          }, 800);
                          e.preventDefault();
                        });

                }






// 000000000000000000000000000


                if(jQuery (window).width() >801){
                  $("#hide_h2, #hide_h2_gd, #hide_h2_dm, #hide_h2_t").css("display", "flex");
                  $("#t-descOpen, #t-descClose, #skills-descOpen, #skills-descClose, #gd-descClose, #gd-descOpen, #dm-descOpen, #dm-descClose").css("display", "none");
                  $(".scpmt, .scpmt-gd, .scpmt-dm, .scpmt-t").css("display", "flex");
                }

        // targeting tablet view because of menu top height change from mobile view

                if (jQuery(window).width() <800) {

    // ACCORDION text open and close panel

                  $(".open-caption").on("click", function() {
                    $("#skills-descOpen").css("display", "none");
                    $("#skills-descClose").css("display", "flex");
                    $(".close-caption").css("z-index", "999");
                    $(".scpmt").css("display", "flex");
                    $("#hide_h2").css("display", "flex");
                  });

                  $(".close-caption").on("click", function(){
                    $("#skills-descOpen").css("display", "flex");
                    $("#skills-descClose").css("display", "none");
                    $(".open-caption").css("z-index", "999");
                    $(".scpmt").css("display", "none");
                    $("#hide_h2").css("display", "none");
                  });

                  $(".gdReadmore").on("click", function() {
                    $("#gd-descOpen").css("display", "none");
                    $("#gd-descClose").css("display", "flex");
                    $(".gdClose").css("z-index", "999");
                    $(".scpmt-gd").css("display", "flex");
                    $("#hide_h2_gd").css("display", "flex");
                  });

                  $(".gdClose").on("click", function(){
                    $("#gd-descOpen").css("display", "flex");
                    $("#gd-descClose").css("display", "none");
                    $(".gdReadmore").css("z-index", "999");
                    $(".scpmt-gd").css("display", "none");
                    $("#hide_h2_gd").css("display", "none");
                  });

                  $(".tReadmore").on("click", function() {
                    $("#t-descOpen").css("display", "none");
                    $("#t-descClose").css("display", "flex");
                    $(".tClose").css("z-index", "999");
                    $(".scpmt-t").css("display", "flex");
                    $("#hide_h2_t").css("display", "flex");
                  });

                  $(".tClose").on("click", function(){
                    $("#t-descOpen").css("display", "flex");
                    $("#t-descClose").css("display", "none");
                    $(".scpmt-t").css("display", "none");
                    $(".tReadmore").css("z-index", "999");
                    $("#hide_h2_t").css("display", "none");
                  });

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

                  $("#open_pic").on("click", function(){
                    $(".img-split").css("width", "92%");

                  });

                // 88888888888888888888888888888888888888888888
                  // DRY CODE TEST
                  // $(".open-caption, .gdReadmore, .tReadmore, .dmReadmore").on("click", function() {
                  //   $("#skills-descOpen, #gd-descOpen, #t-descOpen, #dm-descOpen").css("display", "none");
                  //   $("#skills-descClose, #gd-descClose, #t-descClose, #dm-descClose").css("display", "flex");
                  //   $(".close-caption, .gdClose, .tClose, .scpmt-dm").css("z-index", "999");
                  //   $(".scpmt, .scpmt-gd, .scpmt-t, .dmClose").css("display", "flex");
                  //   $("#hide_h2, #hide_h2_gd, #hide_h2_t, #hide_h2_dm").css("display", "flex");
                  // });
                  //
                  // $(".close-caption, .gdClose, .tClose, .dmClose").on("click", function(){
                  //   $("#skills-descOpen, #gd-descOpen, #t-descOpen, #dm-descOpen, .gdReadmore ").css("display", "flex");
                  //   $("#skills-descClose, #t-descClose, #dm-descClose, .gdClose").css("display", "none");
                  //   $(".open-caption, .scpmt-gd, .scpmt-t, .scpmt-dm").css("z-index", "999");
                  //   $(".scpmt, .scpmt-gd, .tReadmore, .dmReadmore").css("display", "none");
                  //   $("#hide_h2, #hide_h2_gd, #hide_h2_t, #hide_h2_dm").css("display", "none");
                  // });

                  // 88888888888888888888888888888888888888888888
                }

/////////////////////////////////////////////////////////////////////

        // Code for Accordion

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            }
        }

        // code of readmore_text Accordion
        $(".set > a").on("click", function(){
          if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
          }else{
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
          $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $('.content').slideUp(200);
          $(this).siblings('.content').slideDown(200);
          }

        });

///////////////////////Script writing for larger than mobile resolution screens //////////////////

        if (jQuery(window).width() >= 482) {
          $(".nav-folders").on("click", function(){
            $(".panel").hide(300);
          });

    ///////////////////////Animation for VIEWS Larger than Mobile View //////////////////

          anime({
            targets: '.box',
            easing: 'easeInOutSine',
            translateY: [
              { value: -10, duration: 4100, delay: 1000},
              { value: 0, duration: 3300, delay: 800}
            ],
            easing: 'easeInOutQuart',
            rotate:[
            { value: '-0.01turn',duration: 4400, delay: 1000},
            { value: '0turn', duration:3300, delay: 800}
          ],
          easing: 'easeInOutQuart',
          scale: [
            { value: 1.05, duration: 3800, delay: 1000},
            { value: 1, duration: 3400, delay: 1000}
          ],

          loop: true,
          // direction: 'reverse', // Play the animation in reverse
            delay: function(el, i, l){
              return i *840}

          });

          anime({
            targets: '.animation-caption',
            translateY: [
              { value: +30, duration: 3810, dealy: 600},
              { value: 0, duration: 3860, delay: 600}
            ],

          });
        }
});
