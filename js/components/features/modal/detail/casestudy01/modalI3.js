// Get the modal
var modalI3 = document.getElementById("modalI3");

// Get the button that opens the modal button modal empathise 1
var btnI3 = document.getElementById("btnModalI3");

// Get the <span> element that closes the modal
var spanI3 = document.getElementsByClassName("closeI3")[0];

// When the user clicks the button, open the modal
btnI3.onclick = function () {
  modalI3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanI3.onclick = function () {
  modalI3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalI3) {
    modalI3.style.display = "none";
  }
};
