// const student = {
//     name: "jeewan",
//     age: 23,
//     math: 93,
//     science: 85,
//     computer: 55,
//     getAvg() {
//         console.log(this);
//         return Math.round((this.math + this.science+this.computer) / 3);
//     }
// }
// console.log(student.getAvg());

// const sum =  (a , b)=> a + b;
// console.log(sum(10, 4));











// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person1 = new Person("Jeewan", 26);
// console.log(person1);
// //console.log(Person("Jeewan", 26));

// Person.prototype.gender = "male";
// console.log(person1.gender);

// function Student(name, age, subject){
//     Person.call(this, name, age);
//     this.subject = subject;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let stu1 = new Student("John Doe", 17, "Math");
// console.log(stu1);
// console.log(stu1.name);

/* set timeout */
// console.log("hi there!");
// setTimeout(() => {
//     console.log("I'm here after 3 seconds.");
// }, 3000);
// console.log("welcom to");

/* set interval */

// let timer = setInterval(() => {
//     console.log("Hello World!")
// }, 1000);
// setTimeout(()=>{
//    clearInterval(timer)
// }, 15000);

/* this with arrow functions*/
// let obj = {
//     name: "jeewan",
//     sayHi() {
//         console.log(`hello ${this.name}`);
//     }
// }
// obj.sayHi(); // hello jeewan

// let sayHi = obj.sayHi;
// sayHi(); // error because of lose the context of 'this'. so we need to use   arrow function or bind method.

// console.log(typeof sayHi); // function
// console.log(typeof obj.sayHi); // method

// /* Write an arrow function that returns the square of a number 'n'.*/
// let sqr = (n)=> n*n;
// console.log(sqr(4));

// /* Write a regular function that takes two arguments and return their sum.*/
// function add(x , y){
//     return x + y ;
// }
// console.log(add(2,6)) ;

// /* Create a new object from array using rest parameter */
// let arr=[1,2,3];
// let objNew={...arr};
// console.log(objNew);

// /* Transform the data types of properties in an object into another type.*/
// let data={a:10,b:'15',c:true};

// let numData={...data , ...{a:Number(data.a) , b:parseInt(data.b)}};
// console.log(numData);

// /* Use template literals for string manipulation.*/
// let name="jeevan";
// let age=27;
// let city="Bangalore";

// console.log(`${name} is ${age} years old and lives in ${city}`);

/* write a function the prints "Hello world" 5 times at intervals of 2s each. */
// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);
