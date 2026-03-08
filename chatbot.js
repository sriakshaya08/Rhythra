const input =
document.getElementById("chatInput");

if(input){

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

const msg =
input.value.toLowerCase();

const log =
document.getElementById("chatLog");

log.innerHTML +=
`<div>You: ${msg}</div>`;

log.innerHTML +=
`<div>Rhythra: ${botReply(msg)}</div>`;

input.value="";

}

});

}

function botReply(msg){

if(msg.includes("tired"))
return "Try resting and hydrating.";

if(msg.includes("motivation"))
return "Small habits lead to big growth.";

if(msg.includes("exercise"))
return "A short walk boosts energy.";

if(msg.includes("stress"))
return "Take deep breaths and slow down.";

return "Stay balanced and keep your rhythm.";

}