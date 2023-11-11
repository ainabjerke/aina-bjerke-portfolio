let slideIndexP1 = 1;
showSlidesP1(slideIndexP1);

function plusSlidesP1(n) {
  showSlidesP1((slideIndexP1 += n));
}

function currentSlideP1(n) {
  showSlidesP1((slideIndexP1 = n));
}

function showSlidesP1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesP1");
  let dotsP1 = document.getElementsByClassName("dotP1");
  if (n > slides.length) {
    slideIndexP1 = 1;
  }
  if (n < 1) {
    slideIndexP1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotsP1.length; i++) {
    dotsP1[i].className = dotsP1[i].className.replace(" activeAccordion", "");
  }
  slides[slideIndexP1 - 1].style.display = "block";
  dotsP1[slideIndexP1 - 1].className += " activeAccordion";
}
