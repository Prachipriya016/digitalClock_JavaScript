const clock = document.getElementById("clock");

setInterval(function() {
let date = new Date();
clock.style.color = "white";
clock.innerHTML = date.toLocaleTimeString();
},1000);