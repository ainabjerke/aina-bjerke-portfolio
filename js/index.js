import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import { launchAllProjects } from "./components/html/launchAllProjects.js";
import { projectURL } from "./components/constance/url.js";
// import { fetchAPI } from "./readMore2";

// import { launchProjectDetails } from "./components/html/launchProjectDetails.js";
// import { detailsURL } from "./components/html/launchProjectDetails.js";

//LIST OF ALL PROJECTS ADDED TO STRAPI:
//FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:
fetchAPI(launchAllProjects, projectURL);

//PRODUCT DETAILS:
//*** FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:***//
// fetchAPI(launchProjectDetails, detailsURL);
// console.log(launchProjectDetails);
