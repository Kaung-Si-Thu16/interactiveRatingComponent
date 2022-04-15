const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");

const buttons = [button1, button2, button3, button4, button5];

const clickedBtn1 = () => {
    console.log(button1.name);
}

const clickedBtn2 = () => {
    console.log(button2.name);
}

const clickedBtn3 = () => {
    console.log(button3.name);
}

const clickedBtn4 = () => {
    console.log(button4.name);
}

const clickedBtn5 = () => {
    console.log(button5.name);
}

const gg = () => {
    const mainPage = document.querySelector(".container");
    mainPage.style.display = "none";

    console.log("Hello World")
}