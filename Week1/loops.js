/** While */
while (condition) {
    // code to be executed while the condition is true
}

//While executa o código desde que a condição seja verdadeira
//Imprimindo de 1 a 50
let i = 0;

while (i <= 50) {
  console.log(i);
  i++; // O mesmo que i + i
}

/** Do while */if
do {
    // block of code to be executed
  } while (condition);

//Executa o código uma vez e depois enquanto a condição for verdadeira

do {
    // block of code to be executed
} while (condition);


var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Apesar do i ser maior que zero, rodou pq a verificação não foi feita na primeira execução

console.log(result);

/** For */
for (initialization; condition; finalExpression) {
    // code to execute
  }

//Imprimir números de 1 a 100

for (let i = 0; i <= 100; i++) {
   console.log(i);
}

//O incremento não vai dentro do statement. No while, por exemplo, se você esquecer de incrementar, pode ser criado um loop infinito

/** For of */
for (value of iterable) {
    // some statement goes here
  }

  const someIterable = 'Ironhack';

  for (const value of someIterable) {
    console.log(value);
  }
  // the expected output:
  //I
  //r
  //o
  //n
  //h
  //a
  //c
  //k

  /** Break */
//USado para sair de um loop
let i = 0;

while (i < 5) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break;
  }
}

/** Continue */
//Pula uma das iterações de um loop
let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}
  