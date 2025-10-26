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