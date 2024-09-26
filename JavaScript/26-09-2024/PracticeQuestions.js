// write a js program to delte all occurrences of element 'num' in a giben array.

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2;

// for(let i = 0; i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


//write a js program to find the no of digits in a number;

let number = 287152;
// let count = 0;
// while (number > 0) {
//     count++;
//     number= Math.floor(number/10);
// }
// console.log(count);

//write a js program to find the sum of digits in a number.
let sum = 0;
while (number>0) {
   let rem = number%10;
    sum= sum + rem;
    number=Math.floor(number/10);
}
console.log(sum);


//print the factorial of a number n.

let n = 7;
let m = 1;
for(let i = 1; i<=n;i++){
    m*=i;
}
console.log(m);


//find the largest number in a array with only positive numbers.

let arr = [-2,8,7,55,65,85,-100];
let tem = 0;

for(let i = 0; i<=arr.length-1;i++){
    if(arr[i]>tem){
        tem = arr[i];
    }
}
console.log(tem);


//create a program that generates a random number representing a dice roll.
let random = Math.floor(Math.random()*6)+1;
console.log(random);

//Create an object representing a car that stores the following properties for the car: name, model, color.
let car = {
    name:'car',
    model: 'car1',
    color: 'blue'
}

console.log(car.name);

//creae an objec person with their name, age and city.
let person= {
    name : 'rone',
    age : 25,
    city : 'delhi'
}

person.city = 'New York';
person.country = "united states";

console.log(person);


