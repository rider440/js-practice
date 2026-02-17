console.log("check a for loop in javascript");
for (let i=1; i<=5; i++){
    console.log("Iteration number: " + i);
}
let i=10;
do{
    console.log("This is a do-while loop iteration: " + i);
    i++;
}while(i<=5);
 for(let i=0; i<=10; i++){
    if(i===5){
        //break;
        continue;
    }
    console.log("Value: " + i);
 }
