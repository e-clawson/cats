//where POST request will be to add and delete favorites 

//create a favorite 
const favoriteCatContainer = document.getElementById("fave-cats");
const buttons = document.getElementById("card-container")

buttons.addEventListener("click", event =>{
    let id = event.target.parentNode.id
   
    clickedLike(id)
})

async function clickedLike(id){

    var rawBody = JSON.stringify({ 
        "image_id": `${id}`,
        "sub_id": "user-123"
         });

    const response = await fetch("https://api.thecatapi.com/v1/favourites", 
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'x-api-key': 'live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx',
            },
            body: rawBody,
        });
    console.log(response)   
    displayFavorites();
}

// display a favorite 

async function displayFavorites() {
    const response = await fetch('https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC', {
        headers: {
            "content-type":"application/json",
            "x-api-key": "live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx",
        }
    });
    const favoriteCats = await response.json();
    console.log(favoriteCats)
    await favoriteCats.forEach(element => {
       let id = element.image.id;
       let url = element.image.url;
       let faveCatCard = document.createElement("div");
        faveCatCard.setAttribute("id", id);
        faveCatCard.classList.add("card");
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src",url)
        cardImg.setAttribute("id", "cat-image")

        favoriteCatContainer.appendChild(faveCatCard)
        faveCatCard.appendChild(cardImg)
    })
}

//delete favroites 

// function deleteFavorite() {
    
// }