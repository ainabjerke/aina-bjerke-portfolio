function btnReadMoreModalT3() {
  var dots = document.getElementById("dotsModalT3");
  var moreText = document.getElementById("moreModalT3");
  var btnText = document.getElementById("btnMoreModalT3");

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
