// import "./registrated.js"
// import {parse} from "./util/func";

const WebApp = window.Telegram.WebApp;

WebApp.expand()

WebApp.MainButton.textColor = "#fff"
WebApp.MainButton.color = "#2cab37"


let buttons = document.querySelectorAll(".btn");
let bucket = []

buttons.forEach((button, j) => {
    let itemNumber = button.getAttribute("data-list-number");

    button.addEventListener("click", () => {
        button.setAttribute("open", "");

        let {plus, minus, counter, count} = createButton(button);

        let foodName = button.parentNode.querySelector(".food_name").textContent;
        let foodPrice = button.parentNode.querySelector(".food_price").textContent;

        bucket.push({
            id: itemNumber,
            name: foodName,
            count: count,
            price: foodPrice
        });
        showContextMenu(bucket)

        plus.addEventListener("click", () => {
            count++;
            counter.textContent = count;
            bucket.forEach((value) => {
                if (value.id === itemNumber){
                    value.count = count;
                }
            })
            showContextMenu(bucket)
        })


        minus.addEventListener("click", () => {
            count--;
            counter.textContent = count;
            bucket.forEach((value) => {
                if (value.id === itemNumber){
                    value.count = count;
                }
            })

            if (count <= 0) {
                minus.remove();
                plus.remove();
                counter.remove();
                button.textContent = "Add";
                button.removeAttribute("open");
                bucket.forEach((value, index) => {
                    if (value.count === 0){
                        bucket.splice(index, 1);
                    }
                })
            }
            showContextMenu(bucket)
        })
    })
})

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    WebApp.sendData(bucket)
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${WebApp.initDataUnsafe.user.first_name}`;

usercard.appendChild(p);


function createButton(elem) {
    let count = 1;
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
    counter.textContent = count

    let parent = elem.parentNode;

    parent.appendChild(divElement)
    parent.appendChild(counter)

    return {plus, minus, counter, count}
}

function showContextMenu(obj){
    if (obj.length) {
        let quantity = 0
        obj.forEach(item => {
            quantity = quantity + item.count;
        })
        WebApp.MainButton.setText(`Вы выбрали товаров ${quantity}`);
        WebApp.MainButton.show();

    } else WebApp.MainButton.hide()

}

// <div className="flex justify-center">
//     <button class="text-white uppercase text-xl font-bold rounded-lg bg-red-500 text-center w-[40px] h-[40px] active:bg-red-600 mr-1">-</button>
//     <button class="text-white uppercase text-xl font-bold rounded-lg bg-green-500 text-center w-[40px] h-[40px] active:bg-green-600">+</button>
// </div>






