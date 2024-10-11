console.log("Atribuição de variáveis");

const primeiroNome = "Bianca";
const sobrenome = "Souza";

console.log(primeiroNome, sobrenome);
// console.log(primeiroNome + " " + sobrenome);
// console.log(primeiroNome);

//interpolação de variáveis
console.log(`Meu nome é ${primeiroNome} ${sobrenome}.`);

//sobrescrita de variável
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//let podem variar, a const não pode variar
//preferir usar const para evitar mudanças de estados
let contador = 0;
contador = contador + 1;
console.log(contador);

//declarando váriavel
let idade;
//atribuindo valor
idade = 29;
idade += 1;
console.log(idade);

