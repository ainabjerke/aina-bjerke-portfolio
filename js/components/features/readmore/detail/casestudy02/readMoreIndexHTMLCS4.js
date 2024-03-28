function btnReadMoreIndexCS4() {
    var dots = document.getElementById("dotsIndexCS4");
    var moreText = document.getElementById("moreIndexCS4");
    var btnText = document.getElementById("myBtnIndexCS4");
  
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
  