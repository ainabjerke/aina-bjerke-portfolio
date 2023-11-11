function btnReadMoreIndexCS2() {
  var dots = document.getElementById("dotsIndexCS2");
  var moreText = document.getElementById("moreIndexCS2");
  var btnText = document.getElementById("myBtnIndexCS2");

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
