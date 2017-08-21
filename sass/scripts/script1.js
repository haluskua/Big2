


$(window).scroll(function(){
  if($(this).scrollTop()>107){
      $('#navtabs').addClass("sticky");
  }
  else
    {
      $('#navtabs').removeClass("sticky")
    }
});


$(document).ready(function(){
  $("p").click(function(){
    $(this).hide()
  })
});
