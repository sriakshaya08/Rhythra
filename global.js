/* Check login */

const user =
localStorage.getItem("rhythraUser");

if(!user && !window.location.href.includes("login")){
window.location.href="login.html";
}

/* Theme system */

function setTheme(theme){

document.body.className=theme;

localStorage.setItem(
"rhythraTheme",
theme
);

}

/* Load theme */

window.onload=function(){

const savedTheme=
localStorage.getItem("rhythraTheme");

if(savedTheme){
document.body.className=savedTheme;
}

}

/* Local storage helpers */

function saveData(key,data){

localStorage.setItem(
key,
JSON.stringify(data)
);

}

function loadData(key){

return JSON.parse(
localStorage.getItem(key)
) || [];

}