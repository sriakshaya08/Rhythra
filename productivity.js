let tasks = loadData("tasks");

function addTask(){

const task =
document.getElementById("taskInput").value;

if(task==="") return;

tasks.push(task);

saveData("tasks",tasks);

showTasks();

}

function showTasks(){

const list =
document.getElementById("taskList");

list.innerHTML="";

tasks.forEach(t=>{

list.innerHTML +=
`<li>${t}</li>`;

});

}

showTasks();