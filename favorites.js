//where POST request will be to add and delete favorites 

//create a favorite 
const buttons = document.getElementsByClassName("buttons")


// buttons.addEventListener("click", event =>{
//     console.log(event.id)
// })

async function clickedLike(){
    
    // let rawBody = JSON.stringify({
    //     "id": "8r",
    //     "sub_id":"user-1390"
    // });

    const newFavoriteCat = await fetch(
        "https://api.thecatapi.com/v1/favourites", 
        {
            method: 'POST',
            headers: {
                'x-api-key': 'live_Es3cWPLAwQH0X3Nk48kJtEgjzAskeBrzI2ZYlFrxkScKv8daA1DF4XJKiS704Sgx'
            },
            body: JSON.stringify({
                "id": "8r",
                "sub_id":"user-1390"
            }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        console.log(json)
    
}

async function alertResponse(response) {
    if (response.ok) {
        const textData = await response.text();
        alert(textData);
    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
    }
}
clickedLike()

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