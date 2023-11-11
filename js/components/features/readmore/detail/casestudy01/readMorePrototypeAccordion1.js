function btnReadMoreAccordionP1() {
  var dots = document.getElementById("dotsMoreAccordionTextP1");
  var moreText = document.getElementById("moreAccordionTextP1");
  var btnText = document.getElementById("btnMoreAccordionTextP1");

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
