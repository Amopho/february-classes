// 3 types of errors
// (compilation aka compiler fails to compile, runtime, logic)
// try catch will find the runtime errors but not the parse errors like typo or syntax problems

// most of the error are coming from other places like eorking with data base or server internal issues,
// 'try { ... } catch (e) { ... }`

let userAge = 25;
if (userAge == 24) {
  console.log("Cool you are the best");
}

let userName = "";
try {
  //   cool();
  //   if (userName == "") throw "Sorry, I need userName";
  //   if (userName < 55) throw "Sorry, you are not kid anymore";
  console.log("I am try");
} catch (err) {
  console.log("There was an error:" + err);
} finally {
  console.log("I will run anyway");
}
console.log("Hi");

function printData() {
  console.log("I am wining");
}

//Timer
// const timerDisplay = setTimeout(printData, 3000); //1000 = 1s
const TimerDisplay = setTimeout(() => console.log("I am wining"), 3000);
// We will learn after HTML & CSS && SASS
//
// callbacks
// Promise
// async/ await
// RxJS
// and a lot more
