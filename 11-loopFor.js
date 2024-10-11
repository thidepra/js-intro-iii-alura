console.log("\n Trabalhando com For");

const listaDeDestinos = new Array(
    "Salvador",
    "Porto Alegre",
    "Recife",
    "São Paulo"
);

const idadeComprador = 17;
const estaAcompanhada = true;
const destino = "Recife";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let destinoExiste = false;

//inicia a variavel, condição e o incremento ou decremento
//normalmente o contador é i
for(let cont = 0; cont < 4 ; cont ++){ 
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
    }
}

console.log("Destino existe : ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");    
}