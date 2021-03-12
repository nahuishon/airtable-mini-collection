// get an existing element from the page

//defined variable message
let myMessage = document.querySelector(".message");

console.log(myMessage.innerText);

//changing element properties

myMessage.style.color = "#6c0";
//myMessage.classList.add("big");

//creating new elements and adding them to the page

let newMessage = document.createElement("h1");
newMessage.classList.add("new-message");
newMessage.innerText = "This is a new message added with javascript"

//add the new h1 message to our page
document.querySelector(".container").append(newMessage);


//adding a new image to the page

let newImage = document.createElement("img");
newImage.classList.add("new-image");
newImage.src = "./assets/dog.jpg";

// add image to the page

let container = document.querySelector(".container");
container.append(newImage);