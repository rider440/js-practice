console.log(" checking a while loop...");
const prompt = require ("prompt-sync")();
let number = +prompt("Enter a nth sum : ");
let sum=0;
let i=0;
while(i<=number){
    sum=sum+i;
    i++;
}
console.log("The sum of numbers from 1 to " + number + " is: " + sum);
let sun_of_nth=(number*(number+1))/2;
console.log("The sum of nth number using formula is : " + sun_of_nth);