console.log("\n Q_6 A \"good string\" is a string that starts with the letter 'a' & has a length>3. Write a program to find if a string is good or not. ");

let goodString = 'apple';

if ((goodString[0] === 'a') && (goodString.length >= 3)){
    console.log("Good String");
} else {
    console.log("Not good string");
}

console.log("\n Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.");

let day = 5;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("Default value")
        break;
}