console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Recife",
    "Porto Alegre"
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade");
} else if (estaAcompanhada) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador está acompanhado");
} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log("Destinos não comprados");
console.log(listaDeDestinos);

console.log("Operadores relacionais");
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);