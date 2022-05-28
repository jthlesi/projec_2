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
var boxWidth = document.querySelectorAll('.rev_box');
var slideBox = document.querySelector("#rev_slide");

for(i=0;i<boxWidth.length;i++){
boxWidth[i].style.width = wrapWidth / 3 +"px";
}

var idx = 0;
function slide() {
  slideBox.style.left = -wrapWidth / 3+'px';

  $(".dot").eq(idx+1).addClass("on").siblings().removeClass("on");

  idx++;

  if (idx > $("#slide #rev_slide .rev_box").length - 3) {
    slideBox.style.left =  "0px"
    idx = 0;
    $(".dot").eq(idx).addClass("on").siblings().removeClass("on");
  }
}

setInterval(slide, 3000);


