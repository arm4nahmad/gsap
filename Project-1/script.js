var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")



main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "elastic.out(5)"
    })
})

// cursor.addEventListener("click", function () {
//     console.log("cursor event occured")
// })