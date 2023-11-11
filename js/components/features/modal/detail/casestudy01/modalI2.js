// Get the modal
var modalI2 = document.getElementById("modalI2");

// Get the button that opens the modal button modal empathise 1
var btnI2 = document.getElementById("btnModalI2");

// Get the <span> element that closes the modal
var spanI2 = document.getElementsByClassName("closeI2")[0];

// When the user clicks the button, open the modal
btnI2.onclick = function () {
  modalI2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanI2.onclick = function () {
  modalI2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalI2) {
    modalI2.style.display = "none";
  }
};
