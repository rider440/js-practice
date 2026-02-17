const Emp= {}
Emp.id = 1;
Emp.name = "John Doe";
Emp.position = "Software Engineer";
Emp.getDetails = function() {
    return `ID: ${this.id}, Name: ${this.name}, Position: ${this.position}`;
}
console.log(Emp.getDetails());