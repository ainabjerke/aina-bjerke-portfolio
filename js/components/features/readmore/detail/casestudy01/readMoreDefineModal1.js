function btnReadMoreModalD1() {
  var dots = document.getElementById("dotsModalD1");
  var moreText = document.getElementById("moreModalD1");
  var btnText = document.getElementById("btnMoreModalD1");

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
