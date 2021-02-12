const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const label = document.querySelector(".label");
const li = document.querySelectorAll("li");
const texts = document.querySelectorAll(".section-text");




// (function () {

//     // console.log('i', sections);

//     texts.forEach(i => {

//         i.setAttribute('data-aos', "fade-in");
//     //     data-aos="fade-up"
//     //  data-aos-duration="3000"
//      i.setAttribute( 'data-aos-duration',"3000")
//     })
// })()

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
    // .fromTo(li[6], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    // .fromTo(li[7], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    return menustatus = !menustatus
    // .fromTo(menu, 1.2, {  opacity: 0, x: "0",   }, { opacity: 1, x: "0", ease: Power2.easeInOut })
}
const closeNav = () => {
    // console.log('close');

    tl
        // .fromTo(li[7], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        // .fromTo(li[6], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[5], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut })
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





window.addEventListener('scroll', () => {
    const body = document.querySelector("body");
    const sectionMain = document.querySelector(".section-main");
    const mainH1 = document.querySelector('.text-main h1');
    const mainP = document.querySelector('.text-main p');
    const rect = body.getBoundingClientRect();
    const offset = Math.round( window.pageYOffset);
    // console.log(sectionMain.offsetHeight);
    // console.log(offset);
    // console.log('rect', Math.abs(rect.y));


    if (Math.abs(rect.y) > 20) {
        burger.classList.add('burger-black')

    } else {
        burger.classList.remove('burger-black')

    }
    if (Math.abs(rect.y) > sectionMain.offsetHeight) {
        return;
    } else {
        // console.log(Math.abs(rect.y));
   
            // sectionMain.style.backgroundPositionY = offset * 0.2 + 'px';

            // mainH1.style.marginTop = offset / 1.7 + 'px';

            // mainH1.style.marginLeft  =offset / 7 + 'px';
            // mainH1.style.opacity = 1 + offset * (-0.001);
            mainP.style.opacity = 1 + offset * (-0.003);
            mainH1.setAttribute("style", "margin-top: " + offset / 1.7 + 'px' );
    
        
        sectionMain.style.backgroundPositionY = offset * 0.2 + 'px';
        // mainH1.style.marginTop = offset / 1.7 + 'px';
        // // mainH1.style.marginLeft  =offset / 7 + 'px';
        // // mainH1.style.opacity = 1 + offset * (-0.001);
        // mainP.style.opacity = 1 + offset * (-0.003);
    }

})



const x = (y)=>{
    console.log('x', y);
    
}