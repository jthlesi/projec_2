$('.move').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 400);
});


$("#small").click(function () {
  $("#navbar_small").addClass("open");
  if($('.ham').hasClass("fa-bars")){
  $("#navbar_small").addClass("open");
    $(".ham").removeClass("fa-bars").addClass("fa-times");
  }else{
  $("#navbar_small").removeClass("open");
  $(".ham").removeClass("fa-times").addClass("fa-bars");}
});


window.onresize = function () {
  document.location.reload();
};




// setInterval(slide, 4000);

// var idx = 0;

//  function slide(){
   
//     $("#slide #rev_slide").animate({
//       "left":-440+"px"
//     },2000);
//     $(".dot").eq(idx+1).addClass("on").siblings().removeClass("on");

//     if(idx> $("#slide #rev_slide .rev_box").length-3){
//       $("#slide #rev_slide").animate({
//         "left":0
//       },1000);
//       idx=0;
//       $(this).addClass("on").siblings().removeClass("on");
      
//     }
//     idx++;
//   }

 