function btnReadMoreIndexCS3() {
  var dots = document.getElementById("dotsIndexCS3");
  var moreText = document.getElementById("moreIndexCS3");
  var btnText = document.getElementById("myBtnIndexCS3");

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
