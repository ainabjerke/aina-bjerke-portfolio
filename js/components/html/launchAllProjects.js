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
      "Sorry, no products found. Please check your search and try again",
      ".products"
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
      // project === {
      //   "id": 5,
      //   "title": "Helios Travel",
      //   "description": "Project exam 1 was created in 2022 to showcase my skills learned over the first year of studies.\n\nI created a Travel blog for a fictive company by the name of Helios Travel based on the following specifications:",
      //   "price": null,
      //   "image_url": "https://i.ibb.co/VCSqCPv/helios-travel-webpage-img.jpg",
      //   "featured": null,
      //   "published_at": "2022-09-30T17:33:49.009Z",
      //   "created_at": "2022-09-30T17:33:43.002Z",
      //   "updated_at": "2022-10-10T11:33:05.681Z",
      //   "webpageUrl": "https://inspiring-shaw-0ef167.netlify.app/index.html",
      //   "githubUrl": "https://github.com/ainabjerke/HeliosTravel",
      //   "languages": "HTML CSS JS Wordpress API",
      //   "subTitleOne": "Project exam 1",
      //   "grade": "A",
      //   "descriptionBulletpoints": "WordPress REST API to fetch data\nResponsive layout\nFetch dynamic data stored in WordPress\nCarousel slider users can click to view more posts\nView more/less button to view more blog posts\nUsing query parameter to fetch specific data users has clicked on\nModal users can click on to view a bigger images\nSearch function allows users to find the blog post easier\nPost data from contact form to WordPress so the details is saved\nAllows user to submit comments on blog posts and post this data to WordPress\nJavaScript is used for validation on the contact form, showing an error message I the value in the textboxes does not meet the requirements\n",
      //   "subheadingTwo": "Updates implemented",
      //   "updatesBulletpoints": "Lightbox modal images gallery, clicking on the images in blog specific page opens the lightbox",
      //   "test": null,
      //   "bulletpointTest": null,
      //   "image": {
      //     "id": 6,
      //     "name": "helios_travel_webpage_img.jpg",
      //     "alternativeText": "",
      //     "caption": "",
      //     "width": 535,
      //     "height": 446,
      //     "formats": {
      //       "small": {
      //         "ext": ".jpg",
      //         "url": "https://res.cloudinary.com/dhalnmt5w/image/upload/v1665401582/small_helios_travel_webpage_img_0a9262f895.jpg",
      //         "hash": "small_helios_travel_webpage_img_0a9262f895",
      //         "mime": "image/jpeg",
      //         "name": "small_helios_travel_webpage_img.jpg",
      //         "path": null,
      //         "size": 25.9,
      //         "width": 500,
      //         "height": 417,
      //         "provider_metadata": {
      //           "public_id": "small_helios_travel_webpage_img_0a9262f895",
      //           "resource_type": "image"
      //         }
      //       },
      //       "thumbnail": {
      //         "ext": ".jpg",
      //         "url": "https://res.cloudinary.com/dhalnmt5w/image/upload/v1665401581/thumbnail_helios_travel_webpage_img_0a9262f895.jpg",
      //         "hash": "thumbnail_helios_travel_webpage_img_0a9262f895",
      //         "mime": "image/jpeg",
      //         "name": "thumbnail_helios_travel_webpage_img.jpg",
      //         "path": null,
      //         "size": 6.2,
      //         "width": 187,
      //         "height": 156,
      //         "provider_metadata": {
      //           "public_id": "thumbnail_helios_travel_webpage_img_0a9262f895",
      //           "resource_type": "image"
      //         }
      //       }
      //     },
      //     "hash": "helios_travel_webpage_img_0a9262f895",
      //     "ext": ".jpg",
      //     "mime": "image/jpeg",
      //     "size": 28.72,
      //     "url": "https://res.cloudinary.com/dhalnmt5w/image/upload/v1665401581/helios_travel_webpage_img_0a9262f895.jpg",
      //     "previewUrl": null,
      //     "provider": "cloudinary",
      //     "provider_metadata": {
      //       "public_id": "helios_travel_webpage_img_0a9262f895",
      //       "resource_type": "image"
      //     },
      //     "created_at": "2022-10-10T11:33:03.264Z",
      //     "updated_at": "2022-10-10T11:33:03.275Z"
      //   }
      // }
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

      const grade = document.querySelector("#modal-grade-value");
      grade.textContent = project.grade;

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
      const listSecondParagraphs =
        project.updatesBulletpoints?.split("\n") ?? [];
      listSecondParagraphs.forEach((paragraph) => {
        const item = document.createElement("li");
        item.textContent = paragraph;
        listSecond.append(item);
      });

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
