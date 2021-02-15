//Destructuring objects as function parameters
function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(2, { age: 22 });

const userData = {
  firstName: "Steel",
  lastName: "soWhat",
  age: 21,
  single: true,
  get fulName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fulName(str) {
    let arr = str.split(" ");
    this.firstName;
  },
};

// getter
userData.fullName; //getting the object

//setter
userData.fullName; // filling the object
userData.fullName; // getting the new data

// constructor
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

//Before Midday assignment
// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Product(productName, prise, inventory) {
  this.productName = productName;
  this.prise = prise;
  this.inventory = inventory;
  this.display = function () {
    console.log(
      `Product name:${this.productName}, product prise: ${this.prise}, product inventory: ${this.inventory}`
    );
  };
}
let firstProduct = new Product("Fan", 30000, "Fan GmbH");
firstProduct.display();
let secondProduct = new Product("service", 500, "Servie inc.");
secondProduct.display();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data
let car = {
  modelName: "Honda Civic R type",
  modelNumber: "VIII",
  engineCapacity: 2,
  get fullCar() {
    console.log(`${this.modelName} ${this.modelNumber} ${this.engineCapacity}`);
  },
  set fullCar(str) {
    let arr = str.split(" ");
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.engineCapacity = [2];
  },
};
//getter
console.log(car.modelName);

//setter
car.modelName = "Audi SQ 8";
car.modelNumber = "I";
car.engineCapacity = 4;
console.log(`${car.modelName},${car.modelNumber}, ${car.engineCapacity}`);

// set car(str) {
//     let arr = str.split(" ");
//     this.modelName = arr[0];
//     this.modelNumber = arr[1];
//     this.capacity = arr[2];
//   },
// };
