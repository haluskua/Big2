$(document).ready(function(){jQuery(window).width()<=480&&($(".exit-menu, .hamburger-menu, .logo-desc").on("click",function(){$(".mobile-container").hide(300),$(".haus").show(300)}),$(".haus-menu, #hetinfo").click(function(){$(".mobile-container").show(500),$(".nav-folders").show(480),$(".haus").hide(500),$(".exit-menu").show(700)}),$(".container_text").click(function(){$("#open_read").hide(300)}),jQuery(window).resize(function(){jQuery(window).width()>642&&($("#folders-container").show(300),jQuery(".haus").css("display","none"))}),anime({targets:".box",translateY:[{value:-5,duration:1100},{value:0,duration:1100}],rotate:{value:"-0.02turn",duration:3500,easing:"easeInOutQuart"},scale:{value:1.05,duration:2500,delay:1e3,easing:"easeInOutQuart"},loop:!0,delay:function(e,t,l){return 2e3*t}})),$(window).scroll(function(){$(window).scrollTop()>e?($(".mobile-container").addClass("sticky"),$("#folders-container").addClass("reduced")):($(".mobile-container").removeClass("sticky"),$("#folders-container").removeClass("reduced"))});var e=$(".nav-folders").offset().top,t=40;if($(".hamburger-menu, .logo-desc, .grafix, .box").click(function(e){var l=$(this).attr("href");$("html, body").animate({scrollTop:$(l).offset().top-t},800),e.preventDefault()}),jQuery(window).width()>481){var e=$(".nav-folders").offset().top,t=62;$(".hamburger-menu, .logo-desc, #snaps, .box").click(function(e){var l=$(this).attr("href");$("html, body").animate({scrollTop:$(l).offset().top-t},800),e.preventDefault()})}if(jQuery(window).width()>800){var e=$(".nav-folders").offset().top,t=0;$(".hamburger-menu, .logo-desc, #snaps, .box").click(function(e){var l=$(this).attr("href");$("html, body").animate({scrollTop:$(l).offset().top-t},800),e.preventDefault()})}jQuery(window).width()>801&&($("#hide_h2, #hide_h2_gd, #hide_h2_dm, #hide_h2_t").css("display","flex"),$("#t-descOpen, #t-descClose, #skills-descOpen, #skills-descClose, #gd-descClose, #gd-descOpen, #dm-descOpen, #dm-descClose").css("display","none"),$(".scpmt, .scpmt-gd, .scpmt-dm, .scpmt-t").css("display","flex")),jQuery(window).width()<800&&($(".open-caption").on("click",function(){$("#skills-descOpen").css("display","none"),$("#skills-descClose").css("display","flex"),$(".close-caption").css("z-index","999"),$(".scpmt").css("display","flex"),$("#hide_h2").css("display","flex")}),$(".close-caption").on("click",function(){$("#skills-descOpen").css("display","flex"),$("#skills-descClose").css("display","none"),$(".open-caption").css("z-index","999"),$(".scpmt").css("display","none"),$("#hide_h2").css("display","none")}),$(".gdReadmore").on("click",function(){$("#gd-descOpen").css("display","none"),$("#gd-descClose").css("display","flex"),$(".gdClose").css("z-index","999"),$(".scpmt-gd").css("display","flex"),$("#hide_h2_gd").css("display","flex")}),$(".gdClose").on("click",function(){$("#gd-descOpen").css("display","flex"),$("#gd-descClose").css("display","none"),$(".gdReadmore").css("z-index","999"),$(".scpmt-gd").css("display","none"),$("#hide_h2_gd").css("display","none")}),$(".tReadmore").on("click",function(){$("#t-descOpen").css("display","none"),$("#t-descClose").css("display","flex"),$(".tClose").css("z-index","999"),$(".scpmt-t").css("display","flex"),$("#hide_h2_t").css("display","flex")}),$(".tClose").on("click",function(){$("#t-descOpen").css("display","flex"),$("#t-descClose").css("display","none"),$(".scpmt-t").css("display","none"),$(".tReadmore").css("z-index","999"),$("#hide_h2_t").css("display","none")}),$(".dmReadmore").on("click",function(){$("#dm-descOpen").css("display","none"),$("#dm-descClose").css("display","flex"),$(".scpmt-dm").css("display","flex"),$(".dmClose").css("z-index","999"),$("#hide_h2_dm").css("display","flex")}),$(".dmClose").on("click",function(){$("#dm-descOpen").css("display","flex"),$("#dm-descClose").css("display","none"),$(".scpmt-dm").css("display","none"),$(".dmReadmore").css("z-index","999"),$("#hide_h2_dm").css("display","none")}),$("#open_pic").on("click",function(){$(".img-split").css("width","92%")}));var l,i=document.getElementsByClassName("accordion");for(l=0;l<i.length;l++)i[l].onclick=function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"};$(".set > a").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".content").slideUp(200),$(".set > a i").removeClass("fa-minus").addClass("fa-plus")):($(".set > a i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".set > a").removeClass("active"),$(this).addClass("active"),$(".content").slideUp(200),$(this).siblings(".content").slideDown(200))}),jQuery(window).width()>=482&&($(".nav-folders").on("click",function(){$(".panel").hide(300)}),anime({targets:".box",easing:"easeInOutSine",translateY:[{value:-10,duration:4100,delay:1e3},{value:0,duration:3300,delay:800}],easing:"easeInOutQuart",rotate:[{value:"-0.01turn",duration:4400,delay:1e3},{value:"0turn",duration:3300,delay:800}],easing:"easeInOutQuart",scale:[{value:1.05,duration:3800,delay:1e3},{value:1,duration:3400,delay:1e3}],loop:!0,delay:function(e,t,l){return 840*t}}),anime({targets:".animation-caption",translateY:[{value:30,duration:3810,dealy:600},{value:0,duration:3860,delay:600}]}))}),$("document").ready(function(){function e(e){$(".fs-gal-view > .fs-gal-prev").fadeOut(),$(".fs-gal-view > .fs-gal-next").fadeOut();var t=e.attr("alt");t&&""!=t||(t=e.attr("title")),$(".fs-gal-view > h1").text(t),t&&""!=t?$(".fs-gal-view > h1").fadeIn():$(".fs-gal-view > h1").fadeOut();var l=e.data("url");$(".fs-gal-view").css("background-image","url("+l+")");var i=$(".fs-gal").index(e),n=i-1,s=i+1;n>=0&&($(".fs-gal-view > .fs-gal-prev").data("img-index",n),$(".fs-gal-view > .fs-gal-prev").fadeIn()),s<$(".fs-gal").length&&($(".fs-gal-view > .fs-gal-next").data("img-index",s),$(".fs-gal-view > .fs-gal-next").fadeIn()),$(".fs-gal-view").fadeIn()}$(".fs-gal").click(function(){e($(this))}),$(".fs-gal-view .fs-gal-nav").click(function(){var t=$(this).data("img-index");e($($(".fs-gal").get(t)))}),$(".fs-gal-view .fs-gal-close").click(function(){$(".fs-gal-view").fadeOut()}),$("body").keydown(function(e){37==e.keyCode?$(".fs-gal-view .fs-gal-prev").click():39==e.keyCode?$(".fs-gal-view .fs-gal-next").click():27==e.keyCode&&$(".fs-gal-view .fs-gal-close").click()})});var $allVideos=$("iframe[src^='//www.youtube.com']"),$fluidEl=$("body");$allVideos.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(window).resize(function(){var e=$fluidEl.width();$allVideos.each(function(){var t=$(this);t.width(e).height(e*t.data("aspectRatio"))})}).resize();var c=document.getElementById("myCanvas"),ctx=c.getContext("2d");ctx.beginPath(),ctx.moveTo(797,0),ctx.lineTo(764,22),ctx.lineTo(764,22),ctx.lineTo(730,0),ctx.lineTo(695,22),ctx.lineTo(660,0),ctx.lineTo(625,22),ctx.lineTo(590,0),ctx.lineTo(555,22),ctx.lineTo(520,0),ctx.lineTo(485,22),ctx.lineTo(450,0),ctx.lineTo(415,22),ctx.lineTo(380,0),ctx.lineTo(345,22),ctx.lineTo(310,0),ctx.lineTo(275,22),ctx.lineTo(240,0),ctx.lineTo(205,22),ctx.lineTo(170,0),ctx.lineTo(135,22),ctx.lineTo(100,0),ctx.lineTo(65,22),ctx.lineTo(30,0),ctx.moveTo(790,24),ctx.lineTo(764,46),ctx.lineTo(730,24),ctx.lineTo(695,46),ctx.lineTo(660,24),ctx.lineTo(625,46),ctx.lineTo(590,24),ctx.lineTo(555,46),ctx.lineTo(520,24),ctx.lineTo(485,46),ctx.lineTo(450,24),ctx.lineTo(415,46),ctx.lineTo(380,24),ctx.lineTo(345,46),ctx.lineTo(310,24),ctx.lineTo(275,46),ctx.lineTo(240,24),ctx.lineTo(205,46),ctx.lineTo(170,24),ctx.lineTo(135,46),ctx.lineTo(100,24),ctx.lineTo(65,46),ctx.lineTo(30,24),ctx.moveTo(790,70),ctx.lineTo(764,46),ctx.lineTo(730,70),ctx.lineTo(695,46),ctx.lineTo(660,70),ctx.lineTo(625,46),ctx.lineTo(590,70),ctx.lineTo(555,46),ctx.lineTo(520,70),ctx.lineTo(485,46),ctx.lineTo(450,70),ctx.lineTo(415,46),ctx.lineTo(380,70),ctx.lineTo(345,46),ctx.lineTo(310,70),ctx.lineTo(275,46),ctx.lineTo(240,70),ctx.lineTo(205,46),ctx.lineTo(170,70),ctx.lineTo(135,46),ctx.lineTo(100,70),ctx.lineTo(65,46),ctx.lineTo(30,70),ctx.strokeStyle="#aab5b4",ctx.stroke(),(ctx=(c=document.getElementById("myCanvas-mobile")).getContext("2d")).beginPath(),ctx.moveTo(50,0),ctx.lineTo(84,20),ctx.lineTo(84,59),ctx.lineTo(50,78),ctx.lineTo(16,59),ctx.lineTo(16,20),ctx.lineTo(50,0),ctx.lineTo(84,20),ctx.strokeStyle="orange",ctx.font="1.4em Arial",ctx.fillStyle="orange",ctx.fillText("OHK",25,46),ctx.font="0.74em Helvetica",ctx.fillStyle="#292824",ctx.fillText("OMPHALUS.H.KUA",-1,90),ctx.font="0.84em Helvetica",ctx.fillStyle="orange",ctx.fillText("haluskua.one@gmail.com",-1,110),ctx.fillStyle="#292824e",ctx.fillText("0225732261",-1,130),ctx.arc(50,38,30,0,2*Math.PI),ctx.stroke(),(ctx=(c=document.getElementById("myCanvas-menu")).getContext("2d")).beginPath(),ctx.moveTo(50,0),ctx.lineTo(84,20),ctx.lineTo(84,59),ctx.lineTo(50,78),ctx.lineTo(16,59),ctx.lineTo(16,20),ctx.lineTo(50,0),ctx.lineTo(84,20),ctx.strokeStyle="orange",ctx.font="1.4em Arial",ctx.fillStyle="orange",ctx.fillText("OHK",25,46),ctx.font="0.7em Helvetica",ctx.fillStyle="orange",ctx.fillText("OMPHALUS.H.KUA",-1,90),ctx.font="0.75em Helvetica",ctx.fillStyle="#635d49",ctx.fillText("haluskua.one@gmail.com",-1,110),ctx.fillStyle="#635d49",ctx.fillText("0225732261",-1,130),ctx.arc(50,38,30,0,2*Math.PI),ctx.stroke(),(ctx=(c=document.getElementById("myCanvas-menu1")).getContext("2d")).beginPath(),ctx.moveTo(50,0),ctx.lineTo(84,20),ctx.lineTo(84,59),ctx.lineTo(50,78),ctx.lineTo(16,59),ctx.lineTo(16,20),ctx.lineTo(50,0),ctx.lineTo(84,20);