// product Review
document.getElementById("review-btn").addEventListener("click", function(){
  const myElement = document.getElementById("floatingTextarea2");
  const myElementValue = myElement.value;

  const p = document.createElement("p");
  p.innerText = myElementValue;

  const parent = document.getElementById("commnet-container");
  parent.appendChild(p);
  myElement.value = "";
});

// enterkeyup review seystem 

const input  = document.getElementById("floatingTextarea2");
input.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("review-btn").click();
  }
})