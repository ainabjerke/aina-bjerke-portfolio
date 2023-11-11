let slideIndexC5 = 1;
showSlidesC5(slideIndexC5);

function plusSlidesC5(n) {
  showSlidesC5((slideIndexC5 += n));
}

function currentSlideC5(n) {
  showSlidesC5((slideIndexC5 = n));
}

function showSlidesC5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesC5");
  let dotsC5 = document.getElementsByClassName("dotC5");
  if (n > slides.length) {
    slideIndexC5 = 1;
  }
  if (n < 1) {
    slideIndexC5 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotsC5.length; i++) {
    dotsC5[i].className = dotsC5[i].className.replace(" activeAccordion", "");
  }
  slides[slideIndexC5 - 1].style.display = "block";
  dotsC5[slideIndexC5 - 1].className += " activeAccordion";
}
