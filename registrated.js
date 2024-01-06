import { parse } from "./util/func.js";

const query = window.location.search;
let params = parse(query)

const content = document.getElementById("content")
content.textContent = `Hello ${params.username}`
// .innerText = `Hello ${params.username}!`