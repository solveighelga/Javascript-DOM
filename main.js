const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput"); // want to be able to grab the item when the user inputs it in the list

// delete all the items from the list by pressing the pencil logo
pencil.addEventListener("click", function(){ // click to make it work on a click
    allItems.innerHTML = "";
})

// user can press the enter key to add a new item to the list
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
        addItem();
})

// Here is the function to make it all possible
function addItem(){
    let h2 = document.createElement("h2"); // I want it to be in h2
    h2.innerHTML = "- " + userInput.value; // .value makes it show up on the screen

    h2.addEventListener("click", function(){ // it is activated with the click of the mouse
        if(h2.style.textDecoration != "line-through") { // here i want to check if the itme i click already has a line-through
            h2.style.textDecoration = "line-through"; // change the style: when I am done with an item on my list there will be a line drawn through the item
        } else{
            h2.style.textDecoration = "none"; // change the syle: if I want to change the item back to not done then I click it also
        }
    })

    allItems.insertAdjacentElement("beforeend", h2) //add the h2 element to my allItems container. "beforeend" because I want to insert the item at the end of my list

    userInput.value = "";
}

// animation
const text = document.querySelector(".title");
const strText = text.textContent; // textContent = I only want the word itself Grocery List to animate
const splitText = strText.split(""); // I want to split the text to I can work with each letter to make it move
text.textContent = ""; // get rid of the h1 element so it won't repeat itself
for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i]; + "</span>"; // I want to add to my text so I put a += and then a span + slitText[i] so it goes through each individal letter in the loop
}

let char = 0; // character
let timer = setInterval(onTick, 50); // I want the letters to appear on a timer

function onTick(){
    const span = text.querySelectorAll('span')[char]; // I want all of the span here above and the character gives me each and everyone of the letters
    span.classList.add('fade');
    char++ // I want to add every letter after 50ms so I set it to ++
    if(char === splitText.length){ // when it reaches the end I want it to stop and be completed
        complete();
        return;
    }
}
// This function makes it not repeat
function complete(){
    clearInterval(timer);
    timer = null;
}