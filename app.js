gsap.registerPlugin(ScrollTrigger);
let section = gsap.utils.toArray(".panel");

gsap.to(section,{
  xPercent: -100 * (section.length-1),
  ease:"none",
  scrollTrigger:{
    trigger:"#container",
    pin:true,
    scrub:1,
    snap:1/(section.length-1),
    //base vertical scrolling on how wide the container is so it feels more natural
    end:()=>"+=" +
    document.querySelector("#container").offsetWidth
  }
});