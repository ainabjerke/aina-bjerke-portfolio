// Get the modal
var modalT3 = document.getElementById("modalT3");

// Get the button that opens the modal button modal empathise 1
var btnT3 = document.getElementById("btnModalT3");

// Get the <span> element that closes the modal
var spanT3 = document.getElementsByClassName("closeT3")[0];

// When the user clicks the button, open the modal
btnT3.onclick = function () {
  modalT3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanT3.onclick = function () {
  modalT3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalT3) {
    modalT3.style.display = "none";
  }
};
