/* Get the first and second slide show. */
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

/* Function that is triggered by the arrows on left and right of the picture. */
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

/* Function that changes the css to show/hide the picture slides. */
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
