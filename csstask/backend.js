$(document).ready(function () {
    // Enable zoom
    var $zoom = $('.zoom').magnify();
    // Disable zoom
    $zoom.destroy();
});

var slideIndex = 0;


function showSlides() {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}
showSlides();