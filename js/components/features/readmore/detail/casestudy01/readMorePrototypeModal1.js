function btnReadMoreModalP1() {
  var dots = document.getElementById("dotsModalP1");
  var moreText = document.getElementById("moreModalP1");
  var btnText = document.getElementById("btnMoreModalP1");

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
