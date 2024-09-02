// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
//and the function to change the navbar display

const catCardContainer = document.getElementById("card-container");

async function initialLoad(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const jsonData = await response.json(); 
    console.log(jsonData)

    let newData = jsonData;

    await newData.forEach(element => {
        let id = element.id;
        //img
        // console.log(id)
        let imgUrl = element.url;
        // console.log(element)
        console.log(imgUrl)

        //creating art cards
        let catCard = document.createElement("div");
        catCard.setAttribute("id", id);
        // artCard.setAttribute("style", "");
        catCard.classList.add("card");
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src",imgUrl)

        catCardContainer.appendChild(catCard);
        catCard.appendChild(cardImg);
    });
    console.log(catCardContainer)

}
initialLoad()

//  Nav bar data 

let navBarTabs = [
    { text: "home", class:"", class:"home"},
    { text: "filter", class:"", class:"filter" },
    { text: "favorites", class:"", class:"favorite"},
]

//created NavBar
let navBar = document.createElement("nav");
let headerEl = document.getElementById("header");
headerEl.appendChild(navBar);
navBar.classList.add("flex-around");



