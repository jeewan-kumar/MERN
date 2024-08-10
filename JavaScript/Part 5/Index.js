/* Object literal */
// const studen ={
//     name: "jeewan",
//     age: 25,
//     city: "Dhaka"
// }

// console.log(studen);
// //accessing the property of an object using dot notation
// console.log("Name : "+studen.name)

// //Accessing the property of an object using bracket notation
// console.log("Age : "+studen["age"])

// //Adding a new property to the existing object
// studen.country= "India";
// console.log(studen);

// //Deleting a property from the object
// delete studen.city;
// console.log(studen);

// const item = {
//     price :100,
//     quantity: 2,
//     colors: [ 'red', 'blue']
// };

// if (item.price < 50){
//    console.log('Item is cheap');
// }else if(item.quantity >3 ){
//      console.log('Item is popular')
//  } else{
//      console.log('Item is moderate')
 
// }

// console.log(`The total cost of ${item.colors[0]} color is ${item.price}`);

// for ( let key in item ) {
//     console.log(`${key}: ${item[key]}`);
// }

/*
Outputs:
price: 100
quantity: 2
colors: red,blue
price: Item is cheap
red: red
blue: blue
*/

// const post = {
//     username: "jeewan__kumar",
//     content: "this is my #firestPost",
//     likes: 50,
//     reposts: 78,
//     tag: ["jeevan", "javascript"]
// };
// console.log(post);

// for (let i=0;i<post.tag.length;i++) {
//    console.log(`Tag: @${post.tag[i]}`);
// }

// let prop = "reposts";
// console.log(post[prop]);

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: 'e'
// }
// console.log(obj[1])
// console.log(obj.true)

/* object */
// const student = {
//     name: "Jeewan Kumar",
//     age: 36,
//     country: "India",
//     hobbies: {
//         sports: "Cricket",
//         music: "Playing Guitar"
//     },
//     showProfile() {
//         // this will refer to the object itself
//         console.log(`Name : ${this.name}`)
//         console.log(`Age : ${this.age}`)
//         console.log(`Country : ${this.country}`)
        
//         // accessing nested property using dot notation
//         console.log("Hobbies :")
//         console.log(`Sports : ${this.hobbies.sports}`)
//         console.log(`Music : ${this.hobbies.music}`)

//     }
// };
// console.log(student.showProfile());
// console.log(student);

// student.country = "bharat";
// console.log(student.showProfile());

/* object of objects */
// const students = [
//     {
//         name: "John Doe",
//         age: 25,
//         country: "USA"
//     },
//     {
//         name: "Jane Smith",
//         age: 30,
//         country: "Canada"
//     }
// ];
// console.log(students[1].name)

// for (let key in students){
//     console.log(`Student Name : ${students[key].name}`);
//     console.log(`Student Age : ${students[key].age}`);
// }

// function findStudentByName(arr, name){
//     for (let i=0;i<arr.length;i++){
//         if (arr[i].name === name){
//             return arr[i]
//         }
//     }
// };

// console.log(findStudentByName(students,"John Doe"));

// /* prototype chaining */
// function Person(){

// }

// Person.prototype.gender = "male";
// Person.prototype.eyecolor = "blue";

// function Student() {}

// // create an instance of student and person
// const john = new Student();
// john.name = "John Doe";
// john.grade = "A";

// const jane = new Person();
// jane.name = "Jane Doe";
// jane.country = "USA";

// console.log(john.__proto__ == Student.prototype); // true
// console.log(jane.__proto__ == Person.prototype);  // true
// console.log(john.__proto__.__proto__ == Person.prototype); //true

// /* inheritance */

// const employee = {
//     name: "Tom",
//     department: "IT"
// };

// Object.setPrototypeOf(employee, Person.prototype);

// console.log(employee.name);         // Tom
// console.log(employee.department);   // IT
// console.log(employee.gender);           // male


/* Object of Objects */
// const obj1 = {
//     aman: {
//         age: 25,
//         city: 'New York'
//     },
//     rahul: {
//         age: 30,
//         country: 'India'
//     }
// };
// console.log(obj1)
// console.log(obj1.aman.age)       // 25
// console.log(obj1.aman.city)      // New York

