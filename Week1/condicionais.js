if (age <= 16) {
    console.log('You have a teenager discount.');
  } else if (age >= 65) {
    console.log('You have a senior citizen discount :)');
  } else {
    console.log("Sorry, you don't have any discount :(");
  }

  const number1 = parseInt(prompt('First number:'));
const number2 = parseInt(prompt('Second number:'));

if (number1 === number2) {
  console.log('The numbers are equal.');
} else {
  if (number1 > number2) {
    console.log('Number 1 is bigger than number 2.');
  } else {
    console.log('Number 1 is smaller than number 2.');
  }
}

/** Muitas condições */
const name = prompt('Favorite Game of Thrones main character:');
let house = '';

if (name === 'Khal Drogo') {
  house = 'Dothraki Horselord';
} else if (name === 'Daenerys') {
  house = 'Targaryen';
} else if (name === 'Jon Snow' || name === 'Sansa' || name === 'Arya') {
  house = 'Stark';
} else if (name === 'Cersei' || name === 'Tyrion' || name === 'Ser Jaime') {
  house = 'Lannister';
} else {
  house = 'Other';
}

/**  Switch */
switch (expression) {
    case value1:
      // executed code when the expression === value1
      break;
    case value2:
      // executed code when the expression === value2
      break;
    case value3:
      // executed code when the expression === value3
      break;
    default:
    // executed code when none of the values match the expression
  }

  /** Exemplo anterior com switch */
  const name = prompt('Favorite Game of Thrones main character:');
let house = '';

switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
}


  /** Switch multiplas opcoes */
  const name = prompt('Favorite Game of Thrones main character:');
let house = '';

switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  default:
    house = 'other';
}


/** Exemplo while */
let i = 0;

while (i <= 100) {
  console.log(i);
  i++; // this is the same as i = i + 1
}
/**The script follows the following rules:

Check if the value of i is lower or equal than 100
If yes, print in the console the value of i
Increment the value of the i by 1
Again check if the value of i is lower or equal to 100 and as long as it is, executes these steps over and over again.
*/

do {
    // block of code to be executed
  } while (condition);

const teste = false;

  do {
    console.log('Hello');
  } while (teste);


  /** FOr */
  for (initialization; condition; finalExpression) {
    // code to execute
  }

  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }

  /** Comparar com while que vc incrementa dentro */


  /** Exemplo for...of */
  for (value of iterable) {
    // some statement goes here
  }
  const someIterable = 'amsterdam';

for (const value of someIterable) {
  console.log(value);
}
// the expected output:
// a
// m
// s
// t
// e
// r
// d
// a
// m


/** Exemplo continue break */

/** However, when the continue statement is executed, it behaves differently for different types of loops:

In a while loop, the condition is tested, and if it is true, the loop is executed again
In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done

 */

/** Break */
let i = 0;

while (i < 5) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break;
  }
}

/** Continue */

let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}

The result of text will be

The number is: 1.
The number is: 2.
The number is: 4.
The number is: 5.

