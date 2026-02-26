/* Theme Engine */

function setTheme(theme){
 document.body.className=theme;
 localStorage.setItem("rhythraTheme",theme);
}

window.addEventListener("DOMContentLoaded",()=>{
 let saved=localStorage.getItem("rhythraTheme");
 if(saved) document.body.className=saved;
});