console.log(`\n Trabalhando com Condicionais`);

const listaDeDestinos = new Array( //cria um array
    "Salvador",
    "Porto Alegre",
    "São Paulo"
);

const idadeComprador = 17;
const estaAcompanhada = true; //tipo boleano 
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //substitui o if do exercicio 8

let destinoExiste = false;

for(let i = 0; i < 3 ; i ++){ //inicia a variavel, condição e o contador
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}

console.log("Destino existe : ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");    
}