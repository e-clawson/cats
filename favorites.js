//where POST request will be to add and delete favorites 

//create a favorite 
let likeCatButton = document.getElementById("")
console.log(likeCatButton);

likeCatButton.addEventListener("click", event => {
    console.log(event.id)
})

async function clickedLike(){
    let rawBody = JSON.stringify({
        "image_id": "id-of-image-to-favourite",
        "sub_id":"user-123"
    })

    const newFavoriteCat = await fetch("https://api.thecatapi.com/v1/favourites", 
        {
            method: "POST",
            headers: { "x-api-key" : "live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx"},
            body: rawBody,
        })
}

// display a favorite 

// async function displayFavorites() {
//     const response = await fetch('https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC', {
//         headers: {
//             "content-type":"application/json",
//             "x-api-key" : "live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx",
//         }
//     });
//     const favoriteCats = await response.json();
// }

//delete favroites 

// function deleteFavorite() {
    
// }