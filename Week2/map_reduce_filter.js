/**
 * Map, reduce e filter
 * 
 * Não modificam o array original, não há mutação do array, em vez disso retorna um novo array
 * 
 */
//.map()
/**
 * Mapeia o array, executando uma função em cada elemento 
 * diff. Foreach não retorna nada, map retorna um novo array
 */
 const array = [1, 2, 3];

 const newArray = array.map(function (number) {
   return number * 2;
 });
 
 console.log(newArray); // [ 2, 4, 6 ]
 The newArray:
 
 has the same number of elements as the original array: it’s actually a copy
 BUT where each new element is mapped by the callback function to its copied value*2
 ES6 one-line arrow function:
 
 const array = [1, 2, 3];
 
 const newArray = array.map(number => number * 2);
 
 console.log(newArray); // [ 2, 4, 6 ]

 //Fazer o mesmo com foreach
 const array = [1, 2, 3];

const newArray = []; // we have to create a newArray
array.forEach(function (numcopy) {
  numcopy *= 2; // double the passed copy (it's a copy)
  newArray.push(numcopy); // and push it to the newArray
});

console.log(newArray); // <== [ 2, 4, 6 ]

/**
 * Se você não retornar nada, terá um array de undefineds
 */

 const newArray = [1, 2, 3].map(function (el) {
    el * 2; // Oops, I missed `return` (#britney #diditagain)
  });

/**
 * Prática
 * array de alunos, precisa retornar um novo objeto com nome do aluno e média final. 
 */
 const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

  const finalGrades = students.map(theStudent => {
    const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
    const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
    return {
      name: theStudent.name,
      finalGrade: Math.round(finalGrade)
    };
  });
  
  console.log(finalGrades);
  // [
  //   { name: 'Tony Parker', finalGrade: 85 },
  //   { name: 'Marc Barchini', finalGrade: 69 },
  //   { name: 'Claudia Lopez', finalGrade: 87 },
  //   { name: 'Alvaro Briattore', finalGrade: 77 },
  //   { name: 'Isabel Ortega', finalGrade: 75 },
  //   { name: 'Francisco Martinez', finalGrade: 76 },
  //   { name: 'Jorge Carrillo', finalGrade: 86 },
  //   { name: 'Miguel López', finalGrade: 76 },
  //   { name: 'Carolina Perez', finalGrade: 72 },
  //   { name: 'Ruben Pardo', finalGrade: 71 }
  //  ]

  
  /**
   * Reduce transforma uma lista de valores em um único valor
   * Redução na cozinha, vários ingredientes, reduzindo até se tornar um único molho
   */

   array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });


//Em ES6
array.reduce((accumulator, currentValue) => accumulator + currentValue);

//Soma de números
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
});

console.log('total is: ', total);

//Podemos passar um valor inicial para o reduce
const numbers = [12, 9, 1, 8];

const total = numbers.reduce((accumulator, currentValue) => {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
}, 23); // <= notice the 23!!!

console.log('total is: ', total);

// accumulator is:  23 and current value is:  12
// accumulator is:  35 and current value is:  9
// accumulator is:  44 and current value is:  1
// accumulator is:  45 and current value is:  8
// total is:  53

//Calcular produto
const numbers = [2, 4, 6, 8];

const total = numbers.reduce((accumulator, current) => accumulator * current);

console.log(total); // <== 384

//Concatenar strings
const words = ['This', 'is', 'one', 'big', 'string'];

// ES5:
const bigString = words.reduce(function (sum, word) {
  return sum + word;
});

// ES6:
const bigString = words.reduce((sum, word) => sum + word);

console.log(bigString); // <== Thisisonebigstring

//Utilizando objetos
const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
  ];
  
  const ages = people.reduce(function (sum, person) {
    return sum + person.age;
  }, 0); // initialValue to 0

  
//Média das notas de review de um produto
const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const totalReviews = product.reviews.reduce(function (acc, review) {
    return acc + review.rate;
  }, 0); // starts acc to 0
  const averageRate = totalReviews / product.reviews.length;
  
  console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2



/**
 * Filter
 * Itera por um array e retorna um array apenas com elementos em que a condiçã passada é verdadeira 
 */
//Números pares
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // <== [ 2, 4, 6 ]

//ES6
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // <== [ 2, 4, 6 ]

//FIltrar apartamentos com banheira
[]





