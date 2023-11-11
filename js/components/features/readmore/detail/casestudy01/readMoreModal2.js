function btnReadMoreModalE2() {
  var dots = document.getElementById("dotsModalE2");
  var moreText = document.getElementById("moreModalE2");
  var btnText = document.getElementById("btnMoreModalE2");

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
