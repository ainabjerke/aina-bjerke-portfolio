function btnReadMoreI2() {
  var dots = document.getElementById("dotsI2");
  var moreText = document.getElementById("moreI2");
  var btnText = document.getElementById("myBtnI2");

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
