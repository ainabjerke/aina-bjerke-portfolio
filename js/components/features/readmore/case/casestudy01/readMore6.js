function btnReadMoreI6() {
  var dots = document.getElementById("dotsI6");
  var moreText = document.getElementById("moreI6");
  var btnText = document.getElementById("myBtnI6");

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
