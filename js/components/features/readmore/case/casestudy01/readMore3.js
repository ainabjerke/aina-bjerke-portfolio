function btnReadMoreI3() {
  var dots = document.getElementById("dotsI3");
  var moreText = document.getElementById("moreI3");
  var btnText = document.getElementById("myBtnI3");

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
