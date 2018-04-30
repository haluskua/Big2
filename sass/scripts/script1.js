
$(document).ready(function(){

      // Anime.js code
    anime({
      targets: '#home-logo',
      translateX: 8,
      translateY: 8,
      duration: 1000,
      rotate: '4turn',
      loop: 10, // Play the animation 3 times
      direction: 'reverse', // Play the animation in reverse
      autoplay: true // Animation paused by default
    });

    anime({
      targets: '.box',
      translateX: [
          { value: 0, duration: 3000},
          // {value: 1, duration: 800}
      ],
      rotate:{
      value: '1turn',
      easing: 'easeInOutSine'
    },
    loop: 10,
      delay: function(el, i, l){
        return i * 4900}
    });

    // anime({
    //   targets: '.inner-div5',
    //   opacity: [
    //       { value: 0, duration: 800, delay: 800},
    //       // {value: 1, duration: 2000, delay: 2400}
    //   ],
    //   loop: 4,
    //   autoplay: true
    // });

    // anime({
    //   targets: '.inner-div4',
    //   opacity: [
    //       { value: 0, duration: 800, delay: 6000},
    //       // {value: 1, duration: 2000, delay: 3000}
    //   ],
    //   loop: 4,
    //   autoplay: true
    // });
    //
    // anime({
    //   targets: '.inner-div3',
    //   opacity: [
    //       { value: 0, duration: 800, delay: 8000},
    //       // {value: 1, duration: 2000, delay: 3300}
    //   ],
    //   loop: 4,
    //   autoplay: true
    // });
    //
    // anime({
    //   targets: '.inner-div2',
    //   opacity: [
    //       { value: 0, duration: 800, delay: 10000},
    //       // {value: 1, duration: 2000, delay: 3600}
    //   ],
    //   loop: 4,
    //   autoplay: true
    // });
    //
    // anime({
    //   targets: '.inner-div1',
    //   opacity: [
    //       { value: 0, duration: 800, delay: 12000},
    //       // {value: 1, duration: 2000, delay: 3900}
    //   ],
    //   loop: 4,
    //   autoplay: true
    // });










//////////////////////////////////////////////

  // $(function() {
  //
  //     //settings for slider
  //     var width = 720;
  //     var animationSpeed = 5500;
  //     var pause = 0;
  //     var currentSlide = 1;
  //
  //     //cache DOM elements
  //     var $slider = $('#slider');
  //     var $slideContainer = $('.slides', $slider);
  //     var $slides = $('.slide', $slider);
  //
  //     var interval;
  //
  //     function startSlider() {
  //         interval = setInterval(function() {
  //             $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
  //                 if (++currentSlide === $slides.length) {
  //                     currentSlide = 1;
  //                     $slideContainer.css('margin-left', 0) ;
  //                 }
  //             });
  //         }, pause);
  //     }
  //     function pauseSlider() {
  //         clearInterval(interval);
  //     }
  //
  //     $slideContainer
  //         .on('mouseenter', pauseSlider)
  //         .on('mouseleave', startSlider);
  //
  //     startSlider();
  //
  //
  // });



    if (jQuery(window).width() <= 480) {
        $(".exit-menu, .hamburger-menu, .logo-desc").on("click", function(){
          $(".mobile-container").hide(300);
          $(".haus").show(300);
          // $("#logo-space").hide();
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
                  // $('#hetinfo').on("click", function(){
                  //
                  // });
                  // alert('john');
                    jQuery(".haus").css("display", "none");
                }

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
      $('.hamburger-menu, .logo-desc, .grafix').click(function(e) {
          var linkHref = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
          }, 800);
          e.preventDefault();
        });

// targeting tablet view because of menu top height change from mobile view
        if (jQuery(window).width() > 481) {
            var stickyNavTop = $('.nav-folders').offset().top;
            var headerHeight = 49;
              $('.hamburger-menu, .logo-desc, #snaps').click(function(e) {
                  var linkHref = $(this).attr('href');
                  $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - headerHeight
                  }, 800);
                  e.preventDefault();
                });

        }
                if(jQuery (window).width() >801){
                  $("#hide_h2, #hide_h2_gd, #hide_h2_dm, #hide_h2_t").css("display", "flex");
                  $("#t-descOpen, #t-descClose, #skills-descOpen, #skills-descClose, #gd-descClose, #gd-descOpen, #dm-descOpen, #dm-descClose").css("display", "none");
                  $(".scpmt, .scpmt-gd, .scpmt-dm, .scpmt-t").css("display", "flex");
                }

        // targeting tablet view because of menu top height change from mobile view
                if (jQuery(window).width() <800) {
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

                  $("#open_pic").on("click", function(){
                    $(".img-split").css("width", "92%");

                  });

                }



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

        // code of reamore_text Accordion
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

        if (jQuery(window).width() >= 482) {
          $(".nav-folders").on("click", function(){
            $(".panel").hide(300);
          });

        }


});
