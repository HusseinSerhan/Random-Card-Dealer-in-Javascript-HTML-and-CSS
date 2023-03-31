const suits = ["♥", "♠", "♣", "♦"];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack', 'Ace']; 

const randomSuit = Math.floor(Math.random() * suits.length); 
const randomValue = Math.floor(Math.random() * values.length); 


// Replace elements 
function replaceElement() {
    const oldSuitTop = document.getElementsByClassName('suit-top');
    const newSuitTop = document.createElement("span")

    newSuitTop.classList.add("suit-top");
    newSuitTop.innerHTML = suits[randomSuit];

    oldSuitTop.replaceWith(newSuitTop);

}

window.onload = function(){
    replaceElement();
}