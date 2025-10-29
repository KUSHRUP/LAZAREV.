
function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});
 

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveanimation()
gsap.registerPlugin(ScrollTrigger);

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    var tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
    });
    tl.to(".navpart2 h5", {
      display: "block",
    });
    tl.to(".navpart2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.6,
      },
    });
    });

  nav.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to(".navpart2 h5 span", {
      transform: `translateY(25px)`,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".navpart2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}
navAnimation()

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
           gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 120
            })
        })
    })
}
page2Animation()

function page3videoAnimation(){
  var page3center = document.querySelector(".page3center")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  })
})

video.addEventListener("click",function(){
  video.pause()
  gsap.to(video,{
    transform:"scaleX(0.7) scaleY(0)",
    opacity:0,
    borderRadius:30
  })
})
}
page3videoAnimation()

function page4videoanimation(){
 var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}
page4videoanimation()

function page6videoAnimation1(){
  var lowerdiv = document.querySelector(".assets")
var vid = document.querySelector(".assets video")


lowerdiv.addEventListener("mouseenter",function(){
  vid.play()
  gsap.to(vid,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    delay:0.1

  })
  })
  lowerdiv.addEventListener("mouseleave",function(){
  vid.load()
  gsap.to(vid,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page6videoAnimation1()

function page6videoAnimation2(){
  var lowerdivright = document.querySelector(".assets2")
var vid2 = document.querySelector(".assets2 video")


lowerdivright.addEventListener("mouseenter",function(){
  vid2.play()
  gsap.to(vid2,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    delay:0.1

  })
  })
  lowerdivright.addEventListener("mouseleave",function(){
  vid2.load()
  gsap.to(vid2,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page6videoAnimation2()

function page7videoAnimation1(){
  var middiv = document.querySelector(".assets3")
var vid3 = document.querySelector(".assets3 video")


middiv.addEventListener("mouseenter",function(){
  vid3.play()
  gsap.to(vid3,{
    transform:"scaleX(1) scaleY(0.8)",
    opacity:1,
    delay:0.1

  })
  })
  middiv.addEventListener("mouseleave",function(){
  vid3.load()
  gsap.to(vid3,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page7videoAnimation1()

function page7videoAnimation2(){
  var divright = document.querySelector(".assets4")
var vid4 = document.querySelector(".assets4 video")


divright.addEventListener("mouseenter",function(){
  vid4.play()
  gsap.to(vid4,{
    transform:"scaleX(1) scaleY(0.8)",
    opacity:1,
    delay:0.1

  })
  })
  divright.addEventListener("mouseleave",function(){
  vid4.load()
  gsap.to(vid4,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page7videoAnimation2()

function page8videoAnimation1(){
  var page8 = document.querySelector(".assets5")
var vid5 = document.querySelector(".assets5 video")


page8.addEventListener("mouseenter",function(){
  vid5.play()
  gsap.to(vid5,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    delay:0.1

  })
  })
  page8.addEventListener("mouseleave",function(){
  vid5.load()
  gsap.to(vid5,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page8videoAnimation1()

function page8videoAnimation2(){
  var page8right = document.querySelector(".assets6")
var vid6 = document.querySelector(".assets6 video")


page8right.addEventListener("mouseenter",function(){
  vid6.play()
  gsap.to(vid6,{
    transform:"scaleX(0.9) scaleY(0.8)",
    opacity:1,
    delay:0.1

  })
  })
  page8right.addEventListener("mouseleave",function(){
  vid6.load()
  gsap.to(vid6,{
    transform:"scaleX(0.7) scaleY(0)",
    transform:"translateY(10%)",
    opacity:0,

  })
  })
}
page8videoAnimation2()

function page9and6animation(){
  gsap.from("#btm9-part2 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
    trigger:"#btm9-part2",
    scroller:".main",
    //markers:true,
    start: "50% 90%",
    end:"50% 50%",
    scrub:true

  }
})

gsap.to(".lowerleft h5",{
  scrollTrigger:{
    trigger:".lowerleft",
   // markers:true,
       scroller:".main",

    start:"50% 60%",
    end:"230% ",
    pin:true,
    scrub:true
  }
})
}
page9and6animation()


