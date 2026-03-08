const slider =
document.getElementById("energyRange");

if(slider){

slider.oninput=function(){

const value = this.value;

let phase="";

if(value<=2)
phase="Recovery Phase";

else if(value==3)
phase="Balance Phase";

else
phase="Peak Energy Phase";

document.getElementById("phase").innerText =
phase;

}

}