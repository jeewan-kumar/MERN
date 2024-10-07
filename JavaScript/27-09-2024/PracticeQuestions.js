// write a javascript function that returns array elements larger than a number.

let arr1 = [1,6,8,5,6,3,8,9,10,12];
let key1 = 5;

for (let index = 0; index < arr1.length; index++) {
   if(arr1[index]>key1){
    console.log(arr1[index]);    
   }
    
}


//writet a javascript function to etract unique characters from a string.

let str2 = "abcdabcdefgggh";

function getUnique(str2) {
    let ans = '';
    for (let index = 0; index < str2.length; index++) {
        let currChar = str2[index];
        if(ans.indexOf(currChar)==-1)  {
            ans+=currChar;
        }     
       
    }
    return ans; 
    
}

console.log(getUnique(str2));




//write a javascript functio that accepts a list of country names as input and returns the longest country name as output.
let country = ['Australia', 'germany', 'united states of america']

function largestName(country) {
    let temp = "";
    for (let index = 0; index < country.length; index++) {
       
        if(country[index]>temp){
             temp = country[index];
        }
         
     }
     return temp;
}

console.log(largestName(country));




//write a js function to count the number of vowels in a string argument.
 let str4 = "Jeewan kumar Sahu"

 function countVowels(str4) {
     let count = 0;
    for (let index = 0; index < str4.length; index++) {
        if(str4.charAt(index) == 'a' || str4.charAt(index) == 'e' || str4.charAt(index) == 'i' || str4.charAt(index) == 'o' || str4.charAt(index) == 'u') {
            count ++;
        }
    }
    return count;
    
 }

 console.log(countVowels(str4));
 





//write a js functions to generate a random number within a rage (start, end).
function random(start, end) {
    console.log(Math.floor(Math.random()*(end - start))+start);   
}

random(1, 10);