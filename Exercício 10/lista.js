let arrayItens = (JSON.parse(localStorage.getItem("arrayDeItens")) == null) ? [] : JSON.parse(localStorage.getItem("arrayDeItens"));

export default function adicionarItem(nome, preco) {
    if (nome != "" && preco != "") {
        let novoItem = new Item(nome, preco, false);
        arrayItens.push(novoItem);
        localStorage.setItem("arrayDeItens", JSON.stringify(arrayItens));
    }
}


export default function removerItem(index) {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayDeItens"));

    arrayLocalStorage.splice((index), 1);

    localStorage.setItem("arrayDeItens", JSON.stringify(arrayLocalStorage));
}

export default function concluirItem(index) {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayDeItens"));
    arrayLocalStorage[index].comprado = true;
    localStorage.setItem("arrayDeItens", JSON.stringify(arrayLocalStorage));
}