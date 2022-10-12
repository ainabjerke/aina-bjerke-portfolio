import { projectURL } from "../constance/url.js";
// import displayMessage from "../messages/displayMessage.js";

// LOOKING FOR ID PARAMETER:
const queryString = document.location.search;
console.log("queryString", queryString);
const params = new URLSearchParams(queryString);

//ID VARIABLE:
let id;

//LOOKING FOR "ID" IN THE URL:
if (params.has("id")) {
  id = params.get("id");
} else {
  // console.log("there is an error in 'id' if/else statement");
  // displayMessage(
  //   "feedbackMessage feedbackMessage--error",
  //   "Sorry, no products found. Please check your search and try again",
  //   ".products"
  // );
}

export const detailsURL = `${projectURL}${id}`;
console.log(detailsURL);

export function launchProjectDetails(projectDetail) {}
// console.log(launchAllProducts);
