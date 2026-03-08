function renderHeatmap(){

const map =
document.getElementById("heatmap");

if(!map) return;

map.innerHTML="";

for(let i=0;i<120;i++){

let level =
Math.floor(Math.random()*5);

let cell =
document.createElement("div");

cell.className =
"day level" + level;

map.appendChild(cell);

}

}

renderHeatmap();