function btnReadMoreI5() {
  var dots = document.getElementById("dotsI5");
  var moreText = document.getElementById("moreI5");
  var btnText = document.getElementById("myBtnI5");

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
