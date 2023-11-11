function btnReadMoreModalT1() {
  var dots = document.getElementById("dotsModalT1");
  var moreText = document.getElementById("moreModalT1");
  var btnText = document.getElementById("btnMoreModalT1");

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
