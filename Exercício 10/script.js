import { adicionarItem, listarItens } from "./lista.js";

let inputNomeItem = document.querySelector(".inputNomeItem");
let inputPrecoItem = document.querySelector(".inputPrecoItem");
let botaoAdicionar = document.querySelector(".buttonAdicionar");

botaoAdicionar.addEventListener("click", () => {
    adicionarItem(inputNomeItem.value, inputPrecoItem.value);
    inputNomeItem.value = "";
    inputPrecoItem.value = "";
})

window.addEventListener('load', () => {
    listarItens();
})