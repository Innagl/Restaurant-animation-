gsap.to("#book", {
  y: 60,
  duration: 1,
  rotation: 360,
  delay: 1,
  ease: "sine.out",
});

console.clear();

ScrollTrigger.create({
  trigger: "header",
  start: "top top",
  end: "max",
  pin: true,
  pinSpacing: false,
});

gsap.to(".loop-image", {
  x: "-150vw", 
  duration: 5, 
  ease: "linear",
  repeat: -1, 
});

let target = document.querySelector(".parent");
let original_html = target.innerHTML;

let new_html = "<div class='ticker-items'>" + original_html +  original_html + "</div>";
target.innerHTML = new_html;

let tickerBlockWidth = document.querySelector(".children").offsetWidth;


gsap.set(".ticker-items", {
  translateX: -tickerBlockWidth
})


gsap.to(".ticker-items", {
  translateX: 0,
  duration: 20,
  ease: "linear",
  repeat: -1,
})



console.clear();

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".wrapper .section");

sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".wrapper",
    pin: true,
    pinSpacing: false
  });
});





