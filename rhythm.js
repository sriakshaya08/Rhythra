document.getElementById("energy").oninput=function(){
 let v=this.value;
 let p=v<=2?"Recovery":v==3?"Balance":"Peak";
 document.getElementById("phase").innerText=p;
};