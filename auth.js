function login(){

const name =
document.getElementById("username").value;

if(name===""){
alert("Please enter your name");
return;
}

localStorage.setItem("rhythraUser",name);

window.location.href="index.html";

}