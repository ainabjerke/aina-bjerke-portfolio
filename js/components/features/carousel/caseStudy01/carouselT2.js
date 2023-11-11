let slideIndexC2 = 1;
showSlidesC2(slideIndexC2);

function plusSlidesC2(n) {
  showSlidesC2((slideIndexC2 += n));
}

function currentSlideC2(n) {
  showSlidesC2((slideIndexC2 = n));
}

function showSlidesC2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesC2");
  let dotsC2 = document.getElementsByClassName("dotC2");
  if (n > slides.length) {
    slideIndexC2 = 1;
  }
  if (n < 1) {
    slideIndexC2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotsC2.length; i++) {
    dotsC2[i].className = dotsC2[i].className.replace(" activeAccordion", "");
  }
  slides[slideIndexC2 - 1].style.display = "block";
  dotsC2[slideIndexC2 - 1].className += " activeAccordion";
}
