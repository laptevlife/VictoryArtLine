const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const loader = document.querySelector(".loader");
const label = document.querySelector(".label");
const li = document.querySelectorAll("li");
const texts = document.querySelectorAll(".section-text");
const orderBtns = document.querySelectorAll(".btn");

const body = document.querySelector("body");
const sectionMain = document.querySelector(".section-main");
const mainH1 = document.querySelector('.text-main h1');
const mainP = document.querySelector('.text-main p');
const mainPDT = document.querySelector('.text-main .dt');
const rect = body.getBoundingClientRect();
const loaderText = document.querySelector(".loader-text h1");


const emptySection = document.querySelector('.section-empty');
const watercolorSection = document.querySelector('.section-watercolor');
const incSection = document.querySelector('.section-inc');
const pencilSection = document.querySelector('.section-pencil');
const sepiaSection = document.querySelector('.section-sepia');
const priceSection = document.querySelector('.section-price');

const materialInputs = document.querySelectorAll('.material input')
const sizeInputs = document.querySelectorAll('.size input')
const showPrice = document.querySelector('.price');



//CALCULATOR
let materialIndex = 0;
let materialRate = 2800;
let sizeRate = false;
const slides =  document.querySelectorAll('.slide')

const slider =(index)=>{
  slides.forEach( i => {
    i.classList.remove('active')
  })
  slides[index].classList.add('active')
}

slider(materialIndex);

const calculate = (arr, func) => {

  arr.forEach((i, index) => { 

    showPrice.textContent= '0'
    i.addEventListener('click', () => {
      arr.forEach((j) => {
        j.checked = false;
      })
      i.checked = true;
      if(func == 'material'){
        materialRate =  i.value;
        materialIndex = index;
        slider(materialIndex)
      }
      if(func == 'size'){
        sizeRate = i.value;
      }
      let res = materialRate * sizeRate;
      // console.log(sizeRate);
      
      showPrice.textContent = sizeRate ?  res.toFixed(0) : '0';
 
      // console.log(materialIndex, materialRate, sizeRate);


    })
  })
}
calculate(materialInputs, 'material')
calculate(sizeInputs, 'size')



// MENU

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
    .fromTo(menu, 0.5, { opacity: 0, }, { opacity: 1, ease: Power2.easeInOut })
    // .fromTo(label, 1, { opacity: 0,  /*  x: "25vh" */ }, { opacity: 1,  /*  x: "0", */  ease: Power2.easeInOut }, '-=0.6')
    .fromTo(li[0], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[1], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[2], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[3], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[4], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[5], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[6], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
  .fromTo(li[7], .5, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.4')
  return menustatus = !menustatus
  // .fromTo(menu, 1.2, {  opacity: 0, x: "0",   }, { opacity: 1, x: "0", ease: Power2.easeInOut })
}
const closeNav = () => {
  // console.log('close');

  tl
    // .fromTo(li[7], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
    .fromTo(li[7], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut })
    .fromTo(li[6], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[5], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[4], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[3], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[2], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[1], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')
    .fromTo(li[0], .5, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.4')


    // .fromTo(label, 1.2, {  opacity: 1,  }, { opacity: 0,    ease: Power2.easeInOut }, '-=1.2')

    .fromTo(menu, 1, { opacity: 1, /* zIndex: 20 */ /* x: "0" */ }, { opacity: 0, /* zIndex: -1, */ /*  x: "100vw", */  ease: Power2.easeInOut } , '-=.5')
    .fromTo(menu, 0, { x: "0" }, { x: "100vw", ease: Power2.easeInOut })

  burger.classList.toggle('burger-active')
  return menustatus = !menustatus
  // .fromTo(menu, 1.2, {  opacity: 1, x: "0",  }, { opacity: 0, x: "0",   ease: Power2.easeInOut })
}




// PREVIEW

const previewMobil = () => {
  tl
    .fromTo(loaderText, 2, { opacity: 0, y: "-10vh", fontSize: "1.4rem", }, { opacity: 1, y: "-10vh", fontSize: "1.4rem", ease: Power2.easeInOut })
    .fromTo(loaderText, 2, { y: "-10vh", fontSize: "1.4rem", }, { y: "0", fontSize: "0.7rem", ease: Power2.easeInOut })
    .fromTo(loader, 1.5, { opacity: 1, display: "block", }, { opacity: 0, display: "none", ease: Power2.easeInOut }, '-=0.8')
}
const previeDesktop = () => {
  tl
    .fromTo(loaderText, 2, { opacity: 0, y: "10vh", fontSize: "3.4rem", }, { opacity: 1, y: "10vh", fontSize: "3.4rem", ease: Power2.easeInOut })
    .fromTo(loaderText, 2, { y: "10vh", fontSize: "3.4rem", }, { y: "-8vh", fontSize: "2.4rem", ease: Power2.easeInOut })
    .fromTo(loader, 1.5, { opacity: 1, display: "block", }, { opacity: 0, display: "none", ease: Power2.easeInOut }, '-=0.8')
}
const previeTablet = () => {
  tl
    .fromTo(loaderText, 2, { opacity: 0, y: "20vh", fontSize: "2.4rem", }, { opacity: 1, y: "20vh", fontSize: "2.4rem", ease: Power2.easeInOut })
    .fromTo(loaderText, 2, { y: "20vh", fontSize: "2.4rem", }, { y: "6vh", fontSize: "1.4rem", ease: Power2.easeInOut })
    .fromTo(loader, 1.5, { opacity: 1, display: "block", }, { opacity: 0, display: "none", ease: Power2.easeInOut }, '-=0.8')
}
// setTimeout( ()=> preview(), 1500) 

const width = () => {
  // console.log(body.clientWidth);
  if (body.clientWidth > 650 && body.clientWidth < 800) {
    // console.log('hhghgfghf');

    previeTablet()
  }
  else if (body.clientWidth > 800) {
    previeDesktop()
  }
  // else if(body.clientWidth < 800){
  //     previewMobil()
  // }


}


// width()

// window.addEventListener('resize', ()=> width() )


// SCROLL EVENTS

window.addEventListener('scroll', () => {

  const offset = Math.round(window.pageYOffset);
  if (window.pageYOffset > sectionMain.offsetHeight - 20) {
    burger.classList.add('burger-black')
  } else {
    burger.classList.remove('burger-black')
  }

  if (window.pageYOffset < sectionMain.offsetHeight) {
    mainP.style.opacity = 1 + offset * (-0.003);
    mainPDT.style.opacity = 1 + offset * (-0.003);
    mainH1.style.opacity = 1.7 + offset * (-0.0039);
  }
})


orderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    priceSection.scrollIntoView({ behavior: "smooth" });
  })
})






var swiper1 = new Swiper('.sw1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  activeIndex: 4,
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper2 = new Swiper('.sw2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper3 = new Swiper('.sw3', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper4 = new Swiper('.sw4', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper5 = new Swiper('.sw5', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//   console.log(swiper1);
//   swiper1.activeIndex = 4;
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
//   });



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