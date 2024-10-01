let ScrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

ScrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    ScrollContainer.scrollLeft += evt.deltaY;
    ScrollContainer.style.scrollBehavior ="auto";

});

nextbtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior ="smooth";
    ScrollContainer.scrollLeft +=900;
})
backbtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior ="smooth";
    ScrollContainer.scrollLeft -=900;
})
