$(document).ready(function(){jQuery(window).width()<=481&&($(".exit-menu, .hamburger-menu, .logo-desc").on("click",function(){$(".mobile-container").hide(300),$(".haus").show(300)}),$(".haus-menu, #hetinfo").click(function(){$(".mobile-container").show(500),$(".nav-folders").show(480),$(".haus").hide(500),$(".exit-menu").show(700)}),jQuery(window).resize(function(){jQuery(window).width()>500&&($("#folders-container").show(300),jQuery(".haus").css("display","none"))})),$(window).scroll(function(){$(window).scrollTop()>e?($(".mobile-container").addClass("sticky"),$("#folders-container").addClass("reduced")):($(".mobile-container").removeClass("sticky"),$("#folders-container").removeClass("reduced"))});var e=$(".nav-folders").offset().top,i=0;if($(".hamburger-menu, .logo-desc").click(function(e){var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-i},800),e.preventDefault()}),jQuery(window).width()>481){var e=$(".nav-folders").offset().top,i=64;$(".hamburger-menu, .logo-desc").click(function(e){var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-i},800),e.preventDefault()})}$(".img").click(function(){$src=$(this).attr("src"),!$("#light-box").length>0?($("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>"),$("#light-box").show(),$("#light-box img").attr("src",$src),$("#light-box").append("<div id='next'<span class ='next'>-></span></div>"),$("#light-box").append("<div id='prev'<span class ='prev'><-</span></div>")):($("#light-box").show(),$("#light-box img").attr("src",$src))}),$("#mygrafix").on("click","#light-box span",function(){$("#light-box").hide()}),$(".next").on("click",function(){var e=$(".active"),i=e.next();i.length&&(e.removeClass("active").css("z-index",-10),i.addClass("active").css("z-index",10))}),$(".prev").on("click",function(){var e=$(".active"),i=e.prev();i.length&&(e.removeClass("active").css("z-index",-10),i.addClass("active").css("z-index",10))})});