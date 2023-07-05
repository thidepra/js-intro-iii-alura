console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array( //cria um array
    "Salvador",
    "São Paulo",
    "Porto Alegre"
);
console.log(listaDeDestinos);

listaDeDestinos.push("Florianópolis"); //adiciona um elemento na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(0,1); //remove um elemento, a partir da posição 0, e 1 elemento
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //imprime o elemento do indice 2


