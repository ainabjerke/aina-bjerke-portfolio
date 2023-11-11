function btnReadMoreModalI3() {
  var dots = document.getElementById("dotsModalI3");
  var moreText = document.getElementById("moreModalI3");
  var btnText = document.getElementById("btnMoreModalI3");

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
