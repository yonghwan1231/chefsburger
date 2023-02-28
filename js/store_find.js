$(function(){

  $(".select2 > option").not(".default").hide()

  $(".select1").change(function(){
    if($(".select1").val()=="default"){
      $(".select2 > option").not(".default").hide()
    } 
  
    if($(".select1").val()=="seoul"){
      $(".select2 > .seoul_sub").show()
      $(".select2 > option").not(".seoul_sub").not(".default").hide()
    } 
  
    if($(".select1").val()=="gyeonggi"){
      $(".select2 > .gyeonggi_sub").show()
      $(".select2 > option").not(".gyeonggi_sub").not(".default").hide()
    }
  })
})