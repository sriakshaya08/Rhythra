/* Section Navigation */
function showSection(id){
  document.querySelectorAll(".section")
    .forEach(sec => sec.classList.add("hidden"));

  document.getElementById(id)
    .classList.remove("hidden");
}

/* ---------------- HABITS ---------------- */

let habits = JSON.parse(localStorage.getItem("habits")) || [];
let streak = localStorage.getItem("streak") || 0;

document.getElementById("streak").innerText = streak;

function addHabit(){
  let input = document.getElementById("habitInput");
  let habit = input.value;

  if(habit === "") return;

  habits.push({name:habit, done:false});
  localStorage.setItem("habits",JSON.stringify(habits));

  input.value="";
  displayHabits();
}

function displayHabits(){
  let list = document.getElementById("habitList");
  list.innerHTML="";

  habits.forEach((h,index)=>{
    let li=document.createElement("li");

    li.innerHTML=`
      <input type="checkbox"
        onchange="completeHabit(${index})">
      ${h.name}
    `;

    list.appendChild(li);
  });
}

function completeHabit(i){
  streak++;
  localStorage.setItem("streak",streak);
  document.getElementById("streak").innerText=streak;

  alert("🏅 Badge Earned!");
}

displayHabits();

/* ---------------- CYCLE TRACKER ---------------- */

function calculateCycle(){

  let lastDate =
    new Date(document.getElementById("lastDate").value);

  let cycleLength =
    document.getElementById("cycleLength").value;

  let nextDate = new Date(lastDate);
  nextDate.setDate(lastDate.getDate()+parseInt(cycleLength));

  let today = new Date();
  let diff =
    Math.floor((today-lastDate)/(1000*60*60*24));

  let phase="";

  if(diff<=5) phase="Menstrual 🩸";
  else if(diff<=13) phase="Follicular 🌱";
  else if(diff<=16) phase="Ovulation 🌸";
  else phase="Luteal 🌙";

  document.getElementById("phase").innerText=phase;

  document.getElementById("result").innerText=
    "Next Period: "+nextDate.toDateString();
}

/* ---------------- AFFIRMATIONS ---------------- */

const affirmations=[

"I honor my growth 🌸",
"My body is powerful 💪",
"I deserve rest 🌙",
"I radiate confidence ✨",
"I bloom in my own time 🌷",
"I am strong and resilient 🔥"

];

function generateAffirmation(){

  let random =
    affirmations[Math.floor(Math.random()*affirmations.length)];

  document.getElementById("affirmText").innerText=random;
}