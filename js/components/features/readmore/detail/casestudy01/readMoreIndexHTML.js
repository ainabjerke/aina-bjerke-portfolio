function btnReadMoreIndexCS1() {
  var dots = document.getElementById("dotsIndexCS1");
  var moreText = document.getElementById("moreIndexCS1");
  var btnText = document.getElementById("myBtnIndexCS1");

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
