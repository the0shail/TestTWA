import { parse } from "./util/func.js";

const query = window.location.search;
let params = parse(query)

try {
    const content = document.getElementById("content")
    content.textContent = `Hello ${params.username}`
} catch (e){

}
// .innerText = `Hello ${params.username}!`