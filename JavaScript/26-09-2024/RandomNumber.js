const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

// while(true){
//     if(guess=="quit"){
//         console.log("User quit");
//         break;        
//     }
//     if(guess == random){
//         console.log("You are right! congrates! random number was", random);
//         break;
//     } else {
//         guess = prompt("your guess was wrong. please try again");
//     }
// }

while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;        
    }
    if(guess == random){
        console.log("You are right! congrates! random number was", random);
        break;
    } else if(guess < random) {
        guess = prompt("your guess was too  small. please try again");
    } else {
        guess = prompt("your guess was to large. please try again");
    }
}