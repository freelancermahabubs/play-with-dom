document.getElementById("delegate-container").addEventListener("click", function(e) {
console.log(e.target.tagName);
console.log("clieked");
if(e.target.tagName = "BUTTON"){
  console.log('got all buttons')
}
})
