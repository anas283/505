gsap.registerPlugin(ScrollTrigger);

let zoom = 34;

gsap.to(".hero_zi", {
  scrollTrigger: {
    trigger: ".hero_zi",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2"
  }
});

gsap.to(".hero__image_zi", {
  scrollTrigger: {
    trigger: ".hero_zi",
    scrub: 1.5,
    start: "top bottom",
    end: "bottom 300%",
    ease: "power2"
  },
  y: "-30%"
});

ScrollTrigger.create({
  trigger: '.hero_zi',
  animation: gsap.fromTo('.svg_zi', {scale: 1 }, {scale: zoom }),
  pin: true,
  scrub: 1.5,
  start: "top top",
  end: "bottom -100%",
  ease: "power2",
})

const showAnim = gsap.from('.floating-text-zi', { 
  yPercent: -100,
  display: 'none',
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  trigger: ".hero_zi",
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});