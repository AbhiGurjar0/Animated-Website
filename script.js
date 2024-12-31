function nav(){
  var slide = document.querySelector('.drop');
var slider = document.querySelector('.dropdown');
slide.addEventListener("mouseenter",function(){
  slider.style.display = "block";
  gsap.from(".dropdown .b-1 h4",{
    y:20,
    opacity:0,
    stagger:.1
  })
  gsap.from(".dropdown .b-2 h4",{
    y:20,
    opacity:0,
    stagger:.1
  })
  gsap.from(".dropdown .b-3 h4",{
    y:20,
    opacity:0,
    stagger:.1
  })
})
slide.addEventListener("mouseleave",function(){
  slider.style.display = "none";
})


}
function firstpage(){
  gsap.from(".text h1",{
    y:20,
    delay:.3,
    stagger:.4,
    opacity:0,
    duration:1
  })
}
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
function thirdpage(){
  var third = document.querySelectorAll('.upper ._box');

third.forEach(elem => {
  elem.addEventListener("mouseenter",function(){
  elem.childNodes[5].childNodes[1].play();
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[5].childNodes[1].load();
  })
  
});
}
function fourthpage(){
  var right = document.querySelectorAll('.relem');
right.forEach(elem =>{
  elem.addEventListener("mouseenter",function(){
   gsap.to(elem.childNodes[7],{
     scale:1,
     opacity:1
    })
    elem.childNodes[5].style.opacity = "1",
    elem.childNodes[5].childNodes[1].play()

  })
   elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[7],{
     scale:0,
     opacity:0
    })
    elem.childNodes[5].style.opacity = "0",
    elem.childNodes[5].childNodes[1].load()

  })
    elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[7],{
        x: dets.x -elem.childNodes[7].getBoundingClientRect().x - 90,
    y: dets.y - elem.childNodes[7].getBoundingClientRect().y - 120,
       
      })

  })

})
}
function locomotive(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
}

nav();
firstpage();
secondpage();
thirdpage();
fourthpage();
locomotive();


