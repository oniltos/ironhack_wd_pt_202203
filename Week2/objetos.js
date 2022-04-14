/**
 * Sintaxe de objetos
 */
//Objeto Literal
let exemplo = {
    chave: valor,
    chave2: valor2,
    chave3: valor3
}

//Objeto com construtor
let exemplo2 = new Object()

//Exemplo array
let array1 = new Array()
let array2 = []

//Seguiremos com a sintaxe objeto literal

let formula1 = {
    campeao2021: 'Max Verstappen'
}

//Propriedade: campeao2021
//Valor: Lewis Hamilton

//Recomendamos camelCase para propriedades com mais de um nome, mas poderia ser
let formula = {
    "campeao da formula 1 2021" : "Max Verstappen"
}

/** Objetos são literais como 23 ou false , por isso podem ser armazenados em variáveis*/

/** Objetos podem ter multiplas propriedades */
let melhoresPilotos = {
    melhor: 'Lewis Hamilton',
    segundoMelhor: 'Max Verstappen'
}

/**
 * Acessando Valores
 */

console.log(melhoresPilotos) //retorna todo o objeto
melhoresPilotos.melhor //com ponto
melhoresPilotos['melhor']//com colchetes
console.log(melhoresPilotos.melhor) // Apenas o valor do melhor
console.log(melhoresPilotos.segundoMelhor) // Apenas o valor do segudo melhor

/**
 * Adicionando propriedades
 */
melhoresPilotos.terceiroMelhor = 'Valtteri Bottas'

melhoresPilotos['quartoMelhor'] = 'Sergio Perez' //Precisa de aspas

/**
 * Verificando se propriedade existe
 */

//Sintaxe
prop in melhoresPilotos

'terceiroMelhor' in melhoresPilotos
'quintoMelhor' in melhoresPilotos

/**
 * Atualizando valores
 */
melhoresPilotos.melhor = 'Max Verstappen'
melhoresPilotos['melhor'] = 'Max Verstappen'

/**
 * Removendo propriedades
 */
delete melhoresPilotos.segundoMelhor;
delete melhoresPilotos['segundoMelhor'];

/**
 * Listar as propriedades
 */
//Object.keys()
Object.keys(melhoresPilotos);

//for ... in  -> trabalhar os dados
for(let key in melhoresPilotos) {
    console.log(key)
}

/**
 * Listar valores
 */
Object.values(melhoresPilotos)

/**Podemos utilizar const para declarar objetos? Podemos, mas... */

const aluna = { nome: 'Maria' }
aluna.sobrenome = 'Pereira'

console.log(aluna)

//Reassign ou reatribuição
const aluno = { nome: 'Pedro' }
aluno = { nome: 'Mario' }
console.log(aluno)
