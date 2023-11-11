// Get the modal
var modalP1 = document.getElementById("modalP1");

// Get the button that opens the modal button modal empathise 1
var btnP1 = document.getElementById("btnModalP1");

// Get the <span> element that closes the modal
var spanP1 = document.getElementsByClassName("closeP1")[0];

// When the user clicks the button, open the modal
btnP1.onclick = function () {
  modalP1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanP1.onclick = function () {
  modalP1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalP1) {
    modalP1.style.display = "none";
  }
};
