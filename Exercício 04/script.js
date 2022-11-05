let inputText1 = document.querySelector(".inputText1");
let inputText2 = document.querySelector(".inputText2");
let body = document.querySelector('body');
let botaoAchar = document.querySelector(".botaoAchar");

function acharOMaior(numeros) {
    let maior = numeros[0];
    for(let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        if(maior < n) {
            maior = n;
        }
    }
    return maior;
}

function acharOMenor(numeros) {
    let menor = numeros[0];
    for(let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        if(n < menor) {
            menor = n;
        }
    }
    return menor;
}

botaoAchar.addEventListener("click", () => {
    let arrayInput = inputText1.value.split(inputText2.value);
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    p.appendChild(document.createTextNode(`Maior: ${acharOMaior(arrayInput)} - `));
    p.appendChild(document.createTextNode(`Menor: ${acharOMenor(arrayInput)}`));
    body.appendChild(p, document.createElement('br'), p2);
})