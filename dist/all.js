$(document).ready(function(){function i(){if($(".hetpage").css("width")>"480px"){$(window).scroll(function(){$(window).scrollTop()>o?($(".mobile-container").addClass("sticky"),$("#folders-container").addClass("reduced")):($(".mobile-container").removeClass("sticky"),$("#folders-container").removeClass("reduced"))});var i=$(".mobile-container").outerHeight();$(".hamburger-menu").click(function(o){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-i},1e3),o.preventDefault()});var o=$(".nav-folders").offset().top}$(".hamburger-menu").click(function(i){var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-22},800),i.preventDefault()}),$(".haus-menu, #hetinfo").click(function(){$(".mobile-container").show(),$(".nav-folders").show(),$(".exit-menu").show(),$(".haus").hide(1e3)}),$(".exit-menu").on("click",function(){$(".mobile-container").hide(200)}),$(".main-menu").on("click",function(){$("#menu-buttons").show(1e3)}),$(".menu").on("click",function(){$(".haus").show(500)}),$(".img").click(function(){$src=$(this).attr("src"),!$("#light-box").length>0?($("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>"),$("#light-box").show(),$("#light-box img").attr("src",$src)):($("#light-box").hide(),$("#light-box img").attr("src",$src))}),$("#light-box").click(function(){$src=$(this).append("#dive id='charmtag'>kjkjkjkj</>")}),$("#mygrafix").on("click","#light-box span",function(){$("#light-box").hide()})}i(),$(window).resize(i)});