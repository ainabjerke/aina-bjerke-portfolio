function btnReadMoreAccordion2() {
  var dots = document.getElementById("dotsMoreAccordionTextE2");
  var moreText = document.getElementById("moreAccordionTextE2");
  var btnText = document.getElementById("btnMoreAccordionTextE2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
