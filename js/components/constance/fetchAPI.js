import displayMessage from "../messages/displayMessage.js";

export async function fetchAPI(acutalFunction, url) {
  try {
    const response = await fetch(url);
    const JSON = await response.json();
    const getResults = JSON;
    console.log(getResults);
    acutalFunction(getResults);
    // console.log(acutalFunction);
  } catch (error) {
    // console.log(error);
    displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Sorry, an error has occurred while launching all portfolio projects",
      ".projects"
    );
  }
}
