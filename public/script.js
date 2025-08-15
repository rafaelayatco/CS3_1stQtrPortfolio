
// let age = window.prompt("Enter your age  ", "14");
// let maxAge = window.prompt("Enter your maxAge  ", "100");
// let  numPerDay = window.prompt("Enter your numPerDay  ", "5");
// src = "script.js"

if (confirm(`Is the ${age},${maxAge},${numPerDay} really correct?`)) {

let totalRequired = (Number(perDay * 365)) * (Number(maxAGE - age));

console.log("You will need " + totalRequired + " snacks to last you until the ripe old age of " + maxAGE);
}

else{
    console.log("Run the code again?");
}
