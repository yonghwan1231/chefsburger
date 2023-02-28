$(function(){
    
    $(".story").hide()

    $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=100){
        $(".story").fadeIn(2000)
    }
  })

  
    
  $(".delicious").hide()

  $(window).scroll(function(){
  var scrollTopVal=$(this).scrollTop();
  if(scrollTopVal>=600){
      $(".delicious").fadeIn(700)
}
})  

    $(".creative").hide()

    $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=1100){
        $(".creative").fadeIn(700)
    }
    })

    $(".american").hide()

    $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=1600){
        $(".american").fadeIn(700)
    }
    })

    $(".map").hide()

    $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=2000){
        $(".map").fadeIn("fast")
    }
    })

})