//Qs for the given string: let msg = "help!"; trime it & convert to uppercase.

let msg = "help!";
console.log(msg.trim().toUpperCase());

//Qs for the string -> let name = "ApnaColleage", predict the output for following;
let names = "ApnaCollege";
console.log(names.slice(4,9));
console.log(names.indexOf("na"));
console.log(names.replace("Apna","Our"));

//Qs Separate the "Collage" part in above string & replace 'I' with 't' in it.
let name = 'college';
console.log(names.slice(4).replace('l','t'));

//Qs for the given start sate of an array, change it to final from using methods.
let start = ['january','july','march','august'];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");


console.log(start)