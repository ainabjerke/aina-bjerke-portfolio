// Get the modal
var modalI1 = document.getElementById("modalI1");

// Get the button that opens the modal button modal empathise 1
var btnI1 = document.getElementById("btnModalI1");

// Get the <span> element that closes the modal
var spanI1 = document.getElementsByClassName("closeI1")[0];

// When the user clicks the button, open the modal
btnI1.onclick = function () {
  modalI1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanI1.onclick = function () {
  modalI1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalI1) {
    modalI1.style.display = "none";
  }
};
