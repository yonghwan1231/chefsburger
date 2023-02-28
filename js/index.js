$(function(){

  //슬라이드


  function slide(){
    $(".slide>div:first-child").animate({left:"-1920px"},300,'swing',function(){
      $(".slide>div:first-child").css("left","1920px")
    })
    $(".slide>div:last-child").animate({left:"0"},300,'swing',function(){
      $(this).prependTo(".slide")
    })
  }

  setInterval(slide,4000)

  //이벤트슬라이드
  /*
  $(".notice").css("display","none")
  
  $(".notice_button").click(function(){
    $(".notice").show()
    $(".event").css("display","none")
    return false
  })

  $(".event_button").click(function(){
    $(".event").show()
    $(".notice").css("display","none")
    return false
  })

  $('.notice').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.event').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  */



  //프로덕트

  $(".select_menu>li").click(function(){
    $(".select_menu>li").removeClass("add")
    $(this).addClass("add")
  })
  

  //단품
  
  $(".single").click(function(){
    $(".product").show()
    $(".product_set").hide()
    $(".product_side").hide()
    $(".product_drink").hide()
    return false
  })


  function productNext(){
    $(".product>ul").animate({left:"-294px"},1000,function(){
        $(".product>ul>li:first").appendTo(".product>ul")
        $(".product>ul").css("left","0px")
    })
  }

  clear=setInterval(productNext,2000)

  function prev(){
    $(".product>ul>li:last").prependTo(".product>ul")
    $(".product>ul").css("left","-294px")
    $(".product>ul").animate({left:"0px"},1000)
  }

  $(".pre").click(function(){
    clearInterval(clear);
    prev();
    return false;
  })

  $(".next").click(function(){
    clearInterval(clear);
    productNext()
    return false;
  })


  //세트
  $(".product_set").hide()

  $(".set").click(function(){
    $(".product").hide()
    $(".product_set").show()
    $(".product_side").hide()
    $(".product_drink").hide()
    return false
  })

  function productSetNext(){
    $(".product_set>ul").animate({left:"-294px"},1000,function(){
        $(".product_set>ul>li:first").appendTo(".product_set>ul")
        $(".product_set>ul").css("left","0px")
    })
  }

  clearSet=setInterval(productSetNext,2000)

  function prev_set(){
    $(".product_set>ul>li:last").prependTo(".product_set>ul")
    $(".product_set>ul").css("left","-294px")
    $(".product_set>ul").animate({left:"0px"},1000)
  }

  $(".pre_set").click(function(){
    clearInterval(clearSet);
    prev_set();
    return false;
  })

  $(".next_set").click(function(){
    clearInterval(clearSet);
    productSetNext()
    return false;
  })

  //사이드
  $(".product_side").hide()

  $(".side").click(function(){
    $(".product").hide()
    $(".product_set").hide()
    $(".product_side").show()
    $(".product_drink").hide()
    return false
  })

    //드링크
    $(".product_drink").hide()

    $(".drink").click(function(){
      $(".product").hide()
      $(".product_set").hide()
      $(".product_side").hide()
      $(".product_drink").show()
      return false
    })

  

  //best new


  $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=1000){
        $(".best").animate({"width":"975px"},500)
        $(".new").animate({"width":"975px"},500)
    }
  })


  //브랜드서비스

  $(".contents4").hide()

  $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=1600){
        $(".contents4").fadeIn(2000)
    }
  })

  /*
  $(".survice1").mouseover(function(){
    $(".text1").animate({"opacity":"1.0","height":"450px"},100)
  })

  $(".survice1").mouseout(function(){
    $(".text1").animate({"opacity":"0","height":"350px"},100)
  })

  $(".survice2").mouseover(function(){
    $(".text2").fadeIn("100").animate({"opacity":"1.0","height":"450px"},200)
  })

  $(".survice2").mouseout(function(){
    $(".text2").fadeOut("100").animate({"opacity":"0","height":"350px"},100)
  })

  $(".survice3").mouseover(function(){
    $(".text3").fadeIn("100").animate({"opacity":"1.0","height":"450px"},200)
  })

  $(".survice3").mouseout(function(){
    $(".text3").fadeOut("100").animate({"opacity":"0","height":"350px"},100)
  })
  */

  // SNS

  $('.sns').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    variableWidth: true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // 배달/앱이용방법 아이콘
  
			

  // 매장찾기
  $(window).scroll(function(){
    var scrollTopVal=$(this).scrollTop();
    if(scrollTopVal>=2800){
      setInterval(numbering,50)
    }
  })

  var number=0
  
  function numbering(){
    if(number<105){
        number++;
        $(".storenumbering").text(number)
    } else return false
}



  //스토어이미지이동
/*

    function storeflow(){
    $(".store1").animate({"right":"1900px"},10000,"linear",function(){
      $(".store1").css("right","-1900px")
    })

    $(".store2").animate({"right":"1900"},20000,"linear",function(){
      $(".store2").css("right","-1900px")
    })

    $(".store1").animate({"right":"0px"},10000,"linear")
    storeflow()
    }

    storeflow()
*/

function storeflow(){
  $(".store1").animate({left:"-1920px"},20000,"linear",function(){
      $(".store1>li:first").appendTo(".product>div>ul")
      $(".store1").css("left","0px")
  })
}
  setInterval(storeflow)
})