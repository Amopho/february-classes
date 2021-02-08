//Objects
//Object multiple properties and object value- key name (unique) and value always together
//const <namespace> = {}
const obj = {
  // const just to secure the object so no one can change it
  1: "Hadi",
  2: "Olga",
  3: "Zain",
};
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "xxx str",
  act: ["play", "stay", "eat"],
  fat: true,
};
console.log(userObj.name);
console.log(typeof userObj);
console.log(userObj.act[1]);

//Accesing properties
// 1-with (bracket notation)
console.log(userObj["act"][2]);
// 2-with (dot notation)
console.log(userObj.act[1]);
const obj2 = {};
console.log(typeof obj2);
//
obj2.name = "Hadi";
// assigning
obj2["age"] = 31;

obj2.age = 33;
console.log(obj2);

const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);

//COOL FOR - loop which grabs all the properties in the object and do things with them, works only with bracket notation:
for (let prop in userObj) {
  // prop stands for property
  console.log(`userObj.${prop}`);
  console.log(`${prop}: ${userObj[prop]}`);
}

// Tell me more about you
const person = {
  name: "Alina",
  age: 34,
  birthYear: 1986,
  gender: "female",
  height: 170,
  print: function () {
    console.log(
      `I am ${person.name}, my age is ${person.age} I was born in ${person.birthYear}`
    );
    console.log(
      `I am ${this.name}, my age is ${this.age} I was born in ${this.birthYear}`
    ); // this. - works within this object we are currently in
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

person.print();
console.log(person.old());
//object keys
let keysArr = Object.keys(person);
console.log(keysArr);

//Object.values
console.log(Object.values(person));

//Object assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Gray", "Black"], pet: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);

//Object.defineProperty()
const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: "Ducati",
  writable: true,
});
console.log(newPersonObject.bike);
newPersonObject.bike = 33;
console.log(newPersonObject.bike);

//Object.defineProperties
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: false,
  },
  p2: {
    value: "nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});

console.log(newPersonObject.p1);

//Assignments before the midday

// Ex1 Object yourPersonObj.
//Create an object named person2. Loop through the object and print both the property and value of the object.
const person2 = {
  name: "Alie",
  age: 34,
  city: "Dresden",
};
for (let prop in person2) {
  console.log(`${prop}: ${person2[prop]} `);
}

// Ex2
// Create a function that returns an array of the properties of a javascript object.
// const objPro = (obj) => {
//   return Object.keys(obj);
// };

// console.log(objPro(person2));

// console.log(objPro(person));

// Ex3
//Given the following object
//Create a method that prints the following:
//"Zain Oil a student in class 48"
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();

//Get Values. //
//Create a function that returns an array of all values of an object’s properties.

//Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

//List Properties. Create a function that returns an array of properties of a javascript object.

// Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]

// Ex SPICY ONE
// Object array
//The have an object they wanrt me to come back with the array in the array

// objectToArray({
//     cats: 1,
//     dogs: 2,
//     turtles: 4,
// }

//delete

// delete objectToArray.cats;
// console.log()

//hasOwn

// Object.seal() - you can modify, but can't add

// [{}, {}, {}] - array of objects

// [[],[],[]] array of arrays

/* {
  ob1:{

  },
  ob2
}

