// Get the modal
var modalE3 = document.getElementById("modalE3");

// Get the button that opens the modal button modal empathise 1
var btnE3 = document.getElementById("btnModalE3");

// Get the <span> element that closes the modal
var spanE3 = document.getElementsByClassName("closeE3")[0];

// When the user clicks the button, open the modal
btnE3.onclick = function () {
  modalE3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanE3.onclick = function () {
  modalE3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalE3) {
    modalE3.style.display = "none";
  }
};
