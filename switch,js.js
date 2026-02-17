console.log("Checking  weekend days... with Switch Statement");
const prompt = require("prompt-sync")();
let day = +prompt("Enter a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday): ");
switch(day){
    case 0:
        console.log("It's Sunday, it's a weekend!");
        break;
    case 1:
        console.log("It's Monday, it's a weekday.");
        break;
    case 2:
        console.log("It's Tuesday, it's a weekday.");
        break;
    case 3:
        console.log("It's Wednesday, it's a weekday.");
        break;
    case 4:
        console.log("It's Thursday, it's a weekday.");
        break;
    case 5:
        console.log("It's Friday, it's a weekday.");
    break;
    case 6:
        console.log("It's Saturday, it's a weekend!");
        break;
    default:
        console.log("Invalid input! Please enter a number between 0 and 6.");
        break;
}