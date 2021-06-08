const badgeEl = document.querySelector('header.badges');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY); 
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0
        });
    }else{
         badgeEl.style.display = 'block';
    }

}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in ');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*.7,
        opacity:1

    });
}); 


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부 
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});


const promotionEl = document.querySelector ('.promotion');
const promotioToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotioToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }

})

function random(min,max){

  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}


function floatingObject(selector,delay,size) {
  gsap.to(selector,radom(1.5,2.5),{
    y:size,
    repeat:-1,
    yoyo:true,
    ease: Power1.easeInOut,
    delay: randim(0,delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',5,15);
floatingObject('.floating3',1.5,15);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement:spyEL,
    triggerHook: .8
  })
  .setClassToggle(sptEl,'show')
  .addTo(new ScrollMagic.Controller());

});