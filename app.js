const suits = ["♥", "♠", "♣", "♦"];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack', 'Ace']; 

const randomSuit = Math.floor(Math.random() * suits.length); 
const randomValue = Math.floor(Math.random() * values.length); 

// Replace elements 
function replaceSuitTop() {
    const suits = ["♥", "♠", "♣", "♦"];
    const firstSpan = document.querySelector(".card span:first-child"); 
    const newSpan = document.createElement("span"); 
    newSpan.textContent = suits[randomSuit]; 
    newSpan.classList.add("suit-top");
    firstSpan.replaceWith(newSpan)
}

function replaceSuitBottom() {
    const lastSpan = document.querySelector(".card span:last-child"); 
    const newSpan = document.createElement("span"); 
    newSpan.textContent = suits[randomSuit]; 
    newSpan.classList.add("suit-bottom");
    lastSpan.replaceWith(newSpan)
}

window.onload = function(){
    replaceSuitTop();
    replaceSuitBottom();
}