export default function btnReadMoreIndex() {
  var dots = document.getElementById("dotsIndex");
  var moreText = document.getElementById("moreIndex");
  var btnText = document.getElementById("myBtnIndex");

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