/* Array of objects */
// const arrObj = [
//     {
//         id: 1,
//         name: 'John',
//         email: 'john@gmail.com'
//     },
//     {
//         id: 2,
//         name: 'Jane',
//         email: 'jane@yahoo.com'
//     }
// ];
// console.log(arrObj[0].email)    // john@gmail.com

// /* Accessing nested object properties */
// console.log(arrObj[0]['name'])    // John
// console.log(arrObj[0].name)      // John

// /* Adding new property to an existing object in array of objects */
// arrObj[0].salary = 500;
// console.log(arrObj[0]);       // {id: 1, name: "John", email: "john@gmail.com", salary: 500}

// /* Deleting a property from an existing object in array of objects */
// delete arrObj[0].email;    // Removes the email property from first object

/* Math object */
// console.log(Math.PI);         // 3.141592653589793
// console.log(Math.E);          // 2.718281828459045
// console.log(Math.sqrt(16));   // 4
// console.log(Math.pow(2, 3));   // 8
// console.log(Math.floor(12.34)); // 12
// console.log(Math.ceil(12.34));  // 13
// console.log(Math.round(12.34)); // 12
// console.log(Math.max(5, 10, -2)); // 10
// console.log(Math.min(5, 10, -2)); // -2
// console.log(Math.random());    // Generates random number between 0 and 1 (excluding  1)
// /* String object */
// const str = "Hello World";
// console.log(str.length);               // 11
// console.log(str.toUpperCase());        // HELLO WORLD
// console.log(str.charAt(3));             // l
// console.log(str.indexOf("o"));           // 4
// console.log(str.lastIndexOf("o"));        // 9
// console.log(str.split(" "));              // ["H","e","l","l","o"," ","W","o","r","l","d"]
// console.log(str.substring(6, 11));        // World
// console.log(str.valueOf());                           // Hello World

// /* Date object */
// const now = new Date();
// console.log(now);// Thu Jan 01 2000 00:00:00 GMT+0300 (Moscow Standard Time)
// console.log(new Date().toLocaleString()); // 01.01.2000 00:00:00

// /* Array methods */
// const arr = [1,2,3,4,5];
// console.log(arr.push(6));   // 6
// console.log(arr);    // [1,2,3,4,5,6]

// console.log(arr.pop()); // 6
// console.log(arr);      // [1,2,3,4,5]

// const item = arr.shift();  // 1
// console.log(item);  // 1
// console.log(arr);  // [2,3,4,5]

// arr.unshift(0);   // Adds 0 at beginning of array
// console.log(arr);

/* Random Integers */
// let num = Math.random();
// num = num * 10;     // Multiply by  10 to get a decimal from 0-9
// console.log(Math.floor(num));  // Returns an integer from 0-9
// console.log(num = num + 1);       // Adding 1 gives us numbers from  1-10
// console.log(Math.floor(num));    // Now it returns integers from 1-10

// /* generate a random number between 1 and 100.*/
// let num1 = Math.random()*100 + 1;
// console.log(num1);

// const arr1 = ['apple', 'banana', 'orange'];
// const fruit = arr1[Math.floor(Math.random())];
// console.log(fruit);  // apple | banana | orange

// let num2 = Math.random();
// console.log('Random Number Between 0 - 1 : ', num2);

// const num3 = Math.round(num2);
// console.log('Random Integer Between 0 - 1 : ', num3);

// if (num3 < 0.5){
//     console.log("You're lucky!");
// } else {
//     console.log("Sorry, not so lucky this time.");
// }

/* user enters a max number & then tries to guess a random generated number betweeen 1 to max. */

let maxNum = prompt('Enter the maximum number:');
let random =  Math.floor(Math.random() * parseInt(maxNum)) + 1;
console.log(`The randomly generated number is ${random}`);

let attempts = 0;
while (true) {
    let userGuess = prompt('Enter your guess:');
    attempts++;
    if (userGuess == random) {
        alert('Congratulations! You guessed correctly in '+attempts+' attempt/s.');
        break;
    } else if (userGuess > random) {
        alert('Hint: Your guess is too high! Try again.')
    } else {
        alert('Hint: Your guess is too low! Try again.')
    }
};