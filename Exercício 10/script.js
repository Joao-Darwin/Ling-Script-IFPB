let arrayItens = (JSON.parse(localStorage.getItem("arrayDeItens")) == null) ? [] : JSON.parse(localStorage.getItem("arrayDeItens"));

let body = document.querySelector('body');

let inputNomeItem = document.querySelector(".inputNomeItem");
let inputPrecoItem = document.querySelector(".inputPrecoItem");
let botaoAdicionar = document.querySelector(".buttonAdicionar");

let tabelaDeItens = document.querySelector(".tabelaDeItens");

class Item {
    constructor(nome, preco, comprado) {
        this.nome = nome;
        this.preco = preco;
        this.comprado = comprado;
    }
}

botaoAdicionar.addEventListener("click", () => {
    adicionarItem(inputNomeItem.value, inputPrecoItem.value);
})

window.addEventListener('load', () => {
    listarItens();
})

function adicionarItem(nome, preco) {
    if (nome != "" && preco != "") {
        let novoItem = new Item(nome, preco, false);
        arrayItens.push(novoItem);
        localStorage.setItem("arrayDeItens", JSON.stringify(arrayItens));
    }
}

function listarItens() {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayDeItens"));

    if (arrayLocalStorage != null) {
        for (let i = 0; i < arrayLocalStorage.length; i++) {
            let tr = document.createElement('tr');

            let tdNome = document.createElement('td');
            tdNome.classList.add('tds');
            tdNome.appendChild(document.createTextNode(arrayLocalStorage[i].nome));

            let tdPreco = document.createElement('td');
            tdPreco.classList.add('tds');
            tdPreco.appendChild(document.createTextNode(arrayLocalStorage[i].preco));

            let inputCheckBox = document.createElement('input');
            inputCheckBox.type = 'checkbox';
            inputCheckBox.addEventListener('click', () => {
                concluirItem(i);
            })
            if(arrayLocalStorage[i].comprado == true) {
                inputCheckBox.checked=true;
                inputCheckBox.disabled=true;
            }
            let tdComprado = document.createElement('td');
            tdComprado.classList.add('tds');
            tdComprado.appendChild(inputCheckBox);

            let botaoRemover = document.createElement('button');
            botaoRemover.innerHTML = 'Remover';
            botaoRemover.addEventListener('click', () => {
                removerItem(i);
            })
            let tdRemover = document.createElement('td');
            tdRemover.classList.add('tds');
            tdRemover.appendChild(botaoRemover);

            tr.appendChild(tdNome);
            tr.appendChild(tdPreco);
            tr.appendChild(tdComprado);
            tr.appendChild(tdRemover);
            tabelaDeItens.appendChild(tr);
        }
    }
}

function removerItem(index) {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayDeItens"));

    arrayLocalStorage.splice((index), 1);

    localStorage.setItem("arrayDeItens", JSON.stringify(arrayLocalStorage));
}

function concluirItem(index) {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayDeItens"));
    arrayLocalStorage[index].comprado = true;
    localStorage.setItem("arrayDeItens", JSON.stringify(arrayLocalStorage));
}