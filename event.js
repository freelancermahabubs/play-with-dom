// Common HTML Events ?​

// 1.By using an event handler

function makeRed(){
  document.body.style.backgroundColor = "red";
  document.getElementById("heading").innerText = "Testing DOM Event"
};

// function makeBlue(){
//   document.body.style.backgroundColor = "Blue";
//   document.getElementById("heading").innerText = "Making Blue and Changing text Together";
// };

document.getElementById("btn-success").addEventListener("click", function(){
  document.body.style.backgroundColor = "blue";
  document.getElementById("h2-container").innerText = "Mahabub Great Boby"
});

// 2.By using an event listener​

const secondButton = document.getElementById("blue-btn").addEventListener("click", function(){
  document.body.style.backgroundColor = "tomato";
  document.getElementById("h2-container").innerText = "Teddy"
});