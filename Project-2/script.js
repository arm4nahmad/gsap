
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    delay: .4,
    duration: .7
})

// tl.from("#nav h2", {
//     y: -100,        // Starts from 100px above the normal position
//     opacity: 0,     // Initially hidden
//     duration: 1,    // Animation duration
//     ease: "power2.out" // Easing function for smooth animation
// })

tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: .28,
    opacity: 0
})
tl.from("#full i", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", function () {
    // console.log("hello")
    tl.play()

})
cross.addEventListener("click", function () {
    tl.reverse();
})

