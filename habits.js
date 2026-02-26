let habits=
JSON.parse(localStorage.getItem("habits"))||[];

function addHabit(){
 let name=document.getElementById("habitInput").value;
 habits.push({name,streak:0});
 save(); display();
}

function display(){
 let list=document.getElementById("habitList");
 list.innerHTML="";
 habits.forEach((h,i)=>{
  list.innerHTML+=`
   <div>${h.name} 🔥${h.streak}
   <button onclick="done(${i})">Done</button>
   </div>`;
 });
}

function done(i){
 habits[i].streak++;
 save(); display();
}

function save(){
 localStorage.setItem("habits",JSON.stringify(habits));
}

display();