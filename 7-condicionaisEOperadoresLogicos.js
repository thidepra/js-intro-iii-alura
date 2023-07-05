console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array( //cria um array
    "Salvador",
    "São Paulo",
    "Porto Alegre"
);

const idadeComprador = 15;
const estaAcompanhada = true; //tipo boleano 

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    listaDeDestinos.splice(0, 1); //remove o item Salvador
    console.log("Comprador maior de idade");
} else if (estaAcompanhada == true) {
    listaDeDestinos.splice(0, 1); //remove o item Salvador
    console.log("Comprador está acompanhado");
} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log(listaDeDestinos);

/*operadores lógicos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);*/