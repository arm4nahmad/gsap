gsap.to("#box1", {
    x: 300,
    y: 400,
    duration: 1,
    delay: 0.5,
    rotate: 180,
    backgroundColor: "yellow",
    repeat: "-1",
    scale: .5,
    borderRadius: "50%",
    yoyo: true
})
gsap.to("#box2", {
    x: 300,
    y: -100,
    duration: 1,
    delay: 0.5,
    rotate: 360,
    backgroundColor: "whitesmoke",
    repeat: "-1",
    scale: .5,
    borderRadius: "50%",
    yoyo: true

})

gsap.from("#box3", {
    x: 300,
    y: -150,
    duration: 1.5,
    delay: 1,
    rotate: 360,
    backgroundColor: "green",
    repeat: "-1",
    scale: .5,
    borderRadius: "50%",
    yoyo: true

})