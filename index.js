/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
	this.name = name;
	this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
	this.isFlying = true;
};
Airplane.prototype.land = function () {
	this.isFlying = false;
};

/*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */

/*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.stomach = [];
}

Person.prototype.eat = function (edible) {
	if (this.stomach.length < 10) {
		this.stomach.push(edible);
	}
};

Person.prototype.poop = function () {
	this.stomach = [];
};

Person.prototype.toString = function () {
	return `${this.name}, ${this.age}`;
};

// const testPerson = new Person('Ethan', 29);
// testPerson.eat('Breakfast');
// console.log('stomach after eat: ', testPerson.stomach);
// testPerson.poop();
// console.log('stomach after poop: ', testPerson.stomach);
// console.log(testPerson.toString());

/*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

function Car(model, milesPerGallon) {
	this.model = model;
	this.milesPerGallon = milesPerGallon;
	this.tank = 0;
	this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
	this.tank += gallons;
};

Car.prototype.drive = function (distance) {
	const fuelUsed = distance / this.milesPerGallon;
	const isFuelFull = this.tank - fuelUsed >= 0;
	if (isFuelFull) {
		this.odometer += distance;
		this.tank -= fuelUsed;
	} else {
		const actualMilesAdded = this.tank * this.milesPerGallon;
		this.odometer += actualMilesAdded;
		this.tank = 0;
		return `I ran out of fuel at ${this.odometer} miles!`;
	}
};

// const testCar = new Car('Civic', 32);
// console.log('testCar: ', testCar);
// testCar.fill(10);
// console.log('testCar: ', testCar);
// testCar.drive(10);
// console.log('testCar: ', testCar);
// // testCar.drive(320);
// console.log('testCar: ', testCar.drive(340));
// console.log('testCar: ', testCar);

/*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(name, age, favoriteToy) {
	Person.call(this, name, age);
	this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
	return `Playing with ${this.favoriteToy}`;
};

/*
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Implicit binding - 'this' will reference the object that is to the left of the '.'
    2. Explicit binding - the object that 'this' will reference is purposefully set with .call()|.apply()|.bind()
    3. New binding - when using the new keyword and a constructor to create a new object 'this' will refer to the object/object data that you are passing into the constructor
    4. Window binding - if there is no other binding and you are not in strict mode, then 'this' will refer to the window by default.
  */

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
	return 'bar';
}

export default {
	foo,
	Person,
	Car,
	Baby,
};
