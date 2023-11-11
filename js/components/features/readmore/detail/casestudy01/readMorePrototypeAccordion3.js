function btnReadMoreAccordionP3() {
  var dots = document.getElementById("dotsMoreAccordionTextP3");
  var moreText = document.getElementById("moreAccordionTextP3");
  var btnText = document.getElementById("btnMoreAccordionTextP3");

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
