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
