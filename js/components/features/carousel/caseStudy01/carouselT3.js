let slideIndexC3 = 1;
showSlidesC3(slideIndexC3);

function plusSlidesC3(n) {
  showSlidesC3((slideIndexC3 += n));
}

function currentSlideC3(n) {
  showSlidesC3((slideIndexC3 = n));
}

function showSlidesC3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesC3");
  let dotsC3 = document.getElementsByClassName("dotC3");
  if (n > slides.length) {
    slideIndexC3 = 1;
  }
  if (n < 1) {
    slideIndexC3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotsC3.length; i++) {
    dotsC3[i].className = dotsC3[i].className.replace(" activeAccordion", "");
  }
  slides[slideIndexC3 - 1].style.display = "block";
  dotsC3[slideIndexC3 - 1].className += " activeAccordion";
}
