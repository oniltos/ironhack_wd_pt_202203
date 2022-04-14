/**
 * Arrays e objetos
 */

//Listas
const students = [
    "Bob",
    "Susy",
    "Ted",
    "Sarah",
    "Bill"
  ];

//Estruturas complexas
const bob   = { name: "Bob", age: 17 };
const susy  = { name: "Susy", age: 18 };
const ted   = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill  = { name: "Bill", age: 19 };

//Acessar valores pelas chaves
console.log(bob.name); // <== Bob

console.log(susy.age); // <== 18

/**
 * Objetos em arrays
 */
const locations = [
    { lat: 33, long: 40, alt: 1000},
    { lat: 33, long: 41, alt: 1010},
    { lat: 33, long: 42, alt: 1005},
    { lat: 33, long: 43, alt: 1006},
    { lat: 33, long: 44, alt: 1007}
]

//Acessando propriedade de um elemento em um index
console.log(locations[3].lat)

locations.push( { lat: 33, long: 45, alt: 1007})

const location = { lat: 35, long: 44, alt: 1007}
locations.push(location)

/**
 * Arrays de arrays
 */
const duasDimensoes = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"],
    ["Thomas", "Barry", "Alex"]
]

console.log(duasDimensoes[1])
console.log(duasDimensoes[1][0])
console.log(duasDimensoes[0][2])

/**
 * Arrays de arrays de objetos
 */
 const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];

  console.log(classes[0]);
// [ { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
//   { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
//   { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
//   { firstName: 'Lulu', lastName: 'Considine', age: 20 },
//   { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
// ]

console.log(classes[0][2]);
// { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 }

console.log(classes[0][2].firstName);
// 'Ashleigh'

/**
 * Objetos dentro de objetos
 */
 const classRoom = {
    teacher:  { firstName: 'Greg', lastName: 'Dach', age: 38 }
  };

  console.log(classRoom.teacher.firstName); // <== 'Greg'

console.log(classRoom.teacher.age); // <== 38

const classRoom2 = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };

  console.log(classroom.teacher.address.city);

  /**
   * Arrays como valores das propriedades de objetos
   */
   const school = {
    name: "Fake School 1",
    classRooms: [
      {
        teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
        students: [
          { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
          { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
          { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
          { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
          { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
        ]
        },
      {
        teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
        students: [
          { firstName: 'Manley', lastName: 'Doyle', age: 18 },
          { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
          { firstName: 'Sid', lastName: 'Rohan', age: 30 },
          { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
          { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
        ]
      }
    ]
  }