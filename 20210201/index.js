// let, var, const vd global
// global
//{
//loccal
//}

// functions inside function
// 3**3
// funtion main(num1, num2){
//     //outer function
//     function second(n) {
//     // inner function
//     return n*n;
//     }//
//     return second
//}

// closure

let number = 10;
function fum() {
  return number + number;
}
console.log(fum());

// invoking == calling
//functions that return other functions
// i am securing the counter, no one may change it, like in a basket in a store, add an item, if i want to secure it the only method is to use self invoke e.g. for closure: like it, klick it, add an item, It's anonymous function with no name, by using =>.
const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());

//SIAF
(function () {
  console.log("Hi");
})();
(() => {
  console.log("Hi");
})();

//IIFE - immediately- invoked function expression
const sum = ((x, y) => {
  return x + y;
})(3, 4);
console.log(sum);

// Before midday assignments

// Ex 1
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%

// My approach
function retirement(ageOfRetirement, age) {
  // outer function
  return (salaryAMonth, percentageSaved) =>
    salaryAMonth * ((ageOfRetirement - age) * 12) * percentageSaved; //inner function
}
const salaryOfALifetime = retirement(60, 40)(1000, 0.1);
console.log(salaryOfALifetime);

//With the use of SAFI
((ageB, ageOfRetirementB, salaryAMonthB, percentageSavedB) => {
  if (ageB >= ageOfRetirementB) {
    console.log("Too old");
  } else {
    let savingTime = ageOfRetirementB - ageB;
    console.log("Years left until you ll be old,", savingTime);
    let savingsMonths = savingTime * 12;
    console.log("Months left utnil you ll be old,", savingsMonths);
    let savedMoney = savingsMonths * salaryAMonthB * (percentageSavedB / 100);
    console.log(
      `In ${savingTime} years you ll get old, but you will have ${savedMoney} to spend`
    );
  }
})(40, 65, 2000, 5);
// age
// ageOfRetirement
// salaryAMonth
// yearsOfSavings = age - yearsOfSavings
// savingsAMonth = salaryAMonth * 0.1
// retirementMoney = yearsOfSavings * 12 * savingsAMonth

// If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000
