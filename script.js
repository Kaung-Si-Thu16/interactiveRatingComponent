// for (let i = 0; i < buttons.length; i++) {
//     let clickedBtn = buttons[i].item
//     clickedBtn.addEventListener("click", function(e) {

//         let clickedId = e.target.dataset.num;
//         buttons.find(button => button.id == clickedId).clicked = true;
//         let exceptBtn = buttons.filter(button => button.id != clickedId)
//         exceptBtn.map(e => e.clicked = false)
//         console.log(buttons)
//     })
// }
// const clickedBtn1 = () => {
//     button1.name = true
//     console.log(button1.name);
// }

// const clickedBtn2 = () => {
//     console.log(button2.name);
//     button2.name = "true"

// }

// const clickedBtn3 = () => {
//     console.log(button3.name);
//     button3.name = "true"

// }

// const clickedBtn4 = () => {
//     console.log(button4.name);
// }

// const clickedBtn5 = () => {
//     console.log(button5.name);
// }

const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");

const buttons = [
    { item: button1, id: 1, clicked: false },
    { item: button2, id: 2, clicked: false },
    { item: button3, id: 3, clicked: false },
    { item: button4, id: 4, clicked: false },
    { item: button5, id: 5, clicked: false },
];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].item.addEventListener("click", function(e) {
        let clickedNum = buttons[i].item.dataset.num;
        if (buttons[i].clicked == false) {
            e.target.style.backgroundColor = "var(--Orange)";
            e.target.style.color = "white";
            buttons[i].clicked = true;
            let exceptBtn = buttons.filter(button => button.id != clickedNum)
            exceptBtn.map(except => {
                except.clicked = false
                except.item.style.backgroundColor = "hsl(0, 0%, 23%)";
                except.item.style.color = "var(--LightGrey)";
            })

        } else {
            e.target.style.backgroundColor = "hsl(0, 0%, 23%)";
            e.target.style.color = "var(--LightGrey)";
            buttons[i].clicked = false;
        }
    })
}

const showAndHide = () => {

    let clickedBtn = buttons.find(button => button.clicked == true);

    const selectionText = document.querySelector(".selectionText");

    if (clickedBtn) {
        const mainPage = document.querySelector(".container");
        mainPage.style.display = "none";

        const thankYouPage = document.querySelector(".container2");
        thankYouPage.style.display = "flex";

        const text = document.createTextNode(`You selected ${clickedBtn.id} out of 5`);

        selectionText.append(text);
    }
}