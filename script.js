function secondpage(){
    var second = document.querySelector("#second");
    var vid = second.childNodes[1];
    var video = document.querySelector('#second video')
    // console.log(vid); 
vid.addEventListener("mouseenter", function () {
  gsap.to(second.childNodes[3], {
    scale: 1,
    opacity: 1,
  });
});
vid.addEventListener("mouseleave", function () {
  gsap.to(second.childNodes[3], {
    scale: 0,
    opacity: 0,
  });
});
vid.addEventListener("mousemove", function (dets) {
  gsap.to(second.childNodes[3], {
    x: dets.x - second.childNodes[3].getBoundingClientRect().x - 50,
    y: dets.y - second.childNodes[3].getBoundingClientRect().y - 150,
  });
});
vid.addEventListener("click",function(){
    gsap.to(vid.childNodes[1],{
        transform : "scaleX(1.5) scaleY(1.5)"
    })
})
vid.addEventListener("dblclick",function(elem){
    gsap.to(vid.childNodes[1],{
        transform : "scaleX(1) scaleY(1)"   
    })
})

}
secondpage();
