console.log("Write a Array in a javascript file");
const Array1=[1,3,4,23,3,23];
console.log(Array1);
// push method
Array1.push(100);
console.log("After pushing 100: " + Array1);
// pop method
Array1.pop();
console.log("After popping: " + Array1);
console.log(Array1.pop() + " is popped element");
// unshift method
Array1.unshift(6565);
console.log("After unshifting 0: " + Array1);
// shift method
Array1.shift();
console.log("After shifting: " + Array1);
console.log(Array1.shift() + " is shifted element");
console.log("Length of Array1 is a: " + Array1.length);