/* Get the slide show. */
var slidePosition = 0;
SlideShow();

/* Initiate the slide show and have the picture change automatically every 3 seconds. */
function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {
        slidePosition = 1
    }
    slides[slidePosition - 1].style.display = "block";
    setTimeout(SlideShow, 3000); /* Change image every 3 seconds */
}
