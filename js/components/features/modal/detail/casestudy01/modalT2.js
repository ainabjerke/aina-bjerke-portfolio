// Get the modal
var modalT2 = document.getElementById("modalT2");

// Get the button that opens the modal button modal empathise 1
var btnT2 = document.getElementById("btnModalT2");

// Get the <span> element that closes the modal
var spanT2 = document.getElementsByClassName("closeT2")[0];

// When the user clicks the button, open the modal
btnT2.onclick = function () {
  modalT2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanT2.onclick = function () {
  modalT2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalT2) {
    modalT2.style.display = "none";
  }
};
