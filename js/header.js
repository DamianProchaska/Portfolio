let lastScrollTop = 0;

nabvar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
console.log("działa");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
})
