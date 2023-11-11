// Get the modal
var modalE2 = document.getElementById("modalE2");

// Get the button that opens the modal button modal empathise 1
var btnE2 = document.getElementById("btnModalE2");

// Get the <span> element that closes the modal
var spanE2 = document.getElementsByClassName("closeE2")[0];

// When the user clicks the button, open the modal
btnE2.onclick = function () {
  modalE2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanE2.onclick = function () {
  modalE2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalE2) {
    modalE2.style.display = "none";
  }
};
