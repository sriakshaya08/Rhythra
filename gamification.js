function getXP(){

const habits =
loadData("habits");

const moods =
loadData("moods");

const tasks =
loadData("tasks");

let xp = 0;

/* habits */

xp += habits.reduce(
(a,h)=>a + h.streak*5,
0
);

/* mood logs */

xp += moods.length * 3;

/* tasks */

xp += tasks.length * 2;

return xp;

}


function getLevel(){

const xp =
getXP();

if(xp < 50)
return "Seed 🌱";

if(xp < 150)
return "Sprout 🌿";

if(xp < 300)
return "Bloom 🌸";

if(xp < 600)
return "Zenith 🌟";

return "Master 🌌";

}