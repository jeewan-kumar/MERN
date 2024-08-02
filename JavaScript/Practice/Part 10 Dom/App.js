// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert('You clicked the button!');
// };

//btn.onclick = createButton;

// function  createButton() {
//    const newBtn = document.createElement("BUTTON");
//    newBtn.textContent="Click me";
//    newBtn.setAttribute("id","myButton");
//    newBtn.className ="myButton";
//    document.body.append(newBtn);
//    return newBtn;
// }

let btn1 = document.querySelectorAll("button");

for (btn of btn1) {
    btn.onclick = function () {
        alert("hello");
        this.style.backgroundColor= "red"
    }
    btn.onmouseenter = function () {
        console.log("Mouse entered!");          
        this.style.color = "blue";
    }
}


