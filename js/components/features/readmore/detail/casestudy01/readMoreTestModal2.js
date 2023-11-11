function btnReadMoreModalT2() {
  var dots = document.getElementById("dotsModalT2");
  var moreText = document.getElementById("moreModalT2");
  var btnText = document.getElementById("btnMoreModalT2");

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
