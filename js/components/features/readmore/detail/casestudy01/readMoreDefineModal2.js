function btnReadMoreModalD2() {
  var dots = document.getElementById("dotsModalD2");
  var moreText = document.getElementById("moreModalD2");
  var btnText = document.getElementById("btnMoreModalD2");

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
