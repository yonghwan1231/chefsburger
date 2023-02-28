$(function(){


    $(".sub_bg, .sub").hide()

    $(".main>li").mouseover(function(){
        $(".ad",this).addClass("add")
        $(".sub_bg, .sub").stop().slideDown("fast")
    })

    $(".main>li").mouseout(function(){
        $(".ad",this).removeClass("add")
        $(".sub_bg, .sub").stop().slideUp("fast")
    })

})