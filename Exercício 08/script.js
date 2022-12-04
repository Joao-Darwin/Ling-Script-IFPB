let inputPesquisa = document.querySelector(".inputPesquisa");
let listaDeFilmes = document.querySelector(".listaDeFilmes");

const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "genero": "Romance",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "genero": "Ação",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "genero": "Ficção",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "genero": "Ficção",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "genero": "Drama",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "genero": "Ação",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "genero": "Ficção",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "genero": "Ação",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "genero": "Ação",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "genero": "Romance",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "genero": "Ação",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "genero": "Romance",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "genero": "Romance",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "genero": "Romance",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "genero": "Animation",
    "lancamento": 2010,
}];

let arrayNovoFilmes = [];

inputPesquisa.addEventListener('keyup', () => {
    listaDeFilmes.innerHTML = " ";

    arrayNovoFilmes = filmes.filter(filme => {
        return (filme.titulo.toLocaleLowerCase().includes(inputPesquisa.value.toLocaleLowerCase()) || filme.genero.toLocaleLowerCase().includes(inputPesquisa.value.toLocaleLowerCase()));
    });

    for(let i = 0; i < arrayNovoFilmes.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`Nome: ${arrayNovoFilmes[i].titulo} | Gênero: ${arrayNovoFilmes[i].genero} | Lançamento: ${arrayNovoFilmes[i].lancamento}`));
        listaDeFilmes.appendChild(li);
    }
})

inputPesquisa.addEventListener('keydown', () => {
    listaDeFilmes.innerHTML = " ";
})