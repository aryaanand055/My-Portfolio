const header = document.getElementsByClassName("header")[0];
const container = document.getElementsByClassName("container")[0];
let topEl = document.querySelector(".backToTop");

header.addEventListener("mouseover", () => {
    container.style.opacity = 0.4;
    // container.style.backgroundColor = "rgba(255,255,255, 0.1)";
})
header.addEventListener("mouseout", () => {
    // container.style.backgroundColor = "var(--main-bg-color)";
    container.style.opacity = 1;
})

// Set Inteval for the testimonials shift
setInterval(() => {
    plusSlides(1)
}, 5000)

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}





document.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 500) {
        topEl.classList.remove("d-n")
    } else {
        topEl.classList.add("d-n")
    }
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-arrow-up")) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

})