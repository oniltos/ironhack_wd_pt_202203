//Sintaxe funcao
function calcSum(x, y) {
    return x + y;
  }
  
  calcSum(12, 23); // => 35

  /**
   * So if functions are treated as objects, that means they can be assigned to variables (meaning, they can be stored in variables). And that brings us to function expressions.
*/
  // function declaration (statement)
  function welcomeMessage(message) {
    return message;
  }
  
  // function assigned to a variable
  const greeting = welcomeMessage('So nice to have you here! Welcome!');
  
  console.log(greeting); // So nice to have you here! Welcome!\

  /**The above is a “schooly way” to explain function expressions. Here is how you could and you will do it yourself now when you know that functions can be stored in variables:
*/
  // function expression - is a function without name stored in a variable
  const welcomeMessage = function (message) {
    console.log(message);
  };
  
  welcomeMessage('So nice to have you here! Welcome!');
  // => So nice to have you here! Welcome!


  /**
   * Well, there is a difference and it is not related to what they do, but how they are executed. The order in which code gets executed is what determines the difference between these two. Check this:
*/
// function declaration (statement)

checkFuncDeclaration(); // => Func declaration CAN be invoked before it's defined.

function checkFuncDeclaration() {
  console.log('Func declaration CAN be invoked before it is defined.');
}
// function expression

checkFuncExpression(); // => ReferenceError: checkFuncExpression is not defined

const checkFuncExpression = function () {
  console.log('Func expression CAN NOT be invoked before it is defined.');
};

//Hoisting -> Elevação
//Funcion declarations são movidas para o topo

//Qual usar? Não há regra, mas seja consistente

/**
 * Callback
 */
 function eatDinner() {
    console.log('Eating the dinner!');
  }
  
  function eatDessert() {
    console.log('Eating the dessert!');
  }
  
  eatDinner(); // <== Eating the dinner!
  eatDessert(); // <== Eating the dessert!


//Atrasando
function eatDinner() {
    setTimeout(function () {
      console.log('Eating the dinner!');
    }, 1000);
  }
  
  function eatDessert() {
    console.log('Eating the dessert!');
  }
  
  eatDinner();
  eatDessert();

  //Callback
  function eatDinner(callback) {
    // the word "callback" is just placeholder
    // you can use any other word
    console.log('Eating the dinner!');
    callback();
  }
  
  function eatDessert() {
    console.log('Eating the dessert!');
  }
  
  eatDinner(eatDessert); // <== make sure when invoking callback func NOT tu use ()
  
  // Eating the dinner!
  // Eating the dessert!

  //Anonymous functions
  //Funcoes sem argumentos
  //Não disponivel para usar antes da inicializacao
  const checkFuncExpression = function () {
    console.log('Func expression CAN NOT be invoked before it is defined.');
  };

  //Como argumento de outras funcoes
  function printName(name, anonFunc) {
    anonFunc(name);
  }
  
  printName('sandra', function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
  });
  
  // => Sandra
  function getLength(str, anonFunc) {
    anonFunc(str);
  }
  
  getLength('aleksandra', function (str) {
    console.log(`${str} has ${str.length} letters.`);
  });
  
  // => aleksandra has 10 letters.
  
  getLength('nick', function (str) {
    console.log(`${str} has ${str.length} letters.`);
  });

  //Como argumento do setTimeout
  setTimeout(function () {
    console.log('I am anonymous function and I will execute after 1 second.');
  }, 1000);

/**
 * Arrow function
 * ES6
 * Similar a function expression
 * Simples
 * 
 * 
 * 
 */
 const greeting = function (name) {
    console.log(`Hello, ${name}!`);
  };
  
  // arrow function syntax
  const greeting = name => {
    return name;
  };

  const greeting = name => `Hello, ${name}!`;

greeting('Ana'); // => Hello, Ana!


/**
 * If the right side is only a one-line expression,
 *  we can omit the curly braces and 
 * the return statement is omitted as well
 *  (the return statement is implied). 
 * However, if we need to write multiline statements 
 * in the function, then we can do it using 
 * the curly braces {...} and in that case, 
 * we have to use the return statement as well.
 * 
 */

//This
const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      console.log(this);
      console.log(this.name);
    }
  };
 
  user.getOlder();
// => { name: 'ana', age: 29, getOlder: [Function: getOlder] }
// => ana

//As shown, the keyword this refers to the object (user) 
//itself. So if we would like to get Ana 
//older for a year, we could update our code as follows:

const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      this.age += 1;
      console.log(this.age);
    }
  };


  user.getOlder();
  // => 30


//Com setINterval
const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      setInterval(function () {
        this.age += 1;
        console.log(this.age);
      }, 1000);
    }
  };
  
  user.getOlder();
  // => NaN
  // => NaN
  // => NaN
  // ...

  
  //O que mudou?
  //Console.log no this

  const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      setInterval(function () {
        console.log(this);
      }, 1000);
    }
  };
  
  user.getOlder();
  // Timeout {
  //   _idleTimeout: 1000,
  //   _idlePrev: null,
  //   _idleNext: null,
  //   _idleStart: 145,
  //   _onTimeout: [Function],
  //   _timerArgs: undefined,
  //   _repeat: 1000,
  //   _destroyed: false,
  //   [Symbol(refed)]: true,
  //   [Symbol(asyncId)]: 5,
  //   [Symbol(triggerId)]: 1
  // }

  //Perdemos acesso ao this do objeto. O escopo mudou.
  //O this agora se refere ao timeInterval

  //Como resolver? Arrow function, bind -> liga novamente graças ao =>
  const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      setInterval(() => {
        this.age += 1;
        console.log(this.age);
      }, 1000);
    }
  };
  
  user.getOlder();
  // 30
  // 31
  // 32
  // 33


  //Arguments object. 
  //Dentro do corpo de uma funçao podemos adcessar um objeto chamado 
  //arguments

  function printSomething() {
    console.log(arguments);
  }
  
  printSomething('hi');
  
  // [Arguments] { '0': 'hi' }

  //Acessando argumentos, square brackets
  function printSomething() {
    console.log('arguments length: ', arguments.length);
    console.log('all: ', arguments);
    console.log('first arg: ', arguments[0]);
    console.log('second arg: ', arguments[1]);
  }

  
  printSomething('hi', 'there');

// arguments length:  2
// all:  [Arguments] { '0': 'hi', '1': 'there' }
// first arg:  hi
// second arg:  there

//Como usar?
//Em um for
function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  printArgs('hey', 'there', 'ironhacker');
  
  // hey
  // there
  // ironhacker
  
  printArgs(1, 77, { name: 'milo' }, ['cat', 'dog']);
  
  // 1
  // 77
  // { name: 'milo' }
  // [ 'cat', 'dog' ]

//Não dá para usar métodos de arrays pq é um objeto
//MAS PODEMOS TRANSFORMAR EM ARRAY
const args = Array.from(arguments);
Check the example here:

function useArgsAsArr() {
  const argsArr = Array.from(arguments);

  argsArr.forEach(el => console.log(el));
}

useArgsAsArr('i', 'am', 'iterated', 'with', 'forEach');

// i
// am
// iterated
// with
// forEach

/**
* Arrow Functions
*

function digaOla(nome) {
  console.log(`Olá ${nome}!`)
}

const digaOla2 = function(nome) {
  console.log(`Olá ${nome}!`)
}

const digaOla3 = nome => console.log(`Olá ${nome}!`)

digaOla('Felipe')
digaOla2('Ironhack')
digaOla3('Turma')

//Sintaxe da arrow function
//Sem parâmetro
const digaHello = () => console.log('Hello!')
digaHello()

//Com parâmetro
const digaHelloNome = nome => console.log(`Hello ${nome}`)
digaHelloNome('Felipe')

//Com mais de um parâmetro
const digaHelloNomeESobrenome = (nome, sobrenome) => console.log(`Hello ${nome} ${sobrenome}`)
digaHelloNomeESobrenome('Chico', 'Buarque')

//Com mais de uma linha de código
const calculaTamanho = nome => {
  const tamanho = nome.length
  console.log(`O tamanho do nome ${nome} é ${tamanho}`)
}

calculaTamanho('Felipe')


const user = {
  name: 'Joe',
  age: 89,
  getOlder: function () {
    setInterval(() => {
      this.age += 1
    	console.log(this.age)
    }, 1000)
  }
}
*/

/**
* objeto arguments
*/
function printCoisas() {
    console.log(arguments.length)
    console.log('Primeiro argumento', arguments[0])
      console.log('Primeiro argumento', arguments[1])
  }
  printCoisas('Um argumento', 'outro')
  
  function calculadora() {
    if(arguments.length > 1) {
      return arguments[0] + arguments[1]
    } 
    return 'Não foram passados dois argumentos'
  }
  
  function printArguments() {
    console.log(arguments)
    for(let i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
    
  }
  
  printArguments('olá', 'pessoas', 'no', 'Ironhack')
  printArguments('olá', 'pessoas', 20, {animal: 'gato'}, [20, 33])
  
  function useAsArray() {
    const argsAsArray = Array.from(arguments)
    argsAsArray.forEach(elemento => console.log(elemento))
    console.log(arguments)
    console.log(argsAsArray)
  }
  
  const algo = ''
  
  function converteParaArray() {
    const objeto = {
      '0': 'Casa',
      '1': 'Apartamento',
      length: 2,
      outraPropriedade: 10
    }
    
    console.log(objeto)
    
    const convertido = Array.from(objeto)
    console.log('Array convertido', convertido)
  }
  
  converteParaArray()
  
  
  
  
  
  
  
  
  
  
  
  


  






