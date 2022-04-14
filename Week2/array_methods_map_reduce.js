/*let imoveis = [
  {
    url: 'www.sitedeimoveis.com.br/imoveis/apartamento-no-recife',
    titulo: 'Imóvel Grande e Barato no Recife',
    fotos: [
      {id: 3, fileName: 'foto3.jpg', title: 'Foto de uma sala com sofá e quadro, e etc'},
      {id: 3, fileName: 'foto3.jpg', title: 'Foto de uma sala com sofá e quadro, e etc'},
      {id: 3, fileName: 'foto3.jpg', title: 'Foto de uma sala com sofá e quadro, e etc'},
      {id: 3, fileName: 'foto3.jpg', title: 'Foto de uma sala com sofá e quadro, e etc'}
    ],
    metros: 120.5,
    iptu: 1300.00,
    related: [ 
      {url: 'www.ererer.erer'},
      {url: 'www.ererer.erer'},
      {url: 'www.destaque.erer'},
      {url: 'www.ererer.erer'},
      {url: 'www.ererer.erer'},
      {url: 'www.ererer.erer'},
    ]
  },
  {},
  {}
]

let relacionados = 'related'


//Terceiro anúncio relacionado dentro do primeiro anúncio do array de anúncios
//let destaque = imoveis[0].relacionados[2]
let destaque = imoveis[0].related[2]
console.log(destaque)

let relacionados = [
  {url: 'www.ererer.erer'},
  {url: 'www.ererer.erer'},
  {url: 'www.destaque.com'},
  {url: 'www.ererer.erer'},
  {url: 'www.ererer.erer'},
  {url: 'www.ererer.erer'},
]*/

let locations = [
  { lat: 30, long: 40, alt: 700},
  { lat: 30, long: 41, alt: 700.5},
  { lat: 30, long: 42, alt: 700},
  { lat: 31, long: 42, alt: 700.1},
]

let terceiraAltitude = locations[2].alt
console.log(terceiraAltitude)

/** Strava Light 
// [lat, long, alt]
*/
let locationsLight = [
  [30, 40, 700],
  [30, 40, 700.5],
  [30, 40, 700.8],
]

let altitudeSeg2 = locationsLight[2][2]
console.log(altitudeSeg2)




//Map
/*
const arr = [1, 2, 4, 10]

const arrayDeTriplos = arr.map(function(numero) {
  if(numero != 2) {
    return numero * 3
  }
  return numero * 2
})

console.log(arr)
console.log(arrayDeTriplos
   
 
const arrayDeTriplosComForeach = [];

arr.forEach(function(numero) {
  if(numero != 2) {
    arrayDeTriplosComForeach.push(numero * 3)
  } else {
    arrayDeTriplosComForeach.push(numero * 2)
  }
  
})        
console.log(arrayDeTriplosComForeach)


const alunos = [
  {
    nome: 'Joe',
    nota1: 10,
    nota2: 8,
    nota3: 7
  },
  {
    nome: 'Ann',
    nota1: 5,
    nota2: 10,
    nota3: 9
  },
  {
    nome: 'Mary',
    nota1: 3,
    nota2: 9,
    nota3: 2
  },
  {
    nome: 'Julia',
    nota1: 10,
    nota2: 9,
    nota3: 9
  },
  {
    nome: 'Mario',
    nota1: 2,
    nota2: 3,
    nota3: 1
  },
]

const alunosEMedias = alunos.map(function(aluno) {
  const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3
  return {
    nome: aluno.nome,
    media: media
  }
})

console.log(alunos)
console.log(alunosEMedias)

/**
* Reduce


array.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual
})
*/
const numeros = [1, 23, 45, 789, 2345]

const soma = numeros.reduce(function(acc, atual) {
  return acc * atual
})

console.log(soma)

const palavras = ['Este', 'é', 'um', 'array', 'de', 'palavras']

const palavraEnorme = palavras.reduce(function(acc, atual) {
  return acc + ' ' + atual
})

const bigString = palavras.reduce((acc, atual) => acc + ' ' + atual)

console.log(bigString)

const pessoas = [
  { name: 'Ana', age: 20 },
  { name: 'Mario', age: 21 },
  { name: 'Joe', age: 34 },
  { name: 'John', age: 52 }
]

const somaIdades = pessoas.reduce(function(soma, pessoa) {
  console.log('Soma:', soma, 'age', pessoa.age)
  return soma + pessoa.age
}, 0)

console.log(somaIdades)
















            


























