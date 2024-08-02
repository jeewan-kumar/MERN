let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    secondHand.style.transform = `rotate(${second * 6}deg)`
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    hourHand.style.transform = `rotate(${hour*30+0.5+minute}deg)`;
}, 1000)


