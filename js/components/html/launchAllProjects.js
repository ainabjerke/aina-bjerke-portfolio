import displayMessage from "../messages/displayMessage.js";

//FUNCTION THAT WILL DISPLAY ALL PROJECTS IN THE API
export function launchAllProjects(projects) {
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
  // console.log("products ===", products);

  sorted.forEach(function (project) {
    const viewMoreText = document.createTextNode("View more");
    const button = document.createElement("button");
    button.classList.add("btn", "btn--primary", "btn--sm", "project__button");
    button.append(viewMoreText);
    const titleText = document.createTextNode(project.title);
    const heading = document.createElement("h5");
    heading.classList.add("project__title");
    heading.append(titleText);
    const image = document.createElement("img");
    image.setAttribute("src", project.image_url);
    image.setAttribute("alt", project.title);
    image.classList.add("project__image");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    anchor.classList.add("project__content", "viewMoreBtn");
    anchor.append(image);
    anchor.append(heading);
    anchor.append(button);
    anchor.onclick = function (event) {
      const modal = document.querySelector("#myModalOne");
      modal.style.display = "block";
      console.log("anchor", project);

      const modalImage = document.querySelector(".modal-l__img");
      modalImage.setAttribute("src", project.image_url);
      modalImage.setAttribute("alt", project.title);

      const heading = document.querySelector(".modal-l__heading");
      heading.textContent = project.title;

      const webpage = document.querySelector(".btn-webpage");
      webpage.setAttribute("href", project.webpageUrl);

      const github = document.querySelector(".btn-github");
      github.setAttribute("href", project.githubUrl);

      const header = document.querySelector(".modal-r__header");
      header.textContent = project.title;

      const languages = document.querySelector("#modal-r-languages");
      languages.innerHTML = "";
      const projectLanguages = project.languages.split(" ");
      projectLanguages.forEach((language) => {
        console.log("language", language);
        const span = document.createElement("span");
        span.classList.add("modal-r__language", "modal-code-style");
        span.textContent = language;
        languages.append(span);
      });

      const subheading = document.querySelector(".modal-r__subheading");
      subheading.textContent = project.subTitleOne;
      console.log("project test:", project);
      const gradeContainer = document.querySelector(
        ".modal-project-sub-header__grade"
      );
      if (project.grade == null) {
        gradeContainer.style.display = "none";
      } else {
        gradeContainer.style.display = "block";
        const grade = document.querySelector("#modal-grade-value");
        grade.textContent = project.grade;
      }

      const description = document.querySelector("#modal-description");
      description.innerHTML = "";
      const descriptionParagraphs = project.description.split("\n\n");
      descriptionParagraphs.forEach((paragraph) => {
        const p = document.createElement("p");
        p.classList.add("modal-r__paragraph");
        p.textContent = paragraph;
        description.append(p);
      });

      const list = document.querySelector(".modal-r__list--main");
      list.innerHTML = "";
      const listParagraphs = project.descriptionBulletpoints.split("\n");
      listParagraphs.forEach((paragraph) => {
        const item = document.createElement("li");
        item.textContent = paragraph;
        list.append(item);
      });

      const subheading2 = document.querySelector("#modal-subheading2");
      subheading2.textContent = project.subheadingTwo;

      const listSecond = document.querySelector(".modal-r__list--second");
      listSecond.innerHTML = "";
      const updatesLine = document.querySelector("#updates-line");
      if (project.updatesBulletpoints == null) {
        updatesLine.style.display = "none";
      } else {
        updatesLine.style.display = "block";
        const listSecondParagraphs =
          project.updatesBulletpoints.split("\n") ?? [];
        listSecondParagraphs.forEach((paragraph) => {
          const item = document.createElement("li");
          item.textContent = paragraph;
          listSecond.append(item);
        });
      }

      event.stopPropagation();
    };
    const division = document.createElement("div");
    division.classList.add("project", "col-sm-12", "col-lg-4");
    division.append(anchor);

    // projectsItemContainer.innerHTML += `
    //         <div class="project col-sm-12 col-md-6 col-lg-4">

    //         <a href="#" class="project__content viewMoreBtn" >
    //             <img src="${project.image_url}" alt="${project.title}" class="project__image">
    //                 <h5 class="project__title">${project.title}</h5>
    //             <button class="btn btn--primary btn--sm project__button">
    //                 View more
    //             </button>
    //         </a>

    //         </div>
    //     `;
    projectsItemContainer.append(division);
  });
  const viewMoreBtn = document.querySelector(".project a");
  const modal = document.querySelector("#myModalOne");
  console.log(modal);
  const close = document.querySelector(".closeOne");
  close.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    const modalL = event.target.closest(".modal-l__content"); // Is the event target a child of .modal-l
    const modalR = event.target.closest(".modal-r__content");
    if (!modalL && !modalR) {
      console.log("not isModal");
      modal.style.display = "none";
    }
  };
  // console.log(viewMoreBtn);
}
