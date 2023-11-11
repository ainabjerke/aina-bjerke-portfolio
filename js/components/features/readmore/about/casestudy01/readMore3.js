function btnReadMoreA3() {
  var dots = document.getElementById("dotsA3");
  var moreText = document.getElementById("moreA3");
  var btnText = document.getElementById("myBtnA3");

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
