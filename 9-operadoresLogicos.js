console.log(`Trabalhando com Operadores Lógicos`);

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Recife",
    "Porto Alegre"
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade ou está acompanhado");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log("\n\nEmbarque:");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);