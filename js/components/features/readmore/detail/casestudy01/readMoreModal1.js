function btnReadMoreModalE1() {
  var dots = document.getElementById("dotsModalE1");
  var moreText = document.getElementById("moreModalE1");
  var btnText = document.getElementById("btnMoreModalE1");

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
