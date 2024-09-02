// this index.js handles the work to filter by breed 

//find the breed filter in index.html and cache to a variable "breedFilter"
const breedFilter = document.getElementById("breed-filter")
const infoCard = document.getElementById("filter-info")

//start with a fetch request to get each of the breeds
async function breedLoad(){
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const jsonData = await response.json(); 
    await jsonData.forEach(element => {
        let breed = element.name;
        let idValue = element.id;
        let breedOption = document.createElement("option");
        breedOption.textContent = breed;
        breedOption.setAttribute("id", idValue);
        breedFilter.appendChild(breedOption);
    });
}
breedLoad()

// add the breed information to the dropdown menu 

// create eventlistener for the breedFilter element
breedFilter.addEventListener("change", (event)=> {
    let index = breedFilter.selectedIndex; 
    //getting the index of the cat breed within the array of cat breeds from breed load and caching in variable
   let selectedCatBreed = event.target[index];
   //getting the information on that cat breed from breedLoad and caching in variable
   let selectedBreedId = selectedCatBreed.id;
   //getting the id of the catbreed and caching in variable to pass to breedInfo function 
   breedInfo(selectedBreedId)
   //passing the id to breedInfo
})

// function to grab the cat info and display on the page based on the selected cat id from the dropdown element
async function breedInfo(id) {
    //fetch the breed information from the API using the selected cat breed id from event listener
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx`);
    //wait for the response, turn it into json, and store the response in the variable jsonData
    const jsonData = await response.json();
    //cache information from the first object in the array in variable
    let catData = jsonData[0];

    breedInfoCard(catData);

    //pass that variable to a function so it can be used to make info card 

    //for each object in the returned array, create a display card and display the image
    await jsonData.forEach(element => {
        let img = element.url;
        const catFilterImgCard = document.getElementById("filter-imgs");
        let catBreedImg = document.createElement("img");
        catBreedImg.setAttribute("class", "cat-breed-img");
        catBreedImg.setAttribute("src", img);
        catFilterImgCard.appendChild(catBreedImg);
        //currently this is wrking but it is causing an error code: 429 - too many requests
        //I think this means it is reutrning more data than it can process
        //and so it is crashing and I need to use whats called "rate-limiting" 
        //so it sends me fewer pictures at once or slows down the rate that it sends pictures so my 
        //browser can catch up 
    })

}

//displays breed info on the page 
async function breedInfoCard(catData) {
    let catCardInfo = catData.breeds[0];
    console.log(catCardInfo);
    let breedName = catCardInfo.name;
    let description = catCardInfo.description;
    // let origin = catCardInfo.origin;
    let breedCardName = document.createElement("h2")
    breedCardName.textContent = breedName;
    let breedCardDesc = document.createElement("p")
    breedCardDesc.textContent = description;

    infoCard.appendChild(breedCardName)
    infoCard.appendChild(breedCardDesc)
}
