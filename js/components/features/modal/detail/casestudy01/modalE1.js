// Get the modal
var modalE1 = document.getElementById("modalE1");

// Get the button that opens the modal button modal empathise 1
var btn = document.getElementById("btnModalE1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modalE1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalE1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalE1) {
    modalE1.style.display = "none";
  }
};
