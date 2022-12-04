let inputNome = document.querySelector(".inputNome");
let inputDocumento = document.querySelector(".inputDocumento")
let inputSaldo = document.querySelector(".inputSaldo")
let divClientes = document.querySelector(".clientes");

let botaoAdicionar = document.querySelector(".buttonAdicionar");

class cliente {
    constructor(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    get getNome() {
        return this.nome;
    }

    get getDocumento() {
        return this.documento;
    }

    get getSaldo() {
        return this.saldo
    }

    set setSaldo(valor) {
        this.saldo = valor;
    }

    adicionarSaldo() {
        this.saldo += 100;
    }

    subtrairSaldo() {
        this.saldo - + 100;
    }
}

let arrayClientes = [];

botaoAdicionar.addEventListener("click", () => {
    let novoCliente = new cliente(inputNome.value, inputDocumento.value, inputSaldo.value);
    if (inputSaldo.value == "") {
        alert("Alguns campos não estão preenchidos");
    } else {
        arrayClientes.push(novoCliente);
        renderizarClientes();
    }
})

function renderizarClientes() {
    divClientes.innerHTML = " ";
    for (let i = 0; i < arrayClientes.length; i++) {
        let botaoSubtrair = document.createElement("button");
        botaoSubtrair.innerHTML = "Sacar 100";
        botaoSubtrair.addEventListener("click", () => {
            arrayClientes[i].saldo -= 100;
            renderizarClientes();
        });

        let botaoSomar = document.createElement("button");
        botaoSomar.innerHTML = "Depositar 100";
        botaoSomar.addEventListener("click", () => {
            arrayClientes[i].saldo = parseFloat(arrayClientes[i].saldo) + 100;
            renderizarClientes();
        })

        let p = document.createElement("p");
        p.appendChild(document.createTextNode(`Nome: ${arrayClientes[i].nome} | Documento: ${arrayClientes[i].documento} | Saldo: ${arrayClientes[i].saldo}`));
        divClientes.appendChild(botaoSubtrair);
        divClientes.appendChild(p);
        divClientes.appendChild(botaoSomar);
        divClientes.appendChild(document.createElement("br"));
    }
}