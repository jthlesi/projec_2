$('.move').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 400);
});

// 슬라이드

// var idx = 0;
// var slides = $('#rev_slide .rev_box').length;
// var slidesWidth = $('#rev_slide').width();


// function mov(num) {
//   $('#rev_slide').style.left = -num * $('.rev_box').offsetWidth()+'px';
//   idx = num;

// };

// function currentSlide() {
//   if (idx < cou - 4) {

//       mov(idx + 1);
//   } else {
//       mov(0);
//   }
// };
$(function(){
function slide(){
  $('#rev_slide').style.left = '-500px';
}

setInterval(slide, 4000);
})