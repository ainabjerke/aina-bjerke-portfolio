// Get the modal
var modalOne = document.getElementById("myModalOne");
var modalTwo = document.getElementById("myModalTwo");
var modalThree = document.getElementById("myModalThree");
var modalFour = document.getElementById("myModalFour");
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var btnOne = document.getElementById("myBtnOne");
var btnTwo = document.getElementById("myBtnTwo");
var btnThree = document.getElementById("myBtnThree");
var btnFour = document.getElementById("myBtnFour");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("closeOne")[0];
var spanTwo = document.getElementsByClassName("closeTwo")[0];
var spanThree = document.getElementsByClassName("closeThree")[0];
var spanFour = document.getElementsByClassName("closeFour")[0];
// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };
btnOne.onclick = function () {
  modalOne.style.display = "block";
};

btnTwo.onclick = function () {
  modalTwo.style.display = "block";
};

btnThree.onclick = function () {
  modalThree.style.display = "block";
};

btnFour.onclick = function () {
  modalFour.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function () {
  modalOne.style.display = "none";
};

spanTwo.onclick = function () {
  modalTwo.style.display = "none";
};

spanThree.onclick = function () {
  modalThree.style.display = "none";
};

spanFour.onclick = function () {
  modalFour.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  } else if (event.target == modalThree) {
    modalThree.style.display = "none";
  } else if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
};

// window.onclick = function (event) {
//   if (event.target == modalFour) {
//     modalFour.style.display = "none";
//   }
// };
