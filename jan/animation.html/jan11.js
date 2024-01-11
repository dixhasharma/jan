// console.log(document);
const h1= document.getElementById("hello");
console.log(h1);
h1.style.color="red"
h1.style.backgroundColor="green"
const hh1=document.querySelector(".nav-item")
hh1.style.color="green"

// to change the hreadin 
const heading= document.getElementById("hello");
console.log(heading.textContent);

heading.textContent=("hello javascript");
console.log(heading.textContent);

//chnge the style of content
const heading2=document.querySelector("div.head h2")
console.log(heading2.textContent);
heading2.style.color="green";

//get and set the element
 
const link1=document.querySelector("a")
console.log(link1.getAttribute("href"))
const input1 =document.querySelector("type")
// console.log(input1.getAttribute("type"));
//set attribute
link1.setAttribute("href","https://www.youtube.com/")
console.log(link1.getAttribute("href"));
//method 1=get multiple element using get lement by class
//return htmlcollection 
//method 2=get multiple element using get lement by query selector
//return nodelist

const navitem=document.getElementsByClassName("nav-item")
console.log(navitem);

//iterating html collection simple for loop

for(let i=0;i<navitem.length;i++)
{
    console.log(navitem[i].textContent);
}
//method2

const newnavitem=document.querySelectorAll(".nav-item");
console.log(newnavitem);
for(let i=0;i<newnavitem.length;i++)
{
    console.log(newnavitem[i].textContent);
}
const heading3=document.getElementsByClassName("nav-item")
// console.log(heading3);
for(let i=0;i<heading3.length;i=i+2)
{
    // heading3[i].style.color="green";
    // heading3[i].style.backgroundColor="green";
   console.log(heading3[i]);
   const heading4=heading3[i];
   heading4.style.color="red"

}

//for of loop
// for(let i of new1)
// {
//     console.log(i);
// }

var div=document.getElementById("mouseoutDiv");
mouseoutDiv.addEventListener("mouseout",function()
{
    mouseoutDiv.style.backgroundColor="red";
})
mouseoutDiv.addEventListener("mouseover",function()
{
    mouseoutDiv.style.backgroundColor="blue";
})
let mouseup=document.getElementById("mouseup");
mouseup.addEventListener("mouseup",function()
{
    mouseup.style.backgroundColor="orange";
})

mouseup.addEventListener("mouseup",function()
{
    mouseup.style.backgroundColor="";
})
