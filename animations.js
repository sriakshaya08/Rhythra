function fireworks(){

const fire =
document.createElement("div");

fire.innerText="🎆";

fire.style.position="fixed";
fire.style.left="50%";
fire.style.top="40%";
fire.style.fontSize="50px";

document.body.appendChild(fire);

setTimeout(()=>{
fire.remove();
},800);

}