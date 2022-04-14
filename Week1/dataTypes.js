//String data type
const name = 'Sandra'; // <== string data type

/** Expressões **/
console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

console.log(2 ** 5);
console.log(4 % 2);
console.log(7 % 2);

/** Assignment **/
let myAge = 25;

myAge += 1;
console.log(myAge);


/** PEDMAS */
const expressionOne = ((2 * 2) + 5) * 6;
// console.log(expressionOne);


/** Criando Strings */

let name2 = 'Maria';
console.log(`Hello there, ${name2}!`);

console.log(`A soma de 1 +2 é ${1 + 2}.`);

/** Multiplas linhas  */

const frutas = `
1. manga
2. banana
3. morango
4. pera
`;

console.log(fruits);


/* Caracteres especiais */

const novelaFavorita1 = "Minha novela favorita é "O Clone".";
console.log(novelaFavorita1);

const novelaFavorita2 = "My favorite book is 'O Clone'.";
console.log(novelaFavorita2); 

const novelaFavorita3 = "My favorite book is \"O Clone\".";
console.log(novelaFavorita3);

/** Multiplas linhas com caracteres especiais */

const frutas2 = ' 1. manga \n 2. banana \n 3. morango \n 4. pera';

console.log(frutas2);


//A propriedade .length das strings

const cidade = 'Pindamonhangaba';
console.log(cidade.length);

/** charAt */
console.log(cidade.charAt(0));
console.log(cidade.charAt(1)); 
console.log(cidade.charAt(5)); 
console.log(greeting.charAt(20));
console.log(greeting.charAt(-10));

/** String como array */
const greeting = 'Hello there!';
console.log(cidade[0]); 
console.log(cidade[3]); 
console.log(cidade[9]); 
console.log(cidade[-2]); 

/** indexOf */
const mensagem1 = "É preciso ser feliz!";
console.log(mensagem1.indexOf("É preciso")); // <== 0
console.log(mensagem1.indexOf('pr'));
console.log(mensagem1.indexOf('Preciso'));
console.log(mensagem1.indexOf('!')); // 20

/** Repeat */
//Refrão de Hey Jude
console.log("na".repeat(10));

/** Encontrar substrings com o método  */
const mensagem1 = "É preciso ser feliz!";
let withSubstring = message.substring(0, 3);
console.log(withSubstring); // <== Don

let withSubstr = message.substr(0, 3);
console.log(withSubstr); // <== Don

let withSlice = message.slice(0, 3);
console.log(withSlice); // <== Don
As we can see, they all give the same results. What if we pass a negative values?

let withSubstring = message.substring(-3, -1);
console.log(withSubstring); // <== "" (empty string)

let withSubstr = message.substr(-3, -1);
console.log(withSubstr); // <== "" (empty string)

let withSlice = message.slice(-3, -1);
console.log(withSlice); // <== py






