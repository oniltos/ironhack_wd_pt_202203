/*
* Tipo de dado
* Data Type
* Conjunto de elementos
* pote pra colocar coisas de qualquer tipo dentro
* container
* coleção ordenada
*/

let fibonacci = [1, 2, 3, 5, 8, 13]
let novelas = ['O Clone','O Rei do Gado']
let comidas = [1, 'vegetais', 2, 'carnes']
let alimentos = ['peixe', 'vaca', 'batata', 'ovo']

//array.push(21);
/*novelas.push('O Beijo do Vampiro')
//novelas.splice(0, 1)

console.log(novelas)

fibonacci.splice(1, 2)

console.log(fibonacci)*/


/*
let caes = ['siames', 'vira', 'poodle', 'doberman']

caes.shift()

//caes.push('persa')
//caes.pop()

console.log(caes)

for(let i=0;i<caes.length;i++) {
  console.log(caes[i])
}

caes.forEach(function(cao) {
  console.log(cao)
})

caes.forEach(cao => console.log(cao))

*/
let caes2 = ['pit bull', 'pincher', 'dalmata']

caes2.forEach(function(cao) {
  console.log(cao)
})

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(number) {
  console.log(`O triplo do número ${number} é: ${3 * number}`)
})

let competidores = ['Hamilton', 'Leclerc', 'Max']
competidores.forEach(function(competidor, index) {
  console.log(`A posição do competidor ${competidor} é ${index + 1}`)
})

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

let palavras = lorem.split(' ')

console.log(palavras)

console.log(palavras[4])