$(document).ready(function(){function e(){if($(".hetpage").css("width")>"480px"){$(window).scroll(function(){$(window).scrollTop()>i?($(".mobile-container").addClass("sticky"),$("#folders-container").addClass("reduced")):($(".mobile-container").removeClass("sticky"),$("#folders-container").removeClass("reduced"))});var e=$(".mobile-container").outerHeight();$(".hamburger-menu").click(function(i){var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top-e},1e3),i.preventDefault()});var i=$(".nav-folders").offset().top}$(".hamburger-menu").click(function(e){var i=$(this).attr("href");$("html, body").animate({scrollTop:$(i).offset().top-22},800),e.preventDefault()}),$(".haus-menu, #hetinfo").click(function(){$(".mobile-container").show(900),$(".nav-folders").show(880),$(".exit-menu").show(12e3),$(".haus").hide(1e3)}),$(".exit-menu").on("click",function(){$(".mobile-container").hide(500)}),$(".main-menu").on("click",function(){$("#menu-buttons").show(1e3)}),$(".exit-menu").on("click",function(){$(".haus").show(500)}),$(".img").click(function(){$src=$(this).attr("src"),!$("#light-box").length>0?($("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>"),$("#light-box").show(),$("#light-box img").attr("src",$src),$("#light-box").append("<div id='next'<span class ='next'>-></span></div>"),$("#light-box").append("<div id='prev'<span class ='prev'><-</span></div>")):($("#light-box").show(),$("#light-box img").attr("src",$src))}),$("#mygrafix").on("click","#light-box span",function(){$("#light-box").hide()}),$(".next").on("click",function(){var e=$(".active"),i=e.next();i.length&&(e.removeClass("active").css("z-index",-10),i.addClass("active").css("z-index",10))}),$(".prev").on("click",function(){var e=$(".active"),i=e.prev();i.length&&(e.removeClass("active").css("z-index",-10),i.addClass("active").css("z-index",10))})}e(),$(window).resize(e)});