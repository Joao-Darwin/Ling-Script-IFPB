let inputNome = document.querySelector(".inputNome");
let inputSalario = document.querySelector(".inputSalario");
let estrutura = document.querySelector(".estrutura");
let maiorSalarioSpan = document.querySelector(".maiorSalario");
let totalSalarioSpan = document.querySelector(".totalSalario");

let botaoAdicionar = document.querySelector(".botaoAdicionar");

function Funcionario(Nome, Salario) {
    this.Nome = Nome;
    this.Salario = Salario;
}

let arrayFuncionarios = [];
let salarioFunc = [];

function maiorSalario(funcionario) {
    let funcMaiorSalario = funcionario[0]
    for(let i = 0; i < funcionario.length; i++) {
        if(funcionario[i].Salario > funcMaiorSalario.Salario){
            funcMaiorSalario = funcionario[i];
        }
    }
    return funcMaiorSalario.Nome;
}

function totalSalario() {
    let total = salarioFunc.reduce((a, b) => a + b);
    return total;
}

botaoAdicionar.addEventListener("click", () => {
    let novoFunc = new Funcionario(inputNome.value, inputSalario.value);
    arrayFuncionarios.push(novoFunc);
    salarioFunc.push(parseFloat(novoFunc.Salario));
    maiorSalarioSpan.replaceChildren(document.createTextNode(`Maior Salário: ${maiorSalario(arrayFuncionarios)}`));
    if(arrayFuncionarios.length > 1) {
        totalSalarioSpan.replaceChildren(document.createTextNode(`Total valor salários: ${totalSalario()}`));
    } else {
        totalSalarioSpan.replaceChildren(document.createTextNode(`Total valor salários: ${novoFunc.Salario}`));
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`Nome: ${novoFunc.Nome} | Salário: ${novoFunc.Salario}`));
    estrutura.appendChild(li);
})