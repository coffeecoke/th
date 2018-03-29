$(function () {
    var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
//        spaceBetween: 30,
        freeMode: true,
        direction: 'vertical',
        freeModeMomentum:true,
        autoHeight:true
    });

// var t;
// var imgs = $('img');
// var cancelTimeout = function() {
//     if(t) {
//         clearTimeout(t);
//         t = null;
//     }
// };
// imgs.each(function () {
//     this.addEventListener('touchstart', function(e) {
//
//         t = setTimeout(function() {
//             cancelTimeout();
//         }, 6000);
//         e.preventDefault();
//         return false;
//     });
//     this.addEventListener('touchend', cancelTimeout);
//     this.addEventListener('touchcancel', cancelTimeout);
// })
// console.log(window.orientation );
//  window.addEventListener("orientationchange",function(){
//
//  })





})
