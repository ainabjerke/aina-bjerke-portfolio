function btnReadMoreAccordionP2() {
  var dots = document.getElementById("dotsMoreAccordionTextP2");
  var moreText = document.getElementById("moreAccordionTextP2");
  var btnText = document.getElementById("btnMoreAccordionTextP2");

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
