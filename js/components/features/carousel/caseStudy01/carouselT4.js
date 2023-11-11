let slideIndexC4 = 1;
showSlidesC4(slideIndexC4);

function plusSlidesC4(n) {
  showSlidesC4((slideIndexC4 += n));
}

function currentSlideC4(n) {
  showSlidesC4((slideIndexC4 = n));
}

function showSlidesC4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesC4");
  let dotsC4 = document.getElementsByClassName("dotC4");
  if (n > slides.length) {
    slideIndexC4 = 1;
  }
  if (n < 1) {
    slideIndexC4 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotsC4.length; i++) {
    dotsC4[i].className = dotsC4[i].className.replace(" activeAccordion", "");
  }
  slides[slideIndexC4 - 1].style.display = "block";
  dotsC4[slideIndexC4 - 1].className += " activeAccordion";
}
