let n = "Jeewan Kumar Sahu";

console.log("\n Q_1 Declare your name as a string and print its length in js.");
console.log("Name Length: ",n.length);

console.log("\n Q_2 Declare your first name as a string and print its first character in js.");
console.log("First character: ",n[0]);

console.log("\n Q_3 Declare your first name as a string and print its last character in js.");
console.log("Last character: ",n[n.length-1]);

console.log("\n Q_4 Create a traffic light system that shows what to do based on color.");
let signal = "green";

if(signal=="red"){
    console.log("stop");
} else if(signal == "yellow"){
    console.log("Slow Down");
} else if(signal == 'green') {
    console.log("Go")
} else {
    console.log("Invalid option");
}


console.log("\n Q_5 Create a system to calculate propcorn prices based on the size customer asked for");

let size = 'm';

if(size=="xl"){
    console.log("Price is Rs. 250");
} else if(size == "l"){
    console.log("Price is Rs. 200");
} else if(size == 'm') {
    console.log("Price is Rs. 100")
} else if(size == 's') {
    console.log("Price is Rs. 50");
}

console.log("\n Q_6 A \"good string\" is a string that starts with the letter 'a' & has a length>3. Write a program to find if a string is good or not. ");

let goodString = 'bpple';

if(goodString[0]=='a'){
    if(goodString.length>=3){
        console.log("Good String");
    } else {
        console.log("Not good string")
    }
} else {
    console.log("Not good string");
}