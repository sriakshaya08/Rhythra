let habits = loadData("habits");

function addHabit(){

const name =
document.getElementById("habitInput").value;

if(name==="") return;

habits.push({
name:name,
streak:0
});

saveData("habits",habits);

displayHabits();

}

function doneHabit(index){

habits[index].streak++;

saveData("habits",habits);

fireworks();

displayHabits();

}

function displayHabits(){

const list =
document.getElementById("habitList");

list.innerHTML="";

habits.forEach((h,i)=>{

list.innerHTML += `
<div class="card">
<h3>${h.name}</h3>
<p>🔥 Streak: ${h.streak}</p>
<button onclick="doneHabit(${i})">
Done
</button>
</div>
`;

});

}

displayHabits();