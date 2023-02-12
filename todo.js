let count = 0;
document.getElementById("input-btn").addEventListener("click", function() {
  count = count +1
const myInputValue = document.getElementById("input-value").value;
// console.log(myInputValue);
const parent = document.getElementById("content-container");
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${count}</td>
<td>${myInputValue}</td>
<td>
<button class="btn btn-danger deletebtn">Delete</button>
<button class ="btn btn-primary">Done</button>
</td>
`;
parent.appendChild(tr);
document.getElementById("input-value").value = "";


const elements = document.querySelectorAll(".deletebtn");
for(const value of elements){
  value.addEventListener('click', function(event){
    event.target.parentNode.parentNode.style.display = "none";
  })
}
});

document.getElementById("clear-btn").addEventListener("click", function(e){
  // console.log(e.target)
  e.target.parentNode.style.display = "none";

})

