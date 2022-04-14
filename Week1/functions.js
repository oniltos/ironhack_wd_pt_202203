/** Funções */
//Blocos reusáveis de código que desempenham uma tarefa específica
//Funções vs statements
//Funções são statements criadas pelo programador

/** Declaração de uma função */
//Pode ter múltiplos parâmetros
function functionName(parameters) {
    // ....
  }

  //Pode ser chamada com múltiplos argumentos
  functionName(arguments);

/*Sintaxe de uma função
//Nem toda função terá um retorno
function <name> ([<parameters>]) {
    <instructions>

    [return <expression>;]
}


//Anatomia de uma função
// keyword          function parameters (if any)
// ^          name            ___|
// |            |            |
function sayHelloWorld(someParameter(s)?) {
  // the code or so-called the body of the function
}
*/

/**Nomeando funções */
//Utilizamos em geral verbos que descrevem ações
//addTwoNumbers
//sayHello

/** Funções com e sem parâmetros */
function sayHelloMary() {
    console.log('Hello, Mary!');
  }
  function sayHelloJohn() {
    console.log('Hello, John!');
  }

  sayHelloMary(); // output: 'Hello, Mary!'
  sayHelloJohn(); // output: 'Hello, John!'

  function sayHello(name) {
    console.log(`Hello ${name}!`);
  }
  
  sayHello('Mary');
  // name = Mary
  // output: 'Hello Mary!'
  
  sayHello('John');
  // name = John
  // output: 'Hello John!'
  
  sayHello('Lucy');
  // name = Lucy
  // output: 'Hello Lucy!'


//Funções com múltiplos parâmetros
// function definition/declaration
function sayHello(classmate1, classmate2, classmate3) {
    console.log(`Hello ${classmate1}, ${classmate2} and ${classmate3}!`);
  }
  
// function call/invocation
  sayHello('Mat', 'Jo', 'Maria');
// output: Hello Mat, Jo and Maria!

/** Retorno de funções */
//Uma função sempre retorna um valor. Quando um valor de retorno não é especificado, o que a função retorna?
function printName(name) {
    return `Name is ${name}.`;
  }
  
  printName('Peter'); // => Name is Peter.

//O return deve ser a última parte do código de uma função

  function printName(name) {
    return `Name is ${name}.`;
    console.log('Hello, I am after the return statement.');
  }
  
  printName('Yo'); // => Name is Yo.
  
//Funções podem ter mais de um return statement
function printName(name) {
    if (name.length === 0) {
      return 'Please provide a valid name!';
    }
  
    return `Name is ${name}.`;
  }
  
  printName(''); // => Please provide a valid name!
  printName('George'); // => Name is George.

//Uma função pode retornar múltiplos valores
//Como objeto
function getUserInfo(firstName, lastName) {
    const userInfo = {
      firstName: firstName,
      lastName: lastName
    };
  
    return userInfo;
  }

  getUserInfo('ana', 'martinez'); // => { firstName: 'ana', lastName: 'martinez' }

//Como array
function getFavorites(fav1, fav2, fav3) {
    const favorites = [fav1, fav2, fav3];
  
    return favorites;
  }
  
  getFavorites('javascript', 'html', 'css'); // => [ 'javascript', 'html', 'css' ]

  //Single responsability principle
  //One verb per functions
  //20 lines

  //Refatorando ou reescrevendo e otimizando funções
  function avg(array) {
    // !array.length is the same as writing array.length === 0
    if (!array.length) return;
  
    for (let sum = 0, i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  //Versão refatorada

  function sum(array) {
    if (!array.length) return;
  
    for (let sum = 0, i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  function avg(array) {
    if (!array.length) return;
  
    return sum(array) / array.length;
  }
  
