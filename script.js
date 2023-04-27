gsap.registerPlugin(ScrollTrigger);


gsap.to(".logo", { // selector text, Array, or object
    top: 20, // any properties (not limited to CSS)
    transform: 'translate(-50%,0)',
    width: 300,
    duration: 1, // seconds
    delay: 0.5,
    ease: "power2.inOut",

  });

gsap.to(".fade-in", { // selector text, Array, or object
    opacity:0,
    display:'none',
    duration: 1, // seconds
    delay: 0.5,
    ease: "power2.inOut",
});

gsap.to(".logo", { // selector text, Array, or object
    autoAlpha: 0,
    duration: 1, // seconds
    delay: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".scroll-trigger", // selector or element
        start: "500% center",  // [trigger] [scroller] positions
        end: "600% top", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: true, // or time (in seconds) to catch up
        // markers: true, // only during development!
    }
});


// gsap.to(".smile", { // selector text, Array, or object
// transform: 'rotateY(180deg)',
// // duration: 2, // seconds
// // repeat: -1,

// });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-trigger", // selector or element
        start: "center center",  // [trigger] [scroller] positions
        end: "500% top", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: true, // or time (in seconds) to catch up
        pin: true, // or selector or element to pin
        // markers: true, // only during development!
        onEnterBack:unfixImage,
        }
 } );
 
tl.from(".sun", {autoAlpha: 0, duration:0})
  .to('.sun', {autoAlpha: 1, duration: 1, transform: 'rotateY(90deg)'})
  .to('.sun',{autoAlpha: 0, duration: 0})
  
  .from(".fun", {autoAlpha: 0, duration:0,transform: 'rotateY(90deg)'})
  .to('.fun', {autoAlpha: 1, duration: 0})
  .to('.fun', {transform: 'rotateY(270deg)',duration: 1})
  .to('.fun',{autoAlpha: 0, duration: 0})
  .from(".smile", {autoAlpha: 0, duration:0, transform: 'rotateY(90deg)'})
  .to('.smile', {autoAlpha: 1, duration: 0})
  .to('.smile', {transform: 'rotateY(270deg)',duration: 1})
  .to('.smile',{autoAlpha: 0, duration: 0})
 
  .from(".world", {autoAlpha: 0, duration:0,transform: 'rotateY(90deg)'})
  .to('.world', {autoAlpha: 1, duration: 0})
  .to('.world', {transform: 'rotateY(270deg)',duration: 1})
  .to('.world',{autoAlpha: 0, duration: 0})
  .from(".love", {autoAlpha: 0, duration:0,transform: 'rotateY(90deg)'})
  .to('.love', {autoAlpha: 1, duration: 0})
  .to('.love', {transform: 'rotateY(270deg)',duration: 1})
  .to('.love',{autoAlpha: 0, duration: 0})
  
  .from(".spin", {autoAlpha: 0, duration:0,transform: 'rotateY(90deg)'})
  .to('.spin', {autoAlpha: 1, duration: 0})
  .to('.spin', {transform: 'rotateY(270deg)',duration: 1})
  .to('.spin',{autoAlpha: 0, duration: 0})
  .from(".pictoral-scroll", {autoAlpha: 0, duration:0,transform: 'rotateY(90deg)'})
  .to('.pictoral-scroll', {autoAlpha: 1, duration: 0})
  .to('.pictoral-scroll', {transform: 'rotateY(360deg)',scale:0.5,duration: 1 })
  .to('.pictoral-scroll', {autoAlpha: 0, duration: 0,onComplete:fixImage})
  
  const pictoral = document.querySelector('.pictoral')

  function fixImage(){
    pictoral.style.display = 'block'
  }

  function unfixImage(){
    pictoral.style.display = 'none'
  }

// const sun = document.querySelector('.sun')
// const smile = document.querySelector('.smile')
// const world = document.querySelector('.world')
// const fun = document.querySelector('.fun')
// const love = document.querySelector('.love')
// const pictoral = document.querySelector('.pictoral-scroll')
// const spin = document.querySelector('.spin')

  
// gsap.to(".spin", { // selector text, Array, or object
//     transform: 'rotateY(180deg)',
//     // duration: 2, // seconds
//     // repeat: -1,
//     scrollTrigger: {
//         trigger: ".scroll-trigger", // selector or element
//         start: "center center",  // [trigger] [scroller] positions
//         end: "100% top", // [trigger] [scroller] positions
//         // or relative amount: "+=500"
//         scrub: true, // or time (in seconds) to catch up
//         pin: true, // or selector or element to pin
//         markers: true, // only during development!
//         }
//     });

