/** Variáveis */
let nome;

//Declaração de múltiplas variáveis de uma vez
let idade, cidade, novela;

//Atribuição de valor do tipo number a uma variável
idade = 33;

//Atribuição de valor do tipo string a uma variável
cidade = 'Rio de Janeiro';

novela = 'O Clone';

//Nomes de variáveis não podem iniciar com números
let 1Teste;

//Nomes de variáveis podem iniciar com $ ou _
let $teste;``

let _teste; 

//Quando nomes de variáveis possuirem duas ou mais palavras, utilizamos a sintaxe camelCase
let favoriteFood;

//Mudando valores de variáveis
let novelaPreferida = 'O Clone'
novelaPreferida = 'Rei do Gado';

console.log(novelaPreferida);

/* Tipagem dinâmica */

favoriteFood = 'Steak';
console.log('Value: ', favoriteFood, ' Type: ', typeof favoriteFood);

favoriteFood = 20;
console.log('Value: ', favoriteFood, ' Type: ', typeof favoriteFood);

/* Usando const */
const nomeCompleto = 'Nilton Freitas';