let moods = loadData("moods");

function logMood(value){

moods.push(value);

saveData("moods",moods);

drawChart();

}

function drawChart(){

const ctx =
document.getElementById("moodChart");

if(!ctx) return;

new Chart(ctx,{
type:"line",
data:{
labels:moods.map((_,i)=>i+1),
datasets:[{
data:moods,
borderColor:"#f472b6",
backgroundColor:"rgba(244,114,182,0.2)",
fill:true
}]
}
});

}

drawChart();