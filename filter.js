// this index.js handles the work to filter by breed 

//find the breed filter in index.html and cache to a variable "breedFilter"
const breedFilter = document.getElementById("breed-filter")

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

    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx`);
    console.log(response)

}
