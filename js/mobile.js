const menuBtn = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");
const overlayContent = document.querySelector(".overlay_content");
const ham = document.querySelector(".ham");


overlayContent.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
    ham.classList.toggle('active')
})

menuBtn.addEventListener("click", () => {
    if(overlay.classList.contains("overlay-active")){
        overlay.classList.remove("overlay-active");
    }else {
        overlay.classList.add("overlay-active");
    }

});

