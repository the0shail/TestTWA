import { parse } from "./util/func.js";

const query = window.location.search;
let params = parse(query)

// const

// .innerText = `Hello ${params.username}!`