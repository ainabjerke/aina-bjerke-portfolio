import displayMessage from "../messages/displayMessage.js";

//FUNCTION THAT WILL DISPLAY ALL PROJECTS IN THE API
export function launchAllProjects(projects) {
  //https://www.w3schools.com/js/js_array_sort.asp
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2
  //https://www.w3schools.com/js/js_dates.asp
  //.sort function sorts values as strings
  //the portfolio projects get sorted by aDate = new Date(a.published_at) as "a" value and
  //that bDate = new Date(b.published_at) as value "b" and return -1 will ensure that the newest project added in the strapi will get
  //displayed first
  const sorted = projects.sort(function (a, b) {
    const aDate = new Date(a.published_at);
    const bDate = new Date(b.published_at);
    if (aDate > bDate) {
      return -1;
    } else return 1;
  });
  const projectsItemContainer = document.querySelector(".projects");

  projectsItemContainer.innerHTML = "";

  if (projects.length === 0) {
    displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Sorry, no projects found",
      ".projects"
    );
  }
  //https://www.w3schools.com/js/js_htmldom.asp
  //https://www.w3schools.com/js/js_htmldom_nodes.asp
  //https://www.w3schools.com/jsref/prop_element_classlist.asp
  //https://bobbyhadz.com/blog/javascript-create-image-element
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
  //https://www.w3schools.com/jsref/prop_style_display.asp
  //https://www.w3schools.com/jsref/prop_node_textcontent.asp
  //https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_split
  //https://bobbyhadz.com/blog/javascript-split-string-by-newline
  //https://www.w3schools.com/jsref/event_stoppropagation.asp
  //https://javascript.info/nullish-coalescing-operator
  //https://www.w3schools.com/jsref/met_element_closest.asp
  //FUNCTION THAT CREATES THE DYNAMIC PROJECT THAT IS SORTED STORED IN HEROKU STRAPI API
  const webpageLink = document.querySelector(".btn-webpage");
  const githubLink = document.querySelector(".btn-github");

  webpageLink.addEventListener("click", (event) => {
    // Prevent the default behavior of the link to avoid opening the URL in the current window.
    event.preventDefault();

    // Get the URL from your project object (assuming project is defined somewhere in your code).
    const projectUrl = webpageLink.getAttribute("href"); // Replace 'project.githubUrl' with your actual URL

    // Open a new window or tab with the project's URL.
    window.open(projectUrl);
  });

  githubLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    const githubUrl = githubLink.getAttribute("href"); // Replace 'project.githubUrl' with your actual URL

    // Open the link in a new window
    window.open(githubUrl);
  });

  sorted.forEach(function (project, index) {
    //CREATES TEXT NODE WITH THE TEXT VIEW MORE:
    const viewMoreText = document.createTextNode("View more");
    //CREATES <button> ELEMENT:
    const button = document.createElement("button");
    //ADDING MULTIPLE CLASSES TO THE BUTTON ELEMENT:
    button.classList.add("btn", "btn--primary", "btn--sm", "btn--tertiary", "project__button");
    //ADD VIEWMORETEXT TO BUTTON ELEMENT BY USING.APPEND:
    button.append(viewMoreText);
    //CREATE TEXT NODE THAT GETS THE DYNAMIC PROJECT TITLE FROM API:
    const titleText = document.createTextNode(project.title);
    //CREATES <h5> ELEMENT:
    const heading = document.createElement("h5");
    //ADDING CLASS TO THE HEADING/<h5> ELEMENT:
    heading.classList.add("project__title");
    //ADD DYNAMIC TEXT NODE THAT GETS THE DYNAMIC PROJECT TITLE FROM API
    //TO THE HEADING/<h5> ELEMENT BY USING.APPEND:
    heading.append(titleText);
    //GETS THE DYNAMIC IMAGE FROM API AND CREATE <img> FOR EACH PROJECTS IN THE API
    //CREATES <img> ELEMENT:
    const image = document.createElement("img");
    //SETS THE VALUE OF AN ATTRIBUTE ON THE IMAGE ELEMENT
    //.setAttribute(name, value): takes 2 parameters:
    //name  - the name of the attribute whose value is to  be set
    //value - the value to assign to the attribute
    image.setAttribute("src", project.image_url); //name="src" and value= dynamic project image/project.image_url retrived from api
    image.setAttribute("alt", project.title); //name="alt" and value= dynamic project title/project.title retrived from api
    //ADDING CLASSES TO THE IMAGE ELEMENT/<img>:
    image.classList.add("project__image");
    //CREATES A ELEMENT AND WRAPPED image, heading, button AND MAKE IT CLICKABLE
    //CREATES <a> ELEMENT:
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#portfolio"); //name="href" and value= id="portfolio" in html line 172
    //ADDING CLASSES TO THE anchor/<a> element:
    anchor.classList.add("project__content", "viewMoreBtn");
    //ADDING IMAGE, HEADING, BUTTON ELEMENT TO ANCHOR/<a> BY USING.APPEND:
    anchor.append(image);
    anchor.append(heading);
    anchor.append(button);
    //ADDING AND ONCLICK EVENT TO THE ANCHOR/<a> THAT ALSO TARGETS THE IMAGE, HEADING, BUTTON ELEMENT
    anchor.onclick = function (event) {
      event.preventDefault();

      webpageLink.setAttribute("href", project.webpageUrl); //name="href" and value= dynamic project webpage url/project.webpageUrl retrived from api
      githubLink.setAttribute("href", project.githubUrl); //name="href" and value= dynamic project webpage url/project.webpageUrl retrived from api

      //GETS THE id="myModalOne" LINE 196 IN HTML
      const modal = document.querySelector("#myModalOne");
      //DISPLAY THE MODAL WHEN USER CLICKS ON THE IMAGE HEADING OR BUTTON
      modal.style.display = "block";

      //GETS THE class="modal-l__img" IN HTML LINE 208
      const modalImage = document.querySelector(".modal-l__img");
      modalImage.setAttribute("src", project.image_url); //name="src" and value= dynamic project image/project.image_url retrived from api
      modalImage.setAttribute("alt", project.title); //name="alt" and value= dynamic project title/project.title retrived from api

      //GETS THE class="modal-l__heading" IN HTML LINE 212
      const heading = document.querySelector(".modal-l__heading");
      //textContent property sets or returns the text content of the specified node, and all its descendants
      heading.textContent = project.title; //heading = set the text content of a node to get the dynamic project title/project.title retrived from api

      // const githubLink = document.querySelector(".btn-github");

      // githubLink.addEventListener("click", (event) => {
      //   // Prevent the default behavior of the link to avoid opening the URL in the current window.
      //   event.preventDefault();
      //   // Open a new window or tab with the project's URL.
      //   const projectURL = project.webpageUrl;
      //   window.open(projectURL, "_blank");
      // });

      //GETS THE modal-r__header IN HTML LINE 229:
      const header = document.querySelector(".modal-r__header");
      header.textContent = project.title; //header = set the text content of a node to get the dynamic project title/project.title retrived from api

      //GETS THE id="modal-r-languages" IN HTML LINE 238:
      const languages = document.querySelector("#modal-r-languages");
      languages.innerHTML = ""; //removes/clearing the html content in id="modal-r-languages"
      //The split() Method splits a string into an array of substrings
      const projectLanguages = project.languages.split(" "); //the dynamic string project.languages api data gets splitted and stored in projectLanguages
      //LOOPS THROUGH projectLanguages THAT ALREADY STORES THE DYNAMIC STRING PROJECT.LANGUAGES API DATA THAT HAS BEEN SPLITTED
      projectLanguages.forEach((language) => {
        //CREATES <span> ELEMENT:
        const span = document.createElement("span");
        //ADDING MULTIPLE CLASSES TO THE SPAN ELEMENT:
        span.classList.add("modal-r__language", "modal-code-style");
        //textContent property sets or returns the text content of the specified node, and all its descendants
        //in this case the language parameter has access to the splited project.languages stored in the projectLanguages container
        span.textContent = language;
        //ADD LANGUAGES TO SPAN ELEMENT BY USING.APPEND:
        languages.append(span);
      });

      //GETS THE class="modal-r__subheading" IN HTML LINE 247:
      const subheading = document.querySelector(".modal-r__subheading");
      //textContent property sets or returns the text content of the specified node, and all its descendants
      subheading.textContent = project.subTitleOne; //subheading = set the text content of a node to get the dynamic project subTitleOne retrived from api

      //GETS THE class="modal-project-sub-header__grade" IN HTML LINE 250:
      const gradeContainer = document.querySelector(
        ".modal-project-sub-header__grade"
      );
      //if project.grade has no value then do not show the grade
      //else show the given grade
      if (!project.grade) {
        gradeContainer.style.display = "none";
      } else {
        gradeContainer.style.display = "block";
        const grade = document.querySelector("#modal-grade-value");
        grade.textContent = project.grade; //grade = will get the the dynamic project.grade retrived from api
      }

      //GETS THE id="modal-description"IN HTML LINE 256:
      const description = document.querySelector("#modal-description");
      description.innerHTML = "";
      //The split("\n\n") Method splits a string into an array of substrings and converts \n\n character to new line
      const descriptionParagraphs = project.description.split("\n\n");
      //LOOPS THROUGH descriptionParagraphs THAT ALREADY STORES THE DYNAMIC STRING PROJECT.DESCRIPTION API DATA THAT HAS BEEN SPLITTED
      descriptionParagraphs.forEach((paragraph) => {
        //CREATES <p> ELEMENT:
        const p = document.createElement("p");
        //ADDING CLASS TO THE P ELEMENT:
        p.classList.add("modal-r__paragraph");
        //textContent property sets or returns the text content of the specified node, and all its descendants
        //in this case the paragraph parameter has access to the splited project.description stored in the descriptionParagraphs container
        p.textContent = paragraph;
        //ADD DESCRIPTION TO P ELEMENT BY USING.APPEND:
        description.append(p);
      });

      //GETS THE id="modal-description"IN HTML LINE 269:
      const list = document.querySelector(".modal-r__list--main");
      list.innerHTML = "";
      //The split("\n") Method splits a string into an array of substrings and converts \n character to new line
      const listParagraphs = project.descriptionBulletpoints.split("\n");
      //LOOPS THROUGH listParagraphs THAT ALREADY STORES THE DYNAMIC STRING PROJECT.descriptionBulletpoints API DATA THAT HAS BEEN SPLITTED
      listParagraphs.forEach((paragraph) => {
        //CREATES <li> ELEMENT:
        const item = document.createElement("li");
        //textContent property sets or returns the text content of the specified node, and all its descendants
        //in this case the paragraph parameter has access to the splited project.descriptionBulletpoints stored in the listParagraphs container
        item.textContent = paragraph;
        //ADD list TO item/li ELEMENT BY USING.APPEND:
        list.append(item);
      });

      //GETS THE id="modal-description"IN HTML LINE 309:
      const subheading2 = document.querySelector("#modal-subheading2");
      //textContent property sets or returns the text content of the specified node, and all its descendants
      subheading2.textContent = project.subheadingTwo; //subheading2 = set the text content of a node to get the dynamic project .subheadingTwo retrived from api

      //GETS THE class="modal-r__list--second IN HTML LINE 316:
      const listSecond = document.querySelector(".modal-r__list--second");
      listSecond.innerHTML = "";
      //GETS THE id="updates-line" IN HTML LINE 306:
      const updatesLine = document.querySelector("#updates-line");
      //if project.updatesBulletpoints has no value then do not show the updatedline
      //else show the project.updatesBulletpoints
      if (!project.updatesBulletpoints) {
        updatesLine.style.display = "none";
      } else {
        updatesLine.style.display = "block";
        //The split("\n") Method splits a string into an array of substrings and converts \n character to new line
        const listSecondParagraphs =
          project.updatesBulletpoints.split("\n") ?? []; //?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
        //LOOPS THROUGH listSecondParagraphs THAT ALREADY STORES THE DYNAMIC STRING project.updatesBulletpoints API DATA THAT HAS BEEN SPLITTED
        listSecondParagraphs.forEach((paragraph) => {
          //CREATES <li> ELEMENT:
          const item = document.createElement("li");
          //textContent property sets or returns the text content of the specified node, and all its descendants
          //in this case the paragraph parameter has access to the splited  project.updatesBulletpoints stored in the listSecondParagraphs container
          item.textContent = paragraph;
          //ADD listSecond TO item/li ELEMENT BY USING.APPEND
          listSecond.append(item);
        });
      }
      //The stopPropagation() method prevents propagation of the same event from being called.
      //Propagation means bubbling up to parent elements or capturing down to child elements.
      event.stopPropagation();
    };

    //CREATES <div> ELEMENT:
    const division = document.createElement("div");
    //ADDING CLASS TO THE division/<div> ELEMENT:
    division.classList.add("project", "col-sm-12", "col-md-6", "col-lg-4");
    //ADDING division/<div> TO ANCHOR/<a> BY USING.APPEND:
    division.append(anchor);

    //ADDING projectItemContainer/.projects TO divistion /<div> BY USING.APPEND:
    projectsItemContainer.append(division);
  });

  const viewMoreBtn = document.querySelector(".project a");
  //GETS THE id="myModalOne" LINE 196 IN HTML
  const modal = document.querySelector("#myModalOne");
  //GETS THE class="closeOne" LINE 198 IN HTML
  const close = document.querySelector(".closeOne");
  //ADDING AN ONCLICK EVENT TO THE variable close/".closeOne"
  close.onclick = function () {
    //modal close when user clicks on the close/".closeOne"
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    //modal does not close if the user clicks on the modal
    //The closest() method searches up the DOM tree for elements which matches a specified CSS selector.
    //The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.
    //The closest() method returns null() if no match is found.
    const modalL = event.target.closest(".modal-l__content"); // Is the event target a child of .modal-l
    const modalR = event.target.closest(".modal-r__content");
    console.log({ modalL, modalR });
    //if not modalL and !modalR then close the modal
    if (!modalL && !modalR) {
      modal.style.display = "none";
    }
  };
}

document.querySelectorAll(".modal-content").forEach((modal) => {
  modal.addEventListener("click", (event) => event.stopPropagation());
});

document.querySelectorAll(".project__button").forEach((button) => {
  button.addEventListener("click", (event) => event.stopPropagation());
});

window.onclick = function (event) {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
};
