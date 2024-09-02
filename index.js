// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
//and the function to change the navbar display

const artCardContainer = document.getElementById("card-container");

async function initialLoad(){
    const response = await fetch("https://api.artic.edu/api/v1/artworks")
    const jsonData = await response.json(); 

    let newData = jsonData;

    await newData.data.forEach(element => {
        let id = element.id;
        //img
        let imgId = element.image_id;
        // let lqipImg = element.thumbnail.lqip;
        let altText = element.alt_text;
        //artist info
        let artist = element.artist_title;
        let artistId = element.artist_id;
        let artistDisplay = element.artist_display;
        //art info 
        let title = element.title;
        let refNum = element.main_reference_number;
        let date = element.date_display;
        let placeOfOrg = element.place_of_origin;
        let artType = element.artwork_type_title;
        let artDescription = element.description; 
      

        //creating art cards
        let artCard = document.createElement("div");
        artCard.setAttribute("id", id);
        artCard.setAttribute("class", "artistId");
        // artCard.setAttribute("style", "");
        artCard.classList.add("card");
        let cardTitle = document.createElement("h3");
        cardTitle.innerHTML = title;
        cardTitle.setAttribute("class", "card-title");
        let cardArtist = document.createElement("h4");
        cardArtist.innerHTML = artist;
        let cardDate = document.createElement("p");
        cardDate.innerHTML = date;
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src",`https://www.artic.edu/iiif/2/${imgId}/full/300,/0/default.jpg`)
        let cardDescription = document.createElement("p");
        cardDescription.innerHTML = artDescription

        artCardContainer.appendChild(artCard);
        artCard.appendChild(cardTitle);
        artCard.appendChild(cardImg);
        artCard.appendChild(cardArtist);
        artCard.appendChild(cardDate);
        artCard.appendChild(cardDescription);
    });
    console.log(artCardContainer)

}
initialLoad()