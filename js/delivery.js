$(function(){
    
   $(".phone_number").hide()

   $(".phone_order").click(function(){
    $(".phone_number").show()
    return false
   })

   $(".hide").click(function(){
    $(".phone_number").hide()
   })

})