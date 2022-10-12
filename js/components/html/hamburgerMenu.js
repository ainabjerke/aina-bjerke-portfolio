const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
const hamburgerMenu = document.querySelector(".nav__menu");
const hamburgerMenuLink = document.querySelectorAll(".nav__link");
console.log("hamburgerMenulink", hamburgerMenuLink);

//FUNCTION THAT OPEN THE HAMBURGER MENU
hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenu);
hamburgerMenuLink.forEach((element) => {
  element.addEventListener("click", toggleHamburgerMenu);
});

//FUNCTION THAT MAKES THE LINKS INSIDE THE HAMBURGER MENU CLICKABLE
export default function toggleHamburgerMenu() {
  hamburgerMenuIcon.classList.toggle("open");
  hamburgerMenu.classList.toggle("open-menu");
  console.log("toggleHamburgerMenu");
}
