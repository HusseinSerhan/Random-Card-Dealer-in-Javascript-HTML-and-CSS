const suits = ["♥", "♠", "♣", "♦"];
const values = 
    ['2', '3', '4', '5', '6', '7', '8', '9', '10',
 './assets/vecteezy_king-playing-card-character-sticker_.jpg', 
 './assets/vecteezy_queen-playing-card-character-sticker_.jpg', 
 './assets/vecteezy_jack-playing-card-character-sticker_.jpg'];

// Replace elements 
function replaceSuit(){
    const randomSuit = Math.floor(Math.random() * suits.length); 

    const firstSpan = document.querySelector(".card span:first-child"); 
    const newSpan = document.createElement("span"); 
    newSpan.textContent = suits[randomSuit];
    newSpan.classList.add("suit-top");
    firstSpan.replaceWith(newSpan)

    const lastSpan = document.querySelector(".card span:last-child"); 
    const newSpan2 = document.createElement("span"); 
    newSpan2.textContent = suits[randomSuit];  
    newSpan2.classList.add("suit-bottom");
    lastSpan.replaceWith(newSpan2)
}

// Replace Value
function replaceValue() {
    let value = document.querySelector(".card .value");
    const randomValue = Math.floor(Math.random() * values.length);

    if (values[randomValue].includes("assets")) {
        const img = document.createElement("img");
        img.src = values[randomValue];
        img.classList.add("value");
        value.replaceWith(img);
        
    } else {
        const newValue = document.createElement("span"); 
        newValue.textContent = values[randomValue]; 
        newValue.classList.add("value");
        value.replaceWith(newValue);
        
    }
}


// Refresh Button
document.getElementById("refresh-icon").addEventListener("click", function() {
    replaceSuit();
    replaceValue();
});









// if (type (values[randomValue]) == 'string') {
    // let newValue = document.createElement("span");
    // newValue.textContent = values[randomValue];
    // newValue.classList.add("value");
    // initialValue.replaceWith(newValue);
    // return;
    // } else if (isNaN(values[randomValue])) 
    //     {
    //     const img = document.createElement("img");
    //     img.src = values[randomValue];
    //     img.classList.add("value-img");
    //     initialValue.replaceWith(img);
    //     return;
    // }
    // let newValue = document.createElement("span");
    // newValue.textContent = values[randomValue];



 // const card = document.querySelector(".card"); 
    // const valueElement = card.querySelector(".details .value");

    // if (isNaN(value)) { 
    //     const img = document.createElement("img");
    //     img.src = value;
    //     img.classList.add("value-img");
    //     card.querySelector(".value").replaceWith(img);
    //     randomValue = Math.floor(Math.random() * 8) + 9; 
    // } else {
    //     const newValue = document.createElement("span"); 
    //     newValue.textContent = value; 
    //     newValue.classList.add("value");
    //     card.querySelector(".details .value").replaceWith(newValue);
    // }