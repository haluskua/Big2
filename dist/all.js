function checkSize(){if($(".hetpage").css("width")<"480px"){var e=$("#nav").outerHeight();$(".hamburger-menu").click(function(n){var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-e},1755),n.preventDefault()});var n=$("#nav").offset().top;$(window).scroll(function(){$(window).scrollTop()>n?($("#nav").addClass("sticky"),$(".parent-hetpage").addClass("shifted"),$("#folders-container").addClass("reduced")):($("#nav").removeClass("sticky"),$(".parent-hetpage").removeClass("shifted"),$("#folders-container").removeClass("reduced"))}),$(".haus").click(function(){$(".mobile-container").show(500),$(".nav-folders").show(900)}),$(".menu").click(function(){$("#folders-container").show(700)}),$(".exit-menu").on("click",function(){$(".mobile-container").hide(800)}),$(".index").on("click",function(){$(".mobile-container").hide(500)})}else alert("this is no longer a mobile view")}$(document).ready(function(){checkSize(),$(window).resize(checkSize)});