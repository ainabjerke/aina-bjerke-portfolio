function btnReadMoreA2() {
  var dots = document.getElementById("dotsA2");
  var moreText = document.getElementById("moreA2");
  var btnText = document.getElementById("myBtnA2");

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
