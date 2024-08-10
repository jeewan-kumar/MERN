let abc = document.createElement("p");
abc.innerText="Hello World!";
document.querySelector('body').append(abc);
abc.className = "red";

/* ******** ***** ******* ******* *** */
let abc1 = document.createElement("h3");
abc1.innerText = "i'm a blue h3";
// document.body.append(abc1);
document.querySelector("body").append(abc1);
abc1.classList.add("blue");

/* ******** ***** ******* ******* *** */
let div = document.createElement("div");
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "i'm in a div";
p.innerText = "me too!";

div.append(h1);
div.append(p);
div.classList.add("box");

document.querySelector("body").append(div);

/* ******** ***** ******* ******* *** */
let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "click me";
document.body.append(input);
document.body.append(button);

button.classList.add("box");

/* ******** ***** ******* ******* *** */

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


/* ******** ***** ******* ******* *** */

let btn = document.querySelector("#btn");
btn.classList.add("button");

/* ******** ***** ******* ******* *** */

let dom = document.createElement("h1");
dom.innerHTML = "<u>DOM Practice</u>";
document.body.append(dom);

/* ******** ***** ******* ******* *** */
let page = document.createElement("p");
page.innerHTML = "Self <b>practice </b>";
document.body.append(page);

/* ******** ***** ******* ******* *** */



