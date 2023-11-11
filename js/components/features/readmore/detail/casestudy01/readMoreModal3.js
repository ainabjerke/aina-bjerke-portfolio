function btnReadMoreModalE3() {
  var dots = document.getElementById("dotsModalE3");
  var moreText = document.getElementById("moreModalE3");
  var btnText = document.getElementById("btnMoreModalE3");

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
