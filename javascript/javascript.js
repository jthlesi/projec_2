// 원페이지
$('.move').click(function () {
  $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 400);
});

//햄버거메뉴
$("#small").click(function () {
  if ($('.ham').hasClass("fa-bars")) {
    $("#navbar_small").addClass("open");
    $(".ham").removeClass("fa-bars").addClass("fa-times");
  } else {
    $("#navbar_small").removeClass("open");
    $(".ham").removeClass("fa-times").addClass("fa-bars");
  };
});

// 슬라이드
var wrapWidth = document.querySelector('#slide').offsetWidth;
var slideBox = document.querySelectorAll('.rev_box');
var slidesBox = document.querySelector("#rev_slide");
var idx = 0;


if (window.matchMedia("(min-width:1000px)").matches) {
  for (i = 0; i < slideBox.length; i++) {
    slideBox[i].style.width = wrapWidth / 3 + "px";
  };

  function slide() {
    slidesBox.style.left = -wrapWidth / 3 + 'px';

    $(".dot").eq(idx + 1).addClass("on").siblings().removeClass("on");

    idx++;

    if (idx > $("#slide #rev_slide .rev_box").length - 3) {
      slidesBox.style.left = "0px"
      idx = 0;
      $(".dot").eq(idx).addClass("on").siblings().removeClass("on");
    };
  };
} else if (window.matchMedia("(min-width:600px)").matches){
  for (i = 0; i < slideBox.length; i++) {
    slideBox[i].style.width = wrapWidth / 2 + "px";
  };

  var li = document.createElement("li");
  li.setAttribute("class", "dot");
  $("#pagi_list").append(li);

  function slide() {
    slidesBox.style.left = -(wrapWidth / 2) * (idx + 1) + 'px';

    $(".dot").eq(idx + 1).addClass("on").siblings().removeClass("on");

    idx++;

    if (idx > $("#slide #rev_slide .rev_box").length - 2) {
      slidesBox.style.left = "0px"
      idx = 0;
      $(".dot").eq(idx).addClass("on").siblings().removeClass("on");
    };
  };
} else {
  for (i = 0; i < slideBox.length; i++) {
    slideBox[i].style.width = wrapWidth + "px";
  };

  for(i=0;i<2;i++){
  var li = document.createElement("li");
  li.setAttribute("class", "dot");
  $("#pagi_list").append(li);
  };

  function slide() {
    slidesBox.style.left = -wrapWidth * (idx + 1) + 'px';

    $(".dot").eq(idx + 1).addClass("on").siblings().removeClass("on");

    idx++
    ;
    if (idx > $("#slide #rev_slide .rev_box").length - 1) {
      slidesBox.style.left = "0px"
      idx = 0;
      $(".dot").eq(idx).addClass("on").siblings().removeClass("on");
    };
  };
};

setInterval(slide, 3000);

window.onresize = function () {
  document.location.reload();
};