function addRow(){

var name=document.querySelector("#name").value;
var age=document.querySelector("#age").value;
var gender=document.querySelector(".gender:checked").value;
var course=document.querySelector("#courses").value;
var email=document.querySelector("#email").value;
var rowin=document.getElementById("insrow");
var cr=document.createElement("tr");
cr.innerHTML=  `<td>${name}</td><td>${age}</td><td>${gender}</td><td>${course}</td><td>${email}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
rowin.append(cr);
}
function deleteRow(e){
    e.parentElement.parentElement.remove();
}