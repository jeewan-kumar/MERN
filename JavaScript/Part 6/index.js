/* function */
// function hello() {
//     console.log("Hello");
// }

// hello();
// console.log(hello());

// function printName() {
//     console.log("aapna collage");
//     console.log("shradha khapra");
// }

// printName();

// function with parameter
// function addNumber(x, y) {
//     return x + y;
// }

// let result = addNumber(5, 10);
// console.log(result);

// function print1to5() {
//     for (let i = 0;i<=5;i++) {
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult() {
//     var age = prompt("Enter your age: ");
//     if (age >= 18) {
//         alert("You are an adult!");
//     } else {
//         alert("Sorry, you are not yet an adult.");
//     }
// }

// isAdult();

// function printPoem() {
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");
// }
// printPoem();

// function dice() {
//     const  sides = Math.floor(Math.random() *6)+1;
//     return sides;
// }
// console.log(dice());

/* functions with arguments */
// function multiplyNumbers(a, b){
//     return a*b;
// }
// console.log(multiplyNumbers(3,4));

/* average of 3 numbers*/
// function findAverage(a, b, c) {
//     return (a + b + c) / b;
// }
// console.log(findAverage(4, 5, 6));

/* create a function that prints the multiplication table of a number*/
// function printMultiplicationTable(num) {
//     for (var i=1;i<=10;i++) {
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }
// printMultiplicationTable(7);

/*create a function that returns the sum of numbers from 1 to n*/
// function sumofNumber(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++){
//         sum  += i;
//     }
//     return sum;
// }
// console.log(sumofNumber(9));

/* create a function that return the concatenation of all strings in an array. */
// function concatStrings(arr) {
//     let strConcat="";
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "string"){
//             strConcat += arr[i];
//         } else {
//             throw new Error("Array must contain only string values");
//         }
//     }
//     return strConcat;
// }
// console.log(concatStrings(['H','e','l','l','o','W','o','r','l','d']));

/* Create a function called `rangeOfNumbers` that takes two parameters: `start` and `end`. The function should return an arraytry {try { */
/* Create a function called `rangeOfNumbers` that takes two parameters: `start` and `end`. The function should return an array containingtry {*/
/* Create a function called "addKeyAndValue" that takes an object and a key name as arguments and adds the provided key with its value*/
/* Create a function called `range` that takes two arguments: start and end. The function should return an array with all numbers between the start*/
/* Create a function called `range` that takes two arguments: start and end. The function should return an array with all integers between the start*/
/* Create a function called `range` that takes two arguments: start and end. The function should return an array with all the integers between the*/
/* Create a function called `rangeOfNumbers` that takes two parameters: `start` and `end`. The function should return an array containingtry {*/
/* Create a function called "addKeyAndValue" that takes an object and a key name as arguments and adds the provided key with its valuetry {*/
/* Create a function called `range` that takes two arguments: start and end. The function should return an array with all numbers between the start*/
/* Create a function called sortArray that takes an array as input and returns the sorted version of it using the built-in .sort() methodtry {*/
/* Create a function called `rangeOfNumbers` that takes two parameters: `start` and*/

// const numbers = [2, 4, 6, 8];
// numbers.forEach((num)=>{
//     console.log(`The square of ${num} is ${num**2}`);
// });

// let str = ["hi", "hello", "byt", "!"];

// function concat(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i ++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// function rangeOfNumbers(start, end) {
//     var numbers = [];
//     while (start <=end) {
//         numbers.push(start);
//         start++;
//     }
//    return numbers;
// }

// console.log(rangeOfNumbers(1,9));

// let sum = function (a, b) {
//     return  a + b;
// }
// console.log(sum(5, 7));

// sum = function () {
//     let a = 5;
//     let b = 3;
//   return a + b;
// };
// console.log(sum());

/* higher order function */
// function multipleGreet(func, count) {
//     for (let a = 0; a<count; a++) {
//         func();
//     }
// };

// let greet = function () {
//     console.log("Hello");
// };
// multipleGreet(greet, 4);

// function multipleGreet2(func, count) {
//   for (let a = 0; a < count; a++) {
//     func("hello Jeewan");
//   }
// }

// multipleGreet2(console.log, 4);

// function multipleGreet3(func, count) {
//     for (let a = 0; a<count; a++) {
//         func();
//     }
// };

// multipleGreet2(function(){console.log("namaste")}, 4);

// let odd = function (n) {
//     console.log(!(n % 2 == 0));
// };
// odd(7);

// let even = function (n) {
//   console.log(n % 2 == 0);
// };
// even(7);

// function oddOrEven(request) {
//     if (request == "odd") {
//         let odd = function (num) {
//             console.log(!(num % 2 == 0));
//         }
//         return odd;
//     } else if (request == "even") {
//         let even = function(num){
//             console.log((num % 2 == 0));
//         }
//         return even;
//     } else {
//         console.log("wrong request");
//     }
// }
// let request = "even";
// if (request == "odd" || request == "even"){
//     let num = 7;
//     let checkNum = oddOrEven(request)(num);
// } else {
//     console.log("Invalid Request");
// }
// console.log();
// console.log(oddOrEven("even"));

// let fun = oddOrEven(request);
// fun(5);

// fun(8);

//console.log(oddOrEven(request)(7));

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};

let x = calculator.add(3,4);
console.log(x);

let y = calculator.sub(8, 7);
console.log(y);

let z = calculator.mul(6,9);
console.log(z);

const calculator1 = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
};

let x1 = calculator1.add(3, 4);
console.log(x);

let y1 = calculator1.sub(8, 7);
console.log(y);

let z1 = calculator1.mul(6, 9);
console.log(z);


