// Show slides

var slideIndex = 1;

function carousel(n) {
    var slidesArr = document.getElementsByClassName("mySlides");
    var dotsArr = document.getElementsByClassName("dot");
    
    if (n > slidesArr.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesArr.length;
    }
    
    for (var i = 0; i < slidesArr.length; i++) {
        slidesArr[i].style.display = "none";
    }
    for (var i = 0; i < dotsArr.length; i++) {
        dotsArr[i].className = dotsArr[i].className.replace(" currentDot", "");
    }
    
    slidesArr[slideIndex-1].style.display = "block";
    dotsArr[slideIndex-1].className += " currentDot";
}
// for prev/next
function plusSlide(n) {
    carousel(slideIndex += n);
}
// for dots
function currentSlide(n) {
    carousel(slideIndex = n);
}

carousel(slideIndex);

// Automatic Slideshow

var slideIndexAuto = 0;

function autoCarousel() {
    var slidesArrAuto = document.getElementsByClassName("mySlides");
    var dotsArrAuto = document.getElementsByClassName("dot");
    
    for (var i = 0; i < slidesArrAuto.length; i++) {
        slidesArrAuto[i].style.display = "none";
    }
    for (var i = 0; i < dotsArrAuto.length; i++) {
        dotsArrAuto[i].className = dotsArrAuto[i].className.replace(" currentDot", "");
    }
    slideIndexAuto++;
    
    if (slideIndexAuto > slidesArrAuto.length) {
        slideIndexAuto = 1;
    }
    
    slidesArrAuto[slideIndexAuto-1].style.display = "block";
    dotsArrAuto[slideIndexAuto-1].className += " currentDot";
    
    setTimeout(autoCarousel, 2000);
}

//autoCarousel();

// Open navbar on small screen

function opennav() {
    var x = document.getElementById("topnav");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    window.scrollTo(0, 0);
}

// Close navbar on small screen

function closenav() {
    var x = document.getElementById("topnav");
    var mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
        x.className = "navbar";
    }
}

// Make link active

var selector = ".navbar li:not(:first-child)";
var elems = document.querySelectorAll(selector);

function makeActive() {
    for (var i = 0; i < elems.length - 1; i++) {
        elems[i].classList.remove("active");
    }
    this.classList.add("active");
}
// -1 to not make active menu icon
for (var j = 0; j < elems.length - 1; j++) {
    elems[j].addEventListener("click", makeActive);
}