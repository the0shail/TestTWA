// import "./registrated.js"
// import {parse} from "./util/func";

const WebApp = window.Telegram.WebApp;

WebApp.expand()

WebApp.MainButton.textColor = "#fff"
WebApp.MainButton.color = "#2cab37"


let buttons = document.querySelectorAll(".btn");

let bucket = {}

buttons.forEach(button => {
    let itemNumber = button.getAttribute("data-list-number");

    console.log(itemNumber)

    button.addEventListener("click", () => {
        button.setAttribute("open", "");

        let {plus, minus, counter, i} = createButton(button);

        plus.addEventListener("click", () => {
            i++;
            counter.textContent = i;

            bucket[itemNumber] = i;

            console.log(bucket)
        })


        minus.addEventListener("click", () => {
            i--;
            counter.textContent = i;
            bucket[itemNumber] = i;

            if (i <= 0) {
                minus.remove();
                plus.remove();
                counter.remove();
                button.textContent = "Add";
                button.removeAttribute("open");
                delete bucket[itemNumber];
            }
            console.log(bucket)
        })


        if (bucket == {}) WebApp.MainButton.hide();
        else {
            WebApp.MainButton.setText(`Вы выбрали товаров ${bucket.length}`);
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


function createButton(elem) {
    let i = 1;
    elem.textContent = ''
    let divElement = document.createElement("div");
    divElement.classList.add("flex", "justify-center");
    let plus = document.createElement("button");
    let minus = document.createElement("button");
    minus.classList.add("text-white", "uppercase", "text-xl", "font-bold", "rounded-lg", "bg-red-500", "text-center", "w-[40px]", "h-[40px]", "active:bg-red-600", "mr-1");
    plus.classList.add("text-white", "uppercase", "text-xl", "font-bold", "rounded-lg", "bg-green-500", "text-center", "w-[40px]", "h-[40px]", "active:bg-green-600");
    minus.textContent = "-"
    plus.textContent = "+"

    divElement.appendChild(minus);
    divElement.appendChild(plus);

    let counter = document.createElement('span');
    counter.classList.add("top-0", "right-2", "lowercase", "bg-orange-500", "rounded-full", "flex", "justify-center", "text-lg", "text-white", "items-center", "font-bold", "absolute", "h-[30px]", "w-[30px]")
    counter.textContent = 1

    let parent = elem.parentNode;

    parent.appendChild(divElement)
    parent.appendChild(counter)

    return {plus, minus, counter, i}
}

// <div className="flex justify-center">
//     <button class="text-white uppercase text-xl font-bold rounded-lg bg-red-500 text-center w-[40px] h-[40px] active:bg-red-600 mr-1">-</button>
//     <button class="text-white uppercase text-xl font-bold rounded-lg bg-green-500 text-center w-[40px] h-[40px] active:bg-green-600">+</button>
// </div>






