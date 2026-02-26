let tasks=[];

function add(){
 let t=document.getElementById("task").value;
 tasks.push(t);
 show();
}

function show(){
 let l=document.getElementById("list");
 l.innerHTML="";
 tasks.forEach(t=>l.innerHTML+=`<li>${t}</li>`);
}