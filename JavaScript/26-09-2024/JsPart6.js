function printPoem() {
    console.log("Twinkle Twinekl, little start");
    console.log("How i wonder what you are");    
}

printPoem();

//create a function to roll a dice & alwasy display the value fo the dice (1 to 6).

function dice (){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);  
}     
dice();

//Create a function that gives us the average of 3 numbers.

function avg( a, b, c){
    let average = (a+b+c)/3;
    console.log(average); 
    console.log(Math.floor(average));       
}

avg(5,6,8);

//Create a function that parints the multiplication table of a number.

function table(table){
    for (let index = 1; index <= 10; index++) {
        console.log(`${table} * ${index} = ${table*index}`);      
    }
}

table(5);


//create a function that returns the sum of numbers from 1 to n

function sumOfN(start, end) {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum+=index;
        
    }
    return sum;
}

console.log(sumOfN(1,10));

//create a function that retruns the concatenation of all strings in an array.

function concat(array){
    let result="";
   for (let index = 0; index < array.length; index++) {
    result+=array[index];
   }
   return result;   
}

let arr = ['j','e','e','v','a','n'];
console.log(concat(arr));


//higer order function 
function multiple(greet, n) {
    for(let i = 1;i<=n;i++){
        greet();
    }    
}

let greet = function(){
    console.log("Hello");    
}

multiple(greet, 5);

multiple(function() {console.log("namaste")},5);