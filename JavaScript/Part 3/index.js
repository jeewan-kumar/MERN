// let str = " jeewan  ";
// let st = " ku mar ";
// console.log(str.trim(), st.trim());

// let password = prompt("set your password: ");
// console.log(password.trim());

// let msg = "   Hello World    ";
// console.log(msg.toLowerCase());
// console.log(msg.toLowerCase().trim());

// console.log(msg.toUpperCase());
// console.log(msg.toUpperCase().trim());

//let str = "iloveCoding";
// console.log(str.slice(5));
// console.log(str.slice(-3));
// console.log(str.slice(2, 7));
// console.log(str.slice(5, str.length));
// console.log(str.slice(str.length - 3));
// console.log(str.split("o"));

// console.log(str.replace("love", "do"));

// console.log(str.repeat(3));

// let msg = "  help! ";
// console.log(`${msg}`.trimStart());
// console.log(` ${msg} `.trimEnd());
// console.log(msg.toUpperCase().trim());

//let msg = "ApnaCollege";
// console.log(msg.startsWith("Apn"));
// console.log(msg.startsWith("apn"));
// console.log(msg.endsWith("ge"));
// console.log(msg.includes("g"));
// console.log(msg.slice(4, 9));
// console.log(msg.indexOf("na"));
// console.log(msg.lastIndexOf("a"));
// console.log(msg.replace("Apna","Ajay"));

//console.log(msg.slice(4).replace('l', 't').replace('l','t'));

/*Array*/
// let str = ["jeewan", "is", "awesome"];
// console.log(str);
/*add element to array*/
// str[3] = "developer";
// console.log(str);
// console.log(str.length);
// console.log(typeof str);

//accessing elements of array
// console.log(str[0]);
// console.log(str[1]);

//array methods
//push() : add element at last
// str.push("programmer");
// console.log(str);

// let marks = [99, 85, 93, 76, 62];
// let names = ['adity', 'ajay', 'jeevan'];
// let info = ["aman", 25, 6.1];
// let newAll = [];
// console.log(marks);
// console.log(names);
// console.log(info);
// console.log(newAll);

// let fruits = ["apple", "banana", "orange"];
// fruits[0] = "grape";
// console.log(fruits);
// console.log(fruits.push("mango"));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// fruits.unshift("kiwi");
// console.log(fruits);
// console.log(fruits.shift())
// console.log(fruits)

// let start = ["I am jeewan","I love coding"];
// console.log(`${start[0]} ${start[1]}`);
// console.log(`This is a string with variable ${start[0]} and another one ${start[1]}`);
// let end = `This is my first program in javascript`;
// console.log(end);
// console.log(start.shift());
// console.log(start);

//let primary = ["red", "blue", "green"];
// console.log(primary[0].toUpperCase());
// console.log(primary[1].toLowerCase());
// console.log(primary.indexOf("blue"));
// console.log(primary.lastIndexOf("green"));
// console.log(primary.concat("yellow"));
// console.log(primary.indexOf("yellow"));
// console.log(primary);
// console.log(primary.indexOf("yellow"));
// console.log(primary);
// console.log(primary.includes("yellow"));
// console.log(!primary.includes("yellow"));

// console.log(primary.includes("yellow"));

/* concat*/
// let primary = ["red", "blue", "green"];
// let secondary = ["orange", "green", "purple"];
// console.log(primary.concat(secondary));
// console.log(primary + secondary);
// console.log(primary.reverse());
// console.log(primary.slice());
// console.log(primary.slice(2, 4));

/* slice*/

//let colors = ["red","blue","green","black","white" ];
// console.log(colors.sort());
// console.log(colors);
// console.log(colors.slice(2, 3));
// console.log(colors.slice(-2));

// console.log(colors.splice(4));
// console.log(colors.splice(0, 2));
// console.log(colors);
// console.log(colors.splice(0, "black", "gray"));
// console.log(colors);
// console.log(colors.splice(0,0, "blue", "gray"));
// console.log(colors);
// console.log(colors.splice(0, 1, "blue", "gray"));
// console.log(colors);
// console.log(colors.length);

/* sort */

// let nums = [5,3,8,9,1];
// nums.push(7)
// console.log(nums);
// console.log(nums.pop())
// console.log(nums);

// nums.unshift(-6)
// console.log(nums);
// console.log(nums.shift());
// console.log(nums);

/* shift and unshift */

/*sort*/
// let colors = ["red", "blue", "green", "black", "white"];
// console.log(colors.sort());

// let start = ['january', 'july', 'march', 'august'];
// console.log(start.splice(0, 2, "july","june"));
// console.log(start);

// let prog = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(prog.reverse().indexOf("javascript"));

// let arr = ['a', 'b', 'c'];
// let copy = arr;
// console.log(arr.push('f','g'));
// console.log(arr);
// console.log(copy);

// const arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.push(4, 5, 6));
// console.log(arr);

//let nums = [[1, 2], [3, 4], [4, 8]];
// console.log(nums);
// console.log(typeof (nums));
// console.log(nums.push([4, 5, 6]));
// console.log(nums.push)
// console.log(nums);

let arr = [['x', null, 'O'], [null, 'x', null], ['O', null, 'X']];
console.log(arr);
console.log(arr[0].splice(1,1,'O'))
console.log(arr);
