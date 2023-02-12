// 1) getElemnetsByTagName method

// const tagList = document.getElementsByTagName('h1');
// for(const tag of tagList){
// tag.style.color = "red";
// }
// for(let i = 0; i < tagList.length; i++){
// console.log(tagList[i].innerText);
// }

// 2) getElementsByClass method

// const classList = document.getElementsByClassName('test');
// for(const value of classList){
//   value.style.color = "blue";
// }

// 3) getElementById method

// const myHeading = document.getElementById("heading");
// myHeading.style.textAlign = "center";
// myHeading.style.color = "red";
// console.log(myHeading.innerText);

// document.getElementById('heading').style.color = "blue";
// document.getElementById('heading').style.backgroundColor = "tomato";

// 4) getElementByQuerySelector, querySelectorAll method

// const myElement = document.querySelectorAll(".test");
// for(value of myElement){
//   console.log(value.innerText);
// };

// FindLastChild By QuerySelectorALL
// const lastChild = document.querySelectorAll("li-container");
// console.log(lastChild);

// Dynamic style – manipulating CSS with JavaScript​

// const myElement = document.getElementById("first-heading");
// myElement.style.color = "white";
// myElement.style.backgroundColor= "blue";
// myElement.style.padding = "20px";
// myElement.style.margin = "10px";
// myElement.style.borderRadius = "5px";
// myElement.style.textAlign = "center";

// 2 way add Class name in javaScript
// const myElement = document.querySelector("#first-heading");
// 1 way add Class name Add 
// myElement.className = "myclass";
// 2 way add class name add 
// myElement.classList.add("hello");
// Remove Class Name​
// myElement.classList.remove("myclass");


// Create Element And Append Child​

// const parentContainer = document.querySelector("#container-details");
// const myLi = document.createElement('li');
// myLi.innerText = "Fourth";
// parentContainer.appendChild(myLi);

// const sectionContainer = document.getElementById("sectionContainer");
//create a div
// const div = document.createElement("div");

// make a h1 tag
// const h1 = document.createElement("h1");
// h1.innerText = "Exploring Dynamic JS";
// push h1 inside div
// div.appendChild(h1);
// const ul = document.createElement("ul");
// div.appendChild(ul);
// const li = document.createElement("li");
// li.innerText = "Five";
// ul.appendChild(li);
// sectionContainer.appendChild(div);

// GetAttribute and setAttribute​

// document.getElementById("att-container").setAttribute("class", "mtclass");
// document.getElementById("att-container").setAttribute("value", "myvalue");
// const myAttribute = document.getElementById("att-container").getAttribute("value");
// console.log(myAttribute);

// InnerText Vs InnerHtml vs textContext​

const value = document.getElementById("htmlcontainer");
console.log(value.textContent);