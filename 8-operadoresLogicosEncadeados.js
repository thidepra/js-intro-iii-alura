console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array( //cria um array
    "Salvador",
    "São Paulo",
    "Porto Alegre"
);

const idadeComprador = 17;
const estaAcompanhada = true; //tipo boleano 
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("\nComprador maior de idade ou está acompanhado");
    listaDeDestinos.splice(0, 1); //remove o item Salvador
} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log("\n\nEmbarque: \n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);
