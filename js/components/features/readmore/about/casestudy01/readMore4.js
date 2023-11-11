function btnReadMoreA4() {
  var dots = document.getElementById("dotsA4");
  var moreText = document.getElementById("moreA4");
  var btnText = document.getElementById("myBtnA4");

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
