
let age = window.prompt("Enter your age  ", "14");
let maxAge = window.prompt("Enter your maxAge  ", "100");
let  numPerDay = window.prompt("Enter your numPerDay  ", "5");

if (confirm(`Is the ${age},${maxAge},${numPerDay} really correct?`)) {

totalRequired = (numPerDay * 365) * (maxAge - age);

console.log("You will need " + totalRequired + " snacks to last you until the ripe old age of " + maxAge);
}

else{
    console.log("Run the code again?");
}
