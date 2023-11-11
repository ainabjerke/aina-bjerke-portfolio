function btnReadMoreA5() {
  var dots = document.getElementById("dotsA5");
  var moreText = document.getElementById("moreA5");
  var btnText = document.getElementById("myBtnA5");

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
