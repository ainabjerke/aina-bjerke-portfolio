function btnReadMoreModalI2() {
  var dots = document.getElementById("dotsModalI2");
  var moreText = document.getElementById("moreModalI2");
  var btnText = document.getElementById("btnMoreModalI2");

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
