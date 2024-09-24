//WaJP to get first n elements of an array. [N can be any positive number].
let arr = [7,9,0,-2];
// arr.splice(-1,1);
// console.log(arr);


//WAJP to get the last n elements of an array. [N can be any postive number].
// arr.splice(0,1);
// console.log(arr);

//WAJP to check whether a string is blank or not.
let str = [" "];
if(str.length == 0 )
    console.log("String is empty");
else
    console.log('string is not empty');

// wAJP to test wheather the character at the given (character index is lower case).
let char = 'mohan';
if(char[0]>='a' && char[0] <='z' )   
    console.log("lower case");
else
    console.log('upper case');

if(char[0] === char[0].toLowerCase())
    console.log("lower case");
else
    console.log('upper case');

//WAJP to strip leading and trailing spaces from a string.

let originalString = " Hello Jeewan ";
let striippedString = stripSpaces(originalString);

function stripSpaces(input) {
    return input.trim();
    
}

console.log(originalString);
console.log(striippedString);

// let strs = prompt("Please enter a string");
// console.log(`original String = ${strs}`);
// console.log(`string without spaces = ${strs.trim()}`);


//WAJP to check if an element exists in an array or not.
let list = [45,65,85,95];
let key = 95;

function find(list, key) {
    for(let i = 0; i<=list.length-1;i++){
        if(list[i]===key){
            return true;  
        }          
    }
    return false;
    
}
console.log(find(list,key));


if(list.indexOf(key)!=-1){
    console.log("Element exists in array");    
} else {
    console.log("Element doesn't exist in array");
    
}
     



let strs = "Hello World";
console.log(strs.includes("World", post)); // Output: true


    
     
    