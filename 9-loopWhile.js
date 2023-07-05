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

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe : ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");    
}