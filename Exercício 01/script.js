let botao = document.querySelector(".button");



function gerarNumero() {
    let numLi = document.createElement("li");
    let lu = document.querySelector(".lista");
    numLi.appendChild(document.createTextNode(Math.floor(Math.random() * 100)));
    lu.appendChild(numLi);
}

botao.addEventListener("click", gerarNumero);