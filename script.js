const scrollTopButton = document.querySelector("#scroll-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        scrollTopButton.style.opacity = "1";
        scrollTopButton.style.visibility = "visible";
    } else {
        scrollTopButton.style.opacity = "0";
        scrollTopButton.style.visibility = "hidden";
    }
});

scrollTopButton.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})