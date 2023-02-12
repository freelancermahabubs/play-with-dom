let count = 0;
document.getElementById("blue-btn").addEventListener("click", function(){
  // count += 1;
  count = count +1
  document.getElementById("counter").innerText = count;
});


// function makeMinus(){
//   count -= 1;
//   document.getElementById("counter").innerText = count;
// }



document.getElementById("btn-success").addEventListener("click", function(){
  count -= 1;
document.getElementById("counter").innerText = count;
})