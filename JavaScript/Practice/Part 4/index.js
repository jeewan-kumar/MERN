/* fro */
// for (let i = 0; i <= 5; i++) {
//    console.log(i); // 0,1,2,3,4,5
// }

/* print all odd numbers*/

// for (let i = 1; i <= 15; i++){
//    if (i % 2 !== 0) {
//       console.log(i);
//    }
// }
/*Bacwards*/

// for (let i = 15; i >= 0; i--){
//    if (i % 2 ===  0) {
//       console.log(i);
//    }
// }

/* Print all even numbers(2 to 10)*/
// for (let n = 1; n <= 20; n++){
//    if (n % 2 === 0) {
//       console.log(n + ' is an even number');
//    }
// }

/* Backword */
// for (let j = 19; j > 0; j--){
//    if (j % 2 === 0) {
//       console.log(j + " is an even number");
//    }
// }

/* print the multiplication table for 5 */
// for (let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ` + 5 * i);
// }
// let n = 5;
// for (let i = n; i <= n * 10; i = i + n){
//    console.log(i);
// }

/* Fizzbuzz */
// for (let i=1; i<=100; i++){
//     let output = '';
    
//    if(i % 3 == 0) output += 'Fizz';
//    if(i % 5 ==  0) output += 'Buzz';
    
//     if(!output) output = i;
    
//     console.log(output);
// }

// const favMovie = "3idiots"
// let guess = prompt("Guess my favorite movie")
// //let movieList = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "The Good, The Bad and The Ugly", "Schind"]
// while ((guess != favMovie) && (guess != "quit")) {
//    alert('Wrong! Try again');
//    guess = prompt("Guess my favorite movie");
// }
// if (guess == "quit ") {
//    alert("You quit!");
// } else {
//    alert("Correct! My favorite movie is 3 Idiots.");
// }

/* Loops with Arrays*/
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//    //document.write(i, fruits[i]);
//    console.log(i, fruits[i]);
// }

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]]
// for (let j = 0; j<heroes.length;j++) {
//     for (let i = 0; i < heroes[j].length; i++ ) {
//         console.log(`Hero ${j+1}: ${heroes[j][i]}`)
//     }
// }

// let student = [["aman",1951],["shradha",40.4],["vishal",87]]
// function sortByName(student){
//     return student[1];
// }
// function sortByRollNo(student){
//     return student[2];
// }
// console.log(sortByName(student));
// console.log(student.sort(sortByRollNo));
// printSuperheroes(heroes);
// function printSuperheroes() {
//     let superheroes = document.getElementById("superheroes").value;
//     let arr = superheroes.split(", ");
//     for (let i = 0 ; i < arr.length; i++){
//         document.write(arr[i]+ "<br>");
//     }
// }

let todo = [];
let req = prompt("please enter your request");

while (true) {
    if ((req == "quit")) {
        console.log("quitting app");
        break;
    }
    if (req == "list") {
        console.log("-----------");
        for (task of todo) {
            console.log(task);
        }
        console.log("-----------");
    } else if (req == "add") {
        let task_name = prompt("Please Enter Task Name you want to add: ");
        todo.push(task);
        console.log("task add");
    } else if (req == "delete") {
        let  index = parseInt(prompt("Enter the number of the task that you want to delete"));
        if (!isNaN(index)) {
            todo.splice(index,  1);
            console.log("Task Deleted!");
        } else {
            console.log("Invalid Input");
        }
    } else {
        console.log("wrong request");
    }
    req = prompt("please enter your request");

}