const containerPortfolio = document.querySelector(".container-portfolio");

const url =
  "https://ainabjerke.com/FlowerPower/wp-json/wc/store/products/?per_page=30";
console.log(url);
//fetch data from api
async function gePortfolioContent() {
  try {
    const response = await fetch(url);

    const getResults = await response.json();
    console.log(getResults);

    createPortfolioContentHTML(getResults);
  } catch (error) {
    document.querySelector(".loader").style.display = "none";
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}
gePortfolioContent();

//post data from api on blog page
function createPortfolioContentHTML(content) {
  // document.querySelector(".loader").style.display = "none";
  // blogPostsContainerOne.innerHTML = "";
  // blogPostsContainerTwo.innerHTML = "";
  // blogPostsContainerThree.innerHTML = "";
  // blogPostsContainerFour.innerHTML = "";
  // blogPostsContainerFive.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    console.log(content[i].name);
    if (i <= 2) {
      containerPortfolio.innerHTML += ` <div class="column portfolio-section">
                                          <a href="#"?id=${content[i].id}>
                                          <img src = "${content[i].images[0].src}" alt="${content[i].images[0].alt}"> 
                                          <p>${content[i].name}</p>
                                          <a href="#?id=${content[i].id}" class="portfolioBtn">Read more</a>
                                          </a>
                                           </div>`;
    }
  }
}
