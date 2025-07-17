//selecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.querySelector(".add-button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//select cancel
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="block"
})
//to select cont,add-book,work-day,work-title,topic
var cont=document.querySelector(".cont")
var add=document.getElementById("add-book")
var workday=document.getElementById("work-day")
var worktitle=document.getElementById("work-title")
var topic=document.getElementById("topic")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-cont")
    div.innerHTML=`<h2>${workday.value}</h2>
    <h5>${worktitle.value}</h5>
    <p>${topic.value}</p>
    <button onclick="deleteit(event)">Delete</button>`
    cont.appendChild(div)
})
function deleteit(event)
{
    event.target.parentElement.remove()
}
