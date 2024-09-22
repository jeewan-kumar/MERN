//Qs1. Create a number variable num with some value.

let num = 50;
if(num%10==0){
    console.log('good');
} else {
    console.log('bed');
}

//Qs2. Take the user's name & age as input using prompts.
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// alert(`${name} is ${age} years old`);

//Qs3. write a switch statement to print the months in  a quarter.
let quarter = 3;
switch(quarter){
    case 1: 
    console.log("January, February, March");
    break;
    case 2: 
    console.log("April, May, June");
    break;
    case 3: 
    console.log("July, August, September");
    break;
    case 4: 
    console.log("October, November, December");
    break;

}

//Qs4. A string is a golden string if it starts with the character 'a' or 'A' and has a total length greater than 5.
let str = 'apples'

if((str[0]=== 'a'||str[0]==='A') && (str.length>5)) {
    console.log("golden")
} else {
    console.log("not golden")
}


//Qs5. Write a program to find the largest of 3 numbers.

let a =45, b = 100, c =88;

if(a>b && a>c){
    console.log(a+" A is the largest number");
} else if(b>a && b>c){
    console.log(b+" B is the largest number");
} else {
    console.log(c+" C is the largest number")
}

//Qs6. Write a program to check if 2 numbers have the same last digit.

let ab =  32, ba = 47852;

if(ab[ab.length-1]==ba[ba.length-1]){
    console.log("last digit is same")
} else {
    console.log("last digit is not same");
}