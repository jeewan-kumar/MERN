// Example 1: Variable Hoisting
console.log(myVar); // undefined
var myVar = 10;

// Example 2: Function Hoisting
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}

// Example 3: TDZ
console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 20;
