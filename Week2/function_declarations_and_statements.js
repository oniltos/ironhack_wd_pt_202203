/*Declaração
function calculaSoma(x, y) {
  return x + y
}

calculaSoma(10, 20)

let soma = calculaSoma(10, 20)
console.log('A soma é', soma)


const calculaSoma2 = function (x, y) {
  return x + y
}

console.log(calculaSoma2(10, 30))


//Expressão
const welcomeMessage = function (message) {
  console.log(message)
}

welcomeMessage('Hello!')

function checkFunctionDeclaration() {
  console.log('TEM QUE APARECER DEPOIS | A declaração de função pode ser feita após a chamada para a função')
}


const checkFunctionExpression = function () {
  setTimeout(function() {
    console.log('TEM QUE APARECER ANTES | A chamada pode ser feita antes da function expression?')
  }, 2000)
}

checkFunctionExpression()
checkFunctionDeclaration()


function comaJantar() {
  console.log('Comendo o jantar!')
}

function comaSobremesa() {
  setTimeout(function() {
    console.log('Comendo a sobremesa!')
  }, 2000)
}

comaJantar()
comaSobremesa()




function comendoRefeicao(parametro, callback) {
  console.log(`Comendo o ${parametro}!`)
  //
  //
  //
  //busca dados na API
  const refrigeranteFavorito = 'Fanta'
  callback(refrigeranteFavorito)
}

//Mostra o resultado pro usuário
function tomandoRefrigerante(refrigerante) {
  console.log(`Parabéns! pode tomar o ${refrigerante}`)
}

comendoRefeicao('Almoço', tomandoRefrigerante)
*/


function printSucoFavorito(fruta, anonFunc) {
  anonFunc(fruta)
}

printSucoFavorito('mangaba', function (fruta) {
  console.log('O suco favorito é', fruta)
})


function obtemTamanho(str, funcaoAnonima) {
  funcaoAnonima(str)
}

obtemTamanho('Felipe', function(str) {
  console.log(`O tamanho de ${str} é ${str.length}`)
})

setTimeout(function() {
  console.log('Estou no setTimeout')
}, 2000)
















































