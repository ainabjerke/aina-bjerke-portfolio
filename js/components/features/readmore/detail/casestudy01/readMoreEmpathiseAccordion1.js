function btnReadMoreAccordion1() {
  var dots = document.getElementById("dotsMoreAccordionTextE1");
  var moreText = document.getElementById("moreAccordionTextE1");
  var btnText = document.getElementById("btnMoreAccordionTextE1");

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
