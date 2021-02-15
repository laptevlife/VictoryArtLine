const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const loader = document.querySelector(".loader");
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

// const loaderText = document.querySelector(".loader-text h1").textContent;
const loaderText = document.querySelector(".loader-text h1");
// const loaderText = document.querySelector(".loader-text h1");
// console.log(typeof(Object.entries(loaderText)[0]));
// console.log(loaderText);

// const entries = Object.entries(loaderText)
// console.log(entries[0][1]);
// console.log(typeof(entries[0][1]));

// console.log(Object.entries(loaderText)[0]);


const preview = ()=>{
    tl
    // .fromTo(entries[0][1], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut })
    // .fromTo(entries[0][1], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=0.5')
    // .fromTo(loaderText, 2, {color: 'black',  }, { color : '#CE43FF',  ease: Power2.easeInOut })
    // .fromTo(loaderText, 0.1, {display: 'none'}, {  display: 'block',   ease: Power2.easeInOut })
    .fromTo(loaderText, 2, {opacity: 0, y: "-10vh", fontSize: "1.4rem",  }, {  opacity: 1, y: "-10vh", fontSize: "1.4rem",  ease: Power2.easeInOut })
    .fromTo(loaderText, 2, { y: "-10vh", fontSize: "1.4rem",  }, {  y: "0", fontSize: "0.7rem",  ease: Power2.easeInOut })
    // .fromTo(loaderText[1], 1, {color: 'black',  }, { color : 'red',  ease: Power2.easeInOut },  '-=.5')
    // .fromTo(loaderText[2], 1, {color: 'black',  }, { color : 'red',  ease: Power2.easeInOut },  '-=.5')
    // .fromTo(loaderText[3], 1, {color: 'black',  }, { color : 'red',  ease: Power2.easeInOut },  '-=.5')
    .fromTo(loader, 1.5, {opacity: 1, display: "block", }, {opacity: 0, display: "none", ease: Power2.easeInOut }, '-=0.8')
}
setTimeout( ()=> preview(), 1500) 
preview()

window.addEventListener('scroll', () => {

    const offset = Math.round(window.pageYOffset);
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