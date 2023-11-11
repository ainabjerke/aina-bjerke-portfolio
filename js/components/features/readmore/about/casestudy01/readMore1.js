function btnReadMoreA1() {
  var dots = document.getElementById("dotsA1");
  var moreText = document.getElementById("moreA1");
  var btnText = document.getElementById("myBtnA1");

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
