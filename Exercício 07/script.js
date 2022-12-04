let campoTexto = document.querySelector(".campoTexto");
let campoData = document.querySelector(".campoData");
let botao = document.querySelector(".botao");
let lista = document.querySelector(".listaDeEventos");

function evento (nome, data) {
  this.nome = nome;
  this.data = data;
}

let arrayEventos = [];

botao.addEventListener("click", () => {
    lista.innerHTML = " ";
    arrayEventos.push(new evento(campoTexto.value, campoData.value));

    arrayEventos.sort(function comparacao(a, b) {
      if(a.data > b.data) {
        return 1;
      } else if(a.data < b.data) {
        return -1;
      } else {
        return 0;
      }
    })

    for(let i = 0; i < arrayEventos.length; i++) {
        console.log(arrayEventos[i]);
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`Nome: ${arrayEventos[i].nome} | Data: ${arrayEventos[i].data}`));
        lista.appendChild(li);
    }
})