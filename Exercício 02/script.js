let botao = document.querySelector(".button");
let base = document.querySelector(".base");
let expoente = document.querySelector(".expoente");
let body = document.querySelector("body");

let calcularPotencia = (base, expoente) => Math.pow(base, expoente);

botao.addEventListener("click", () => {
    let resultado = calcularPotencia(base.value, expoente.value);
    let paragrafo = document.createElement("p");
    paragrafo.appendChild(document.createTextNode(resultado));
    body.appendChild(paragrafo);
});