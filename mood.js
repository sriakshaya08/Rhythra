let moods=[];

function logMood(v){
 moods.push(v);
 draw();
}

function draw(){
 new Chart(document.getElementById("graph"),{
  type:"line",
  data:{
   labels:moods.map((_,i)=>i+1),
   datasets:[{data:moods}]
  }
 });
}