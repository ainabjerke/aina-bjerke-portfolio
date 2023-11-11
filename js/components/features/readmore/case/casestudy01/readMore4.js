function btnReadMoreI4() {
  var dots = document.getElementById("dotsI4");
  var moreText = document.getElementById("moreI4");
  var btnText = document.getElementById("myBtnI4");

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
