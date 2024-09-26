
console.log(`Print all odd numbers(1 to 15)`);

for(let i =1 ;i<=15 ; i++ ){
    if(i%2!=0){
        console.log(i," ");
        
    }
} 

console.log(`Print all even number (2 to 10)`);


for(let i =2 ;i<=10 ; i++ ){
    if(i%2==0){
        console.log(i," ");
        
    }
} 

console.log(`Print the multiplication table for 5`);

for(let i = 1; i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
    
}


//Favorite Movie

// let favMovie= 'avtar';
// let guess = prompt('guess the favorite movie: ');
// while ((favMovie!=guess) && (guess !='quit')) {
//     console.log("wrong");
//     guess= prompt("wrong guess. please try again");
    
// }
// if(favMovie == guess ){
//     console.log("congrats!");
// } else {
//     console.log("You quit");
    
// }


//Loop with arrays

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for(let i = 0;i<=fruits.length-1;i++){
    console.log(i+1, fruits[i]);
    
}

//Nested Array
let heroes = [['ironman','spiderman','thor'],['superman','wonder woman', 'flash']]
for(let i = 0;i<=heroes.length-1;i++){
    for(let j = 0;j<=heroes[i].length-1;j++){
        console.log(heroes[i][j]);
        
    }
}

// For of Loop

for(fruit of fruits){
    console.log(fruit);
    
}

for(char of 'jeewan'){
    console.log(char);
    
}

//nested for of loop
for(list of heroes){
    for(hero of list){
        console.log(hero);
        
    }
}