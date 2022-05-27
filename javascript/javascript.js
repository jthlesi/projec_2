// 원페이지
$('.move').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 400);
});

//햄버거메뉴
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


// 슬라이드
var wrapWidth = document.querySelector('#slide').offsetWidth;
var boxWidth = document.querySelectorAll('.rev_box')

for(i=0;i<boxWidth.length;i++){
boxWidth[i].style.width = wrapWidth / 3 +"px";
}


var idx = 0;
function slide() {
  $("#slide #rev_slide").animate({
    "left": - wrapWidth / 3 +"px"
  }, 1500);

  $(".dot").eq(idx+1).addClass("on").siblings().removeClass("on");

  idx++;

  if (idx > $("#slide #rev_slide .rev_box").length - 3) {
    $("#slide #rev_slide").animate({
      "left": 0
    }, 1500);
    idx = 0;
    $(".dot").eq(idx).addClass("on").siblings().removeClass("on");
  }
}



setInterval(slide, 3000);