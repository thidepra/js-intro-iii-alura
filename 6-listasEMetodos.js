console.log(`Trabalhando com listas`);

//cria um array
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Recife",
    "Porto Alegre"
);
console.log(`Lista de destinos: ${listaDeDestinos}`);

//adiciona um elemento na lista
listaDeDestinos.push("Florianópolis");
console.log(`Adiciona um item: ${listaDeDestinos}`);

//remove um elemento da lista a partir do índice 0 e remove 1 elemento
listaDeDestinos.splice(0,1);
console.log(`Remove um item: ${listaDeDestinos}`);

//imprime o elemento do indice 1
console.log("Imprimi o item do índice 1: " + listaDeDestinos[1]);

//encontra o índice do elemento
const indiceSaoPaulo = listaDeDestinos.indexOf("São Paulo");
listaDeDestinos.splice(indiceSaoPaulo,1);
console.log(`Remove São Paulo: ${listaDeDestinos}`);