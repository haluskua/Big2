$(document).ready(function(){anime({targets:"#home-logo",translateX:8,translateY:8,duration:1e3,rotate:"4turn",loop:10,direction:"reverse",autoplay:!0}),$(function(){function s(){e=setInterval(function(){c.animate({"margin-left":"-="+i},n,function(){++a===t.length&&(a=1,c.css("margin-left",0))})},l)}var e,i=720,n=5500,l=0,a=1,d=$("#slider"),c=$(".slides",d),t=$(".slide",d);c.on("mouseenter",function(){clearInterval(e)}).on("mouseleave",s),s()}),jQuery(window).width()<=480&&($(".exit-menu, .hamburger-menu, .logo-desc").on("click",function(){$(".mobile-container").hide(300),$(".haus").show(300)}),$(".haus-menu, #hetinfo").click(function(){$(".mobile-container").show(500),$(".nav-folders").show(480),$(".haus").hide(500),$(".exit-menu").show(700)}),$(".container_text").click(function(){$("#open_read").hide(300)}),jQuery(window).resize(function(){jQuery(window).width()>642&&($("#folders-container").show(300),jQuery(".haus").css("display","none"))})),$(window).scroll(function(){$(window).scrollTop()>s?($(".mobile-container").addClass("sticky"),$("#folders-container").addClass("reduced")):($(".mobile-container").removeClass("sticky"),$("#folders-container").removeClass("reduced"))});var s=$(".nav-folders").offset().top,e=0;if($(".hamburger-menu, .logo-desc, .grafix").click(function(s){var i=$(this).attr("href");$("html, body").animate({scrollTop:$(i).offset().top-e},800),s.preventDefault()}),jQuery(window).width()>481){var s=$(".nav-folders").offset().top,e=49;$(".hamburger-menu, .logo-desc, #snaps").click(function(s){var i=$(this).attr("href");$("html, body").animate({scrollTop:$(i).offset().top-e},800),s.preventDefault()})}jQuery(window).width()>801&&($("#hide_h2, #hide_h2_gd, #hide_h2_dm, #hide_h2_t").css("display","flex"),$("#t-descOpen, #t-descClose, #skills-descOpen, #skills-descClose, #gd-descClose, #gd-descOpen, #dm-descOpen, #dm-descClose").css("display","none"),$(".scpmt, .scpmt-gd, .scpmt-dm, .scpmt-t").css("display","flex")),jQuery(window).width()<800&&($(".open-caption").on("click",function(){$("#skills-descOpen").css("display","none"),$("#skills-descClose").css("display","flex"),$(".scpmt").css("display","flex"),$(".close-caption").css("z-index","999"),$("#hide_h2").css("display","flex")}),$(".close-caption").on("click",function(){$("#skills-descOpen").css("display","flex"),$("#skills-descClose").css("display","none"),$(".scpmt").css("display","none"),$(".open-caption").css("z-index","999"),$("#hide_h2").css("display","none")}),$(".gdReadmore").on("click",function(){$("#gd-descOpen").css("display","none"),$("#gd-descClose").css("display","flex"),$(".scpmt-gd").css("display","flex"),$(".gdClose").css("z-index","999"),$("#hide_h2_gd").css("display","flex")}),$(".gdClose").on("click",function(){$("#gd-descOpen").css("display","flex"),$("#gd-descClose").css("display","none"),$(".scpmt-gd").css("display","none"),$(".gdReadmore").css("z-index","999"),$("#hide_h2_gd").css("display","none")}),$(".dmReadmore").on("click",function(){$("#dm-descOpen").css("display","none"),$("#dm-descClose").css("display","flex"),$(".scpmt-dm").css("display","flex"),$(".dmClose").css("z-index","999"),$("#hide_h2_dm").css("display","flex")}),$(".dmClose").on("click",function(){$("#dm-descOpen").css("display","flex"),$("#dm-descClose").css("display","none"),$(".scpmt-dm").css("display","none"),$(".dmReadmore").css("z-index","999"),$("#hide_h2_dm").css("display","none")}),$(".tReadmore").on("click",function(){$("#t-descOpen").css("display","none"),$("#t-descClose").css("display","flex"),$(".scpmt-t").css("display","flex"),$(".tClose").css("z-index","999"),$("#hide_h2_t").css("display","flex")}),$(".tClose").on("click",function(){$("#t-descOpen").css("display","flex"),$("#t-descClose").css("display","none"),$(".scpmt-t").css("display","none"),$(".tReadmore").css("z-index","999"),$("#hide_h2_t").css("display","none")}),$("#open_pic").on("click",function(){$(".img-split").css("width","92%")}));var i,n=document.getElementsByClassName("accordion");for(i=0;i<n.length;i++)n[i].onclick=function(){this.classList.toggle("active");var s=this.nextElementSibling;"block"===s.style.display?s.style.display="none":s.style.display="block"};$(".set > a").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".content").slideUp(200),$(".set > a i").removeClass("fa-minus").addClass("fa-plus")):($(".set > a i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".set > a").removeClass("active"),$(this).addClass("active"),$(".content").slideUp(200),$(this).siblings(".content").slideDown(200))}),jQuery(window).width()>=482&&$(".nav-folders").on("click",function(){$(".panel").hide(300)})}),$("document").ready(function(){function s(s){$(".fs-gal-view > .fs-gal-prev").fadeOut(),$(".fs-gal-view > .fs-gal-next").fadeOut();var e=s.attr("alt");e&&""!=e||(e=s.attr("title")),$(".fs-gal-view > h1").text(e),e&&""!=e?$(".fs-gal-view > h1").fadeIn():$(".fs-gal-view > h1").fadeOut();var i=s.data("url");$(".fs-gal-view").css("background-image","url("+i+")");var n=$(".fs-gal").index(s),l=n-1,a=n+1;l>=0&&($(".fs-gal-view > .fs-gal-prev").data("img-index",l),$(".fs-gal-view > .fs-gal-prev").fadeIn()),a<$(".fs-gal").length&&($(".fs-gal-view > .fs-gal-next").data("img-index",a),$(".fs-gal-view > .fs-gal-next").fadeIn()),$(".fs-gal-view").fadeIn()}$(".fs-gal").click(function(){s($(this))}),$(".fs-gal-view .fs-gal-nav").click(function(){var e=$(this).data("img-index");s($($(".fs-gal").get(e)))}),$(".fs-gal-view .fs-gal-close").click(function(){$(".fs-gal-view").fadeOut()}),$("body").keydown(function(s){37==s.keyCode?$(".fs-gal-view .fs-gal-prev").click():39==s.keyCode?$(".fs-gal-view .fs-gal-next").click():27==s.keyCode&&$(".fs-gal-view .fs-gal-close").click()})});var $allVideos=$("iframe[src^='//www.youtube.com']"),$fluidEl=$("body");$allVideos.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(window).resize(function(){var s=$fluidEl.width();$allVideos.each(function(){var e=$(this);e.width(s).height(s*e.data("aspectRatio"))})}).resize();