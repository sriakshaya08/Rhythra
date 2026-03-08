function calculateWellness(){

const habits =
loadData("habits");

const moods =
loadData("moods");

const tasks =
loadData("tasks");

let habitScore =
habits.reduce((a,h)=>a+h.streak,0);

let moodScore =
moods.length ?
moods.reduce((a,b)=>a+b)/moods.length
:3;

let taskScore =
tasks.length;

let score =
Math.min(
100,
habitScore +
moodScore*10 +
taskScore*2
);

return Math.round(score);

}