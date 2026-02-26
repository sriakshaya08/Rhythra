new Chart(
document.getElementById("moodChart"),
{
 type:"line",
 data:{
  labels:["Mon","Tue","Wed","Thu","Fri"],
  datasets:[{
   data:[3,4,2,5,4],
   borderColor:"#f472b6",
   fill:true
  }]
 }
});