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

//More advanced approach

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

/ Extra work :)
// create a repo for this app. we are coming later to it :)
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

//   numbersCount();

//   <<<<<<< HEAD

//   Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
//     12345
//     1234
//     123
//     12
//     1
//   */

// break;
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
// // // Bounce: Forth shape
// // // Be creative and show us your Artistic side
// // // */

// // // const draw = () => {
// // //   console.log("First shape");

// // //   let picture1 = "";
// // //   for (let i = 1; i <= 4; i++) {
// // //     i > 1 ? (picture1 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture1 += "T";
// // //     }
// // //   }
// // //   console.log(picture1);

// // //   console.log("Second shape");

// // //   let picture2 = "";
// // //   for (let i = 4; i >= 1; i--) {
// // //     i < 4 ? (picture2 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture2 += "*";
// // //     }
// // //   }
// // //   console.log(picture2);

// // //   console.log("Third shape");
// // //   let j = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     j += i + "";
// // //     console.log(j);
// // //   }

// // //   console.log("Forth shape");

// // //   let picture4 = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     for (let j = 1; j <= 5; j++) {
// // //       picture4 += `ʕ•ᴥ•ʔ`;
// // //     }
// // //     picture4 += `\n`;
// // //   }
// // //   console.log(picture4);
// // // };

// draw();

console.log("--------Exercise 7-------");

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
  numbersCount();
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

//   numbersCount();

//   <<<<<<< HEAD

//   Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
//     12345
//     1234
//     123
//     12
//     1
//   */

// break;
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
// // // Bounce: Forth shape
// // // Be creative and show us your Artistic side
// // // */

// // // const draw = () => {
// // //   console.log("First shape");

// // //   let picture1 = "";
// // //   for (let i = 1; i <= 4; i++) {
// // //     i > 1 ? (picture1 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture1 += "T";
// // //     }
// // //   }
// // //   console.log(picture1);

// // //   console.log("Second shape");

// // //   let picture2 = "";
// // //   for (let i = 4; i >= 1; i--) {
// // //     i < 4 ? (picture2 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture2 += "*";
// // //     }
// // //   }
// // //   console.log(picture2);

// // //   console.log("Third shape");
// // //   let j = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     j += i + "";
// // //     console.log(j);
// // //   }

// // //   console.log("Forth shape");

// // //   let picture4 = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     for (let j = 1; j <= 5; j++) {
// // //       picture4 += `ʕ•ᴥ•ʔ`;
// // //     }
// // //     picture4 += `\n`;
// // //   }
// // //   console.log(picture4);
// // // };

// draw();

console.log("--------Exercise 7-------");

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
  numbersCount();
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
