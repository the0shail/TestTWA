// import "./registrated.js"
// import {parse} from "./util/func";

const WebApp = window.Telegram.WebApp;

WebApp.expand()

WebApp.MainButton.textColor = "#fff"
WebApp.MainButton.color = "#2cab37"

let item = "";
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (WebApp.MainButton.isVisible) WebApp.MainButton.hide();
        else {
            let list_number = item.getAttribute("data-list-number");
            WebApp.MainButton.setText(`Вы выбрали товар ${list_number}`);
            item = list_number;
            WebApp.MainButton.show();
        }
    })
})

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    WebApp.sendData("Hello world")
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${WebApp.initDataUnsafe.user.first_name}`;

usercard.appendChild(p);







