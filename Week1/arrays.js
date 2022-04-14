/** Arrays */
//Estruturas que agrupam uma coleção de elementos em uma variável

//Podemos acessar os elementos individualmente utilizando um index

//Declaração de array
const arrayNames = [];

const arrayNames2 = ['Pedro', 'Jake', 'Joan', 'Mike'];

const arrayNames3 = ['Pedro', 2, true];

//Acessando elementos do array
console.log(arrayNames2[0]);
console.log(arrayNames2[2]);
console.log(arrayNames2[99]);


//Adicionando elementos a um array
//Método .push() adiciona ao fim do array

var arrayNames4 = ["Pedro", "Jake", "Joan"];

arrayNames4.push("Rachel");

console.log(arrayNames4[3]);

//Método unshift() adiciona ao início do array
const arrayNames5 = ['Pedro', 'Jake', 'Joan'];
arrayNames5.unshift('Rachel');
console.log(arrayNames5[0]); // <== Rachel

//Removendo elementos de um array
//.splice(start, deleteCount)
var arrayNames6 = ["Pedro", "Jake", "Joan"];

console.log(arrayNames6[0]);
arrayNames6.splice(0,1);
console.log(arrayNames6[0]);

//.pop() remove o último valor

//.shift() remove o primeiro valor  

//Iterando sobre elementos de um array
const arrayNames7 = ['Pedro', 'Jake', 'Joan'];
for (let i = 0; i < arrayNames7.length; i++) {
  console.log(arrayNames7[i]);
}

//Iterando com forEach
var arrayNames8 = ["Pedro", "Jake", "Joan"];

arrayNames8.forEach(function(name){
  console.log(name);
})

//Foreach com arrow functions
const arrayNames9 = ['Pedro', 'Jake', 'Joan'];
arrayNames9.forEach(name => console.log(name));

// console:
// Pedro
// Jake
// Joan


//Foreach sem parâmetro
// ES5:
['a', 'b'].forEach(function () {
    console.log('hi!');
  });
  
  // ES6:
  ['a', 'b'].forEach(() => console.log('hi!'));
  
  // => hi!
  // => hi!

//Foreach com elemento 
// ES5:
//                        placeholder, can be anything (naming has to make sense though)
//                            |
[1, 2, 3, 4].forEach(function (element) {
    console.log(element * 2); // we can access each element inside!
  });
  
  // ES6:
  [1, 2, 3, 4].forEach(element => console.log(element * 2));
  
  // console:
  // => 2
  // => 4
  // => 6
  // => 8

//Foreach com índice
const raceResults = ['Helen', 'John', 'Peter', 'Merry'];
raceResults.forEach(function (elem, index) {
  console.log(elem + ' finished the race in ' + (index + 1) + ' position!');
});

//String .split()
//Separa uma string em partes e transforma em elementos de um array
let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);




