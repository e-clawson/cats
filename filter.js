// filter by breed 

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
        breedSelect.appendChild(breedOption);
    });
}
breedLoad()

// add the breed information to the dropdown menu 

const breedFilter = document.getElementById("breed-filter")
console.log(breedFilter)