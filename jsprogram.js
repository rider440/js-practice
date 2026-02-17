console.log("Welcome To My JS Program");
let firstName = "Ankur ";
let lastName = "    Yadav";
console.log("To Upper case "+firstName.toUpperCase());
console.log("To lower case "+lastName.toLowerCase());
console.log("Trim of "+lastName.trim());
console.log("Slice of "+firstName.slice(0, 3));
console.log("Index of  "+firstName[2]);
console.log("Concatenate "+firstName.concat(lastName.trim()));
console.log("Replace "+firstName.replace("Ankur", "Hello"));
let num = 234n;
let num1=BigInt(656);
let name ="ankur";
let bollen=true;
console.log(`My name is ${firstName} ${lastName.trim()}`);
console.log("Type of num is "+ typeof(num));
console.log("Type of name is "+ typeof(name));
console.log("Type of bollen is "+ typeof(bollen));
console.log(num>num1);
console.log(num1+num);
console.log(num==num1);
console.log(num!=num1);
let num3 ;
let num4=null;
console.log("Type of num3 is "+ typeof(num3));
console.log("Type of num4 is "+ typeof(num4));
let age= 20;
if( age>18){
    console.log("You can Drive");}
else{
    console.log("You can not Drive");
}
console.log("Find Even or Odd Number");
let number=7;
if (number%2==0){
    console.log("Your Number is Even");
}
else{
    console.log("You Number is Odd");
}
let drink =number>=5 ?  "coffee":"Tea";
console.log(drink);
if(firstName[0]=="A" && age>18){
    console.log("Your data are match");}
    else{
        console.log("Your data are not match");
    }
    if(firstName[0]=="A" || number>18){
    console.log("Your data are match");}
    else{
        console.log("Your data are not match");
    }
    winning=34;
    const prompt=require("prompt-sync")();
    let guess=+prompt("Enter your Guess Number")
    if(winning==guess){
        console.log("Your Guess is Right");
    }else{
        if(guess<winning){
            console.log("Your Guess is Low");
        }else{
            console.log("Your Guess is High");
        }
    }