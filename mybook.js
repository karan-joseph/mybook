
var popoverley=document.querySelector(".pop_overley")
var poppage=document.querySelector(".pop_page")
var addbutton=document.querySelector(".add_button")
addbutton.addEventListener("click",function(){
    popoverley.style.display="block"
    poppage.style.display="block"
})
var cancelbook=document.getElementById("cancel_book")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
  popoverley.style.display="none"
    poppage.style.display="none"  
})
var holebook=document.querySelector(".hole_book")
var addbook=document.getElementById("add_book")
var booknameid=document.getElementById("book_name_id")
var bookaurtornameid=document.getElementById("book_aurtor_name_id")
var discripionid=document.getElementById("discripion_id")
addbook.addEventListener("click",function(event){
    event.preventDefault()
  var div=document.createElement("div") 
  div.setAttribute("class","book_page")
  div.innerHTML=`<h2>${booknameid.value}</h2>
    <h5>${bookaurtornameid.value}</h5>
    <p>${discripionid.value}</p>
    <button onclick="this.parentElement.remove()">delete</button>`
  holebook.append(div)
  popoverley.style.display="none"
    poppage.style.display="none" 
  })
  