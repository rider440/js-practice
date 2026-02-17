console.log(" Check Temperature Program ");
const prompt=require("prompt-sync")();
let temp=+prompt("Enter Temperature : ");    
// Check Temperature 
if(temp<0){
    console.log("Extremely Cold Weather");
    } else if(temp<10){
    console.log("Very Cold Weather");}  
    else if (temp<20){
        console.log("cold Weather");
    }
    else if (temp<30){
        console.log("Normal in Temp");
    }
    else if (temp<40){
        console.log("Its Hot");     
    }
    else{
        console.log("Its Very Hot");        
}
