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
   

})
