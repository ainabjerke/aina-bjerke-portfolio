// Get the modal
var modalD2 = document.getElementById("modalD2");

// Get the button that opens the modal button modal empathise 1
var btnD2 = document.getElementById("btnModalD2");

// Get the <span> element that closes the modal
var spanD2 = document.getElementsByClassName("closeD2")[0];

// When the user clicks the button, open the modal
btnD2.onclick = function () {
  modalD2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanD2.onclick = function () {
  modalD2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalD2) {
    modalD2.style.display = "none";
  }
};
