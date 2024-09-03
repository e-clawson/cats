// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
//and the function to change the navbar display

const catCardContainer = document.getElementById("card-container");

async function initialLoad(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const jsonData = await response.json(); 
    console.log(jsonData)
    await jsonData.forEach(element => {
        let id = element.id;
        let imgUrl = element.url;

        //creating cat cards
        let catCard = document.createElement("div");
        catCard.setAttribute("id", id);
        catCard.classList.add("card");
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src",imgUrl)
        cardImg.setAttribute("id", "cat-image")
        let likeButton = document.createElement("button")
        likeButton.textContent = "💖"
        likeButton.setAttribute("type", "button")
        likeButton.setAttribute("class", "buttons")
        likeButton.setAttribute("onclick", "clikedLike()")

        catCardContainer.appendChild(catCard);
        catCard.appendChild(cardImg);
        catCard.appendChild(likeButton);
        
    });

}
initialLoad()

//  Nav bar data 

let navBarTabs = [
    { text: "HOME", class:"", class:"home"},
    { text: "BREED INFO", class:"", class:"filter" },
    { text: "FAVORITES 💖", class:"", class:"favorite"},
]

//created NavBar
let navBar = document.createElement("nav");
let headerEl = document.getElementById("navbar");
headerEl.appendChild(navBar);
navBar.classList.add("flex-around");

//used forEach to make an <a> element for each tab
navBarTabs.forEach((link) => {
    const navTabs = document.createElement("a");
    navTabs.textContent = link.text;
    navTabs.classList = link.class
    navBar.appendChild(navTabs)
})

let navTabs = document.querySelectorAll("a")

navBar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target !== "a"){
        navTabs.forEach((link) => {
          let isCurrentEvent = link == event.target;
          if (link !== event.target) {
            link.classList.remove("active");
          }
          if (isCurrentEvent) {
            if (link.classList == "active") {
              link.classList.remove("active"); 
            } else {
              link.classList.add("active");
              let info = link.classList;
              let otherInfo = Array.from(info);
              itemDisplay(otherInfo);
              
            } 
          }
        });
    }
});

function itemDisplay(otherInfo) {
    let homeDiv = document.getElementById("home");
    // let homeDivId = homeDiv.id;
    let homeDivArray = homeDiv.classList

    let filterDiv = document.getElementById("filter");
    let filterDivId = filterDiv.id;
    let filterDivArray = filterDiv.classList
    let realFilterDivArray = Array.from(filterDivArray)

    let favoriteDiv = document.getElementById("favorites");
    let favoriteDivArray = favoriteDiv.classList
    let realFavoriteDivArray = Array.from(favoriteDivArray)

    if (otherInfo.includes("home") && otherInfo.includes("active")) {
        homeDiv.classList.remove("default")
        filterDiv.classList.add("default");
        favoriteDiv.classList.add("default");
    } 
    if (otherInfo.includes("filter") == true && realFilterDivArray.includes("default")) {
        homeDiv.classList.add("default");
        filterDiv.classList.remove("default");
        favoriteDiv.classList.add("default");
    } 
    if (otherInfo.includes("favorite") == true && realFavoriteDivArray.includes("default")) {
        homeDiv.classList.add("default");
        filterDiv.classList.add("default");
        favoriteDiv.classList.remove("default");
    }
  }
