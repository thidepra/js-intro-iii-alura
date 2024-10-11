console.log("Trabalhando com While");

const listaDeDestinos = new Array(
    "Salvador",
    "Porto Alegre",
    "Recife",
    "São Paulo"
);

const idadeComprador = 18;
const estaAcompanhada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

//substitui o if do exercicio 9
const podeComprar = idadeComprador >= 18 || estaAcompanhada;
let contador = 0;
let destinoExiste = false;

while(contador < 4){
    // console.log(listaDeDestinos[contador]);
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("\nDestino existe : ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, tivemos um erro!");    
}