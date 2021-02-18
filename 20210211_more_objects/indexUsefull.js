// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
const scrabbleTiles = [
  // grabbing a tiles
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]; // sum of scores from tiles in a grab - 28

function totalScore(arr) {
  let scores = 0; //score before summing the owned tiles
  for (let i = 0; i < arr.length; i++) {
    // take every tile and add the score written on it
    scores += arr[i]["score"]; //accessing the values by means of property "score" in every following element of the array of objects, every of which content has 2 properties
  }
  return scores; // return the result of sum
}
console.log(totalScore(scrabbleTiles));

//Scrabble More advanced approach

const totalScore1 = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};

console.log(totalScore1(scrabbleTiles));

// Multiples of Three
function multiplesOfThree() {
  let str = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      str += `${i} `;
    }
  }
  return str.trim();
}

console.log(multiplesOfThree());

// Password generator
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

function generatePassword() {
  let inputPass = "";
  let availableCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (i = 1; i <= 30; i++) {
    let char = Math.floor(Math.random() * availableCharacters.length + 1);

    inputPass += availableCharacters.charAt(char);
  }

  return inputPass;
}

console.log("Your new password: " + generatePassword());


console.log(`_______________________________________________`)

/*  Finish the following function so it outputs looks like this:
  1
  12
  123
  1234
  12345
   const numbersCount = () => {
    for (let i = 0; i <= 5; i++) {
      // something
      for (let j = 1; j <= i; j++) {
          // something
      }
        // something
    }
  };

//     /*
// Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
//   12345
//   1234
//   123
//   12
//   1
// */

const numbersCount = () => {
  let text;
  4 >= 0;
  for (let i = 5; i >= 0; i--) {
    something;
    i = 3;
    text = "";
    text = "";
    5 <= 4;
    for (let j = 1; j <= i; j++) {
      j = 5;
      something;
      text += j;
      "123" + 4;
    }
    something;
    console.log(text);
    ("1234");
  }
};

// Breaking out of a loop:
/*

T
TT
TTT
TTTT

*/
let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

// two ways of solving the drawing task
const drawing = () => {
  // First way
  let picture = "";
  for (let i = 1; i <= 4; i++) {
    // loop for each line
    i > 1 ? (picture += "\n") : null; // add newline character after each line
    for (let j = 1; j <= i; j++) {
      //loop for each character
      picture += "T";
    }
  }
  console.log(`${picture} \n`);

  // Second way
  let picture1 = "T";
  for (let i = 1; i <= 4; i++) {
    console.log(picture1.repeat(i));
  }
};

drawing();

  /* numbersCount();
  Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
    12345
    1234
    123
    12
    1
  */

const numbersCount1 = () => {
  let str = "";
  for (let i = 0; i <= 5; i++) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);
};
numbersCount1();

const numbersCountReverse = () => {
  let str = "";
  for (let i = 5; i >= 0; i--) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);
};
numbersCountReverse();

// Breaking out of a loop:
/*

T
TT
TTT
TTTT

*/
let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

// two ways of solving the drawing task
const drawing = () => {
  // First way
  let picture = "";
  for (let i = 1; i <= 4; i++) {
    // loop for each line
    i > 1 ? (picture += "\n") : null; // add newline character after each line
    for (let j = 1; j <= i; j++) {
      //loop for each character
      picture += "T";
    }
  }
  console.log(`${picture} \n`);

  // Second way
  let picture1 = "T";
  for (let i = 1; i <= 4; i++) {
    console.log(picture1.repeat(i));
  }
};

drawing();

console.log("--------Exercise 7-------");

/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT
Second shape
****
***
**
*
Third shape
1
12
123
1234
12345

// draw();

*/

console.log(`____________________________________________________________`)
// Loops in arrays
//for of arr
let family = [
  ["Zain", 22, "teacher"],
  ["Olga", 40, "chef"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// forEach arr
family.forEach((arr) => arr.forEach((element) => console.log(element)));
//for of arr
for (let [key, val] of Object.entries(zain)) {
  console.log(`${key}: ${val}`);
}

// constructor template
function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey ${this.name}, you are too old ${this.age} and you do ${this.act}`
    );
  };
}
let zain = new Person("Zain", (21)[("sleep", "eat")]);
zain.printOut();
const olga = new Person("Olga", 40, "No thing");
olga.printOut();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data
let car = {
  modelName: "Honda Civic R type",
  modelNumber: "VIII",
  engineCapacity: 2,
  get data() {
    console.log(
      `${this.modelName} ${this.modelNumber} ${this.engineCapacity}`
    );
  },
  set data(obj) {
    car.modelName = obj.name;
    car.modelNumber = obj.num;
    car.engineCapacity = obj.cap;
  },
  // set carNew(str) {
  //   let arr = str.split(" ");
  //   car.modelName = arr[0];
  //   car.modelNumber = arr[1];
  //   car.engineCapacity = arr[2];
  // },
};
//getter
car.data;

//setter
car.data = { name: "Audi SQ 8", num: "I", cap: 4 }; // filling the object
car.data; // getting new data

class Thermostat {
  constructor(fahrenheit) {
    this.celsius= 5/9* (fahrenheit-32);
  }
  get temperature() {
    return this.celsius;
  }
  set temperature(updateTemp) {
    this.celsius= updateTemp;
  }
}

const= therm = new Thermostat(76);