function btnReadMoreEmpathiseTab2() {
  var dots = document.getElementById("dotsEmpathiseTab2");
  var moreText = document.getElementById("moreEmpathiseTab2");
  var btnText = document.getElementById("moreEmpathiseTab2Btn");

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
