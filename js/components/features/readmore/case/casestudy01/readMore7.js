function btnReadMoreI7() {
  var dots = document.getElementById("dotsI7");
  var moreText = document.getElementById("moreI7");
  var btnText = document.getElementById("myBtnI7");

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
