const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const label = document.querySelector(".label");
const li = document.querySelectorAll("li");
const texts = document.querySelectorAll(".section-text");




let menustatus = false;

burger.addEventListener('click', () => {
    menustatus ? closeNav() : openNav()

})

// console.log(menustatus);

const tl = new TimelineMax();

const openNav = () => {
    // console.log('open');
    burger.classList.toggle('burger-active')
    tl
        .fromTo(menu, 0, { x: "100vw", }, { x: "0", ease: Power2.easeInOut })
        .fromTo(menu, 1, { opacity: 0, }, { opacity: 1, ease: Power2.easeInOut })
        // .fromTo(label, 1, { opacity: 0,  /*  x: "25vh" */ }, { opacity: 1,  /*  x: "0", */  ease: Power2.easeInOut }, '-=0.6')
        .fromTo(li[0], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=0.5')
        .fromTo(li[1], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[2], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[3], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[4], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[5], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    .fromTo(li[6], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    // .fromTo(li[7], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    return menustatus = !menustatus
    // .fromTo(menu, 1.2, {  opacity: 0, x: "0",   }, { opacity: 1, x: "0", ease: Power2.easeInOut })
}
const closeNav = () => {
    // console.log('close');

    tl
        // .fromTo(li[7], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[6], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut })
        .fromTo(li[5], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut },  '-=.5')
        .fromTo(li[4], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[3], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[2], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[1], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[0], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')


        // .fromTo(label, 1.2, {  opacity: 1,  }, { opacity: 0,    ease: Power2.easeInOut }, '-=1.2')

        .fromTo(menu, 1, { opacity: 1, /* zIndex: 20 */ /* x: "0" */ }, { opacity: 0, /* zIndex: -1, */ /*  x: "100vw", */  ease: Power2.easeInOut })
        .fromTo(menu, 0, { x: "0" }, { x: "100vw", ease: Power2.easeInOut })

    burger.classList.toggle('burger-active')
    return menustatus = !menustatus
    // .fromTo(menu, 1.2, {  opacity: 1, x: "0",  }, { opacity: 0, x: "0",   ease: Power2.easeInOut })
}


const body = document.querySelector("body");
const sectionMain = document.querySelector(".section-main");
const mainH1 = document.querySelector('.text-main h1');
const mainP = document.querySelector('.text-main p');
const rect = body.getBoundingClientRect();


window.addEventListener('scroll', () => {

    const offset = Math.round(window.pageYOffset);
    // console.log('rect',  Math.abs(rect.y));
    // console.log('pageYOffset',  window.pageYOffset);    


    if (window.pageYOffset > sectionMain.offsetHeight -20) {
        burger.classList.add('burger-black')

    } else {
        burger.classList.remove('burger-black')

    }  

    if(window.pageYOffset < sectionMain.offsetHeight){
        mainP.style.opacity = 1 + offset * (-0.003);
        mainH1.style.opacity = 1.7 + offset * (-0.0039);
        // console.log('1',  1 + offset * (-0.003));
        // console.log('2', 1 + offset * (-0.001));
        
    }



    //     // sectionMain.style.backgroundPositionY = offset * 0.2 + 'px';
        // mainH1.style.marginTop = offset / 1.7 + 'px';
    //     // mainH1.style.marginLeft  =offset / 7 + 'px';
    //     // mainH1.style.opacity = 1 + offset * (-0.001);
        // mainP.style.opacity = 1 + offset * (-0.003);

        // log
    //     // mainH1.setAttribute("style", "margin-top: " + offset / 1.7 + 'px' );


})



var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

const emptySection = document.querySelector('.section-empty');
const watercolorSection = document.querySelector('.section-watercolor');
const incSection = document.querySelector('.section-inc');
const pencilSection = document.querySelector('.section-pencil');
const sepiaSection = document.querySelector('.section-sepia');
const priceSection = document.querySelector('.section-price');

// const scrollTo = ()=>{

//     pencilSection.scrollIntoView({behavior: "smooth"}); // Прокрутка до верхней границы
//     // watercolorSection.scrollIntoView(false);
//     console.log('scrolltoo');
    
    
// }

// emptySection.addEventListener('click', ()=> scrollTo() )

// SWIPE
// var touchstartX = 0;
// var touchstartY = 0;
// var touchendX = 0;
// var touchendY = 0;


// emptySection.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;

// });

// emptySection.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     console.log('touch');
    
//     scrollTo();
// }); 

// function swipe() {
   
//     if (touchendY < touchstartY) {
//         console.log('-');
//         scrollTo();
//     }
//     if (touchendY > touchstartY) {
//         console.log('+');
        
//         scrollTo();
//     }
// }