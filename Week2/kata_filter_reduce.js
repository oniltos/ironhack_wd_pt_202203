function divisibleBy(numbers, divisor){
    return numbers.filter(number => number % divisor === 0)
  }

function smash (words) {
    if(!words.length) {
      return ''
    }
    return words.reduce((acc, word) => acc + ' ' + word)
 };

 //Array .map()
const array = [1, 2, 3, 'b']
const newArray = array.map(number => number * 2)
console.log(newArray)


//Reduce
const palavras = ['A', 'minha', 'casa', 'é', 'grande']

const frase = palavras.reduce((acc, cur) => `${acc} ${cur}`)

console.log(frase)

const numeros = [20, 33, 3445, 80, 121]

const soma = numeros.reduce((acc, cur) => acc + cur)
console.log(soma)

const alunos = [
  {nome: 'Teste', idade: 20},
  {nome: 'Teste2', idade: 21}
]


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 10, 15, 22, 30, 45, 32]

const divisiveisPorCinco = numeros2.filter(numero => numero % 5 === 0)

console.log(divisiveisPorCinco)

const palavras2 = ['Era', 'uma', 'casa', 'muito', 'engraçada', 'não', 'tinha', 'teto']

const quatroOuMais = palavras2.filter(function(palavra) {
  return palavra.length >= 4
})

console.log(quatroOuMais)

const alunos2 = [
  {nome: 'Julio', media: 7},
  {nome: 'Pedro', media: 5},
  {nome: 'Maria', media: 8},
  {nome: 'Fernanda', media: 3}
]

const aprovados = alunos2.filter(elemento => elemento.media >= 6)

console.log(aprovados)












































