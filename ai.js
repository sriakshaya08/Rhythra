function predictEnergy(){

const moods =
loadData("moods");

if(moods.length===0)
return "Normal";

let avg =
moods.reduce((a,b)=>a+b)/moods.length;

if(avg>=4)
return "High Energy ⚡";

if(avg>=3)
return "Balanced";

return "Low Energy";

}


function generateInsight(){

const moods =
loadData("moods");

if(moods.length===0)
return "Start logging mood to unlock insights.";

let avg =
moods.reduce((a,b)=>a+b)/moods.length;

if(avg>=4)
return "Your emotional rhythm is strong.";

if(avg>=3)
return "Consistency builds wellbeing.";

return "Consider rest and recovery today.";

}