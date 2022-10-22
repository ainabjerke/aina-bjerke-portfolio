const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
const hamburgerMenu = document.querySelector(".nav__menu");
const hamburgerMenuLink = document.querySelectorAll(".nav__link");
console.log("hamburgerMenulink", hamburgerMenuLink);

//FUNCTION THAT TOGGLE THE HAMBURGER MENU:
export default function toggleHamburgerMenu() {
  hamburgerMenuIcon.classList.toggle("open");
  hamburgerMenu.classList.toggle("open-menu");
  console.log("toggleHamburgerMenu");
}

//FUNCTION THAT MAKES THE HAMBURGERMENUICON AND LINKS INSIDE THE HAMBURGER MENU CLICKABLE:
hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenu);
hamburgerMenuLink.forEach((element) => {
  element.addEventListener("click", toggleHamburgerMenu);
});
