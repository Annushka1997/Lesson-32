"use strict";


// Առաջին հարցի պատասխանը

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
let getDiv1X = parseFloat(div1.style.left);
let getDiv1Y = parseFloat(div1.style.top);
let getDiv2X = parseFloat(div2.style.left);
let getDiv2Y = parseFloat(div2.style.top);
let count = 1;

div1.addEventListener("touchmove", (e) => {
    if (getDiv1X >= getDiv2X && getDiv1X <= (getDiv2X + 100) && (getDiv1Y + 100) >= getDiv2Y && (getDiv1Y + 100) <= (getDiv2Y + 100) || getDiv1X >= getDiv2X && getDiv1X <= (getDiv2X + 100) && getDiv1Y <= (getDiv2Y + 100) && getDiv1Y >= getDiv2Y || (getDiv1X +100) >= getDiv2X && (getDiv1X + 100) <= (getDiv2X + 100) && (getDiv1Y + 100) >= getDiv2Y && (getDiv1Y + 100) <= (getDiv2Y + 100) || (getDiv1X +100) >= getDiv2X && (getDiv1X + 100) <= (getDiv2X + 100) && getDiv1Y <= (getDiv2Y + 100) && getDiv1Y >= getDiv2Y) {
    changeColor();
    } 
    getDiv1X = parseFloat(div1.style.left);
    getDiv1Y = parseFloat(div1.style.top);
    e.target.style.top = `${e.touches[0].clientY - 50}px`;
    e.target.style.left = `${e.touches[0].clientX - 50}px`;
});

div2.addEventListener("touchmove", (e) => {
    if (getDiv1X >= getDiv2X && getDiv1X <= (getDiv2X + 100) && (getDiv1Y + 100) >= getDiv2Y && (getDiv1Y + 100) <= (getDiv2Y + 100) || getDiv1X >= getDiv2X && getDiv1X <= (getDiv2X + 100) && getDiv1Y <= (getDiv2Y + 100) && getDiv1Y >= getDiv2Y || (getDiv1X +100) >= getDiv2X && (getDiv1X + 100) <= (getDiv2X + 100) && (getDiv1Y + 100) >= getDiv2Y && (getDiv1Y + 100) <= (getDiv2Y + 100) || (getDiv1X +100) >= getDiv2X && (getDiv1X + 100) <= (getDiv2X + 100) && getDiv1Y <= (getDiv2Y + 100) && getDiv1Y >= getDiv2Y) {
        changeColor();
    } 
    getDiv2X = parseFloat(div2.style.left);
    getDiv2Y = parseFloat(div2.style.top);
    e.target.style.top = `${e.touches[0].clientY - 50}px`;
    e.target.style.left = `${e.touches[0].clientX - 50}px`;
});


function changeColor() {
    if (count % 2 != 0) {
        div1.style.background = "purple";
        div2.style.background = "blue";
    } else {
        div1.style.background = "blue";
        div2.style.background = "purple";
    }
    count++;
}

// Երկրորդ հարցի պատասխանը

const div3 = document.querySelector(".div3");
let offsetX;
let offsetY;

div3.addEventListener("dragstart", function (event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;

});

div3.addEventListener("dragend", function (event) {
    div3.style.top = event.pageY - offsetY + "px";
    div3.style.left = event.pageX - offsetX + "px";
});
