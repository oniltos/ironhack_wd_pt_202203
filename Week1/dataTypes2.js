/** Boolean, null, undefined */
true || true; // => true
true || false; // => true
false || true; // => true
false || false; // => false
false || 4 > 2; // true

/** AND */

true && true; // => true
true && false; // => false
false && true; // => false
false && false; // => false
true && 4 > 2; // => true

/** Not */
!true; // => false
!false; // => true
!(4 > 2); // => false

/** Undefined */
let name;
console.log(name); // <== undefined

/** Null */
let name = null;
console.log(name); // <== null

/** Truthy Falsy */
Falsy
true (the keyword)	false (the keyword)
'0' (as string)	0 (as number)
'false' (as string)	'' (empty string)
{}	null
[ ]	undefined
35 (as number)	NaN
new Date()	
Try putting any of these into the if statement and check the result.

if ('false') {
  console.log('Passed thingy is truthy');
} else {
  console.log('Passed thingy is falsy');
}

/** Immutability */

let city = 'miami';
console.log(city[0]); // <== m
city[0] = 'M';
console.log(city); // <== miami
Don’t get confused here because values are immutable but variables are mutable which means you can reassign them:

let city = 'miami';
console.log(city); // <== miami

// we CAN re-assign our variable to another value
city = 'berlin';
console.log(city); // <== berlin

// but still CAN NOT change the value "berlin"
city[0] = 'B';
console.log(city); // <== berlin


/** Strings que não se alteram */
const message = "Don't be sad, be happy!";
console.log(message.slice(0, 3)); // <== Don
console.log(message); // <== Don't be sad, be happy!
