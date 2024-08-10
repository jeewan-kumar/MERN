/* Foreach function*/
// let arr = [1, 2, 3, 4, 5]
// let student = [{
//     name: 'John',
//     age: 20
// }, {
//     name: 'Emily',
//     age: 18
// }];

// for (let i of arr) {
//     console.log(i);
// }

// function print(el) {
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function (el) {
//     console.log(el);
// });

// student.forEach(function (el) {
//   console.log(el);
// });

// student.forEach(function (el) {
//   console.log(el.age);
// });

/* Map function */

// let num = [1, 2, 3, 4, 5];
// let double = num.map((n) => n * 2);
//console.log(double);

// let student2 = [{
//     name: "John",
//     grade: "A"
// }, {
//     name: "Emily",
//     grade: "B+"
// }];

// let grades = student2.map((student) => student.grade);
// console.log(grades); // ["A","B+"]

/* Filter Function */

// let filterNum = num.filter((n) => n % 2 === 0);
// console.log(filterNum); // [2, 4]

// let filterStudent = student2.filter((student) => student.name[0] == 'E');
// console.log(filterStudent);

/* Reduce Function */

// let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // 15

// let totalGrade = grades.reduce((total, nextGrade) => total + nextGrade.charCodeAt(0), 0);
// console.log(totalGrade); // 69

/* Every function */
// let a = [1, 2, 3, 4, 5];
// let b = a.every((e) => e > 0);
// console.log(b); // true

// let c = a.every((e) => e%2== 0);
// console.log(c);

/* some function */
// let d = [1, 3, 5, 7, 9];
// let f = d.some((e) => e===5);
// console.log(f); // true

// let b = [1, 2, 3, 4, 5];
// let c = b.reduce((a, b) => (a + b));
// console.log(c); // 15

// let num = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
// let result = num.reduce((max, el) => {
//     if(el > max) return el;
//     else return max;
// }, num[0]);
// console.log("Max number is: " + result);

/* check if all numbers in our array are multiples of 10 or not*/
// let arr1 = [10, 20, 30, 40,  50];
// console.log(arr1.every(num => num % 10 === 0)); //true
 
/*creat a function to find min number in an array */

// let min = arr1.reduce((min, e) => {
//     if (e < min) return e;
//     else return min;
// });
// console.log(`Minimum value is ${min}`);

// function getmin(arr1) {
//     let min = arr1.reduce((min, e) => {
//       if (e < min) return e;
//       else return min;
//     });
//     return `The minimum value is ${min} `;
// }
// console.log(getmin(arr1));

