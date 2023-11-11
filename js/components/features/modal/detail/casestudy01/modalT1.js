// Get the modal
var modalT1 = document.getElementById("modalT1");

// Get the button that opens the modal button modal empathise 1
var btnT1 = document.getElementById("btnModalT1");

// Get the <span> element that closes the modal
var spanT1 = document.getElementsByClassName("closeT1")[0];

// When the user clicks the button, open the modal
btnT1.onclick = function () {
  modalT1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanT1.onclick = function () {
  modalT1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalT1) {
    modalT1.style.display = "none";
  }
};
