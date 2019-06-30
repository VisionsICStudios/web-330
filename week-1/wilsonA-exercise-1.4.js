/*
============================================
; Title: Exercise 1.4
; Author: Professor Krasso
; Date: 21 February 2019
; Modified By: Aaron R. Wilson
; Description: This program demonstrates
; duck typing.
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 1.4')}\n`);

// Create a function constructor Car class with one parameter (model).
function Car(model) {
  this.model = model;
}

// Create a function constructor Truck class with two parameters (model, year).
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// Create a function constructor Jeep class with three parameters (model, year, color).
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// Add a prototype method to each class called “start” – hint: review the duck typing example.
Car.prototype.start = () => {

  // The prototype method should output “ added to the racetrack!”.
  return console.log(`A Car added to the racetrack!`);
}

// Add a prototype method to each class called “start” – hint: review the duck typing example.
Truck.prototype.start = () => {

  // The prototype method should output “ added to the racetrack!”.
  return console.log(`A Truck added to the racetrack!`);
}

// Add a prototype method to each class called “start” – hint: review the duck typing example.
Jeep.prototype.start = () => {

  // The prototype method should output “ added to the racetrack!”.
  return console.log(`A Jeep added to the racetrack!`);
}

let racetrack = null;


const broadcastResults = (array) => {
  // Define an empty racetrack array.
  array = [];

  // Create a driveIt function with one parameter (vehicle).
  const driveIt = (vehicle) => {

    // From within the driveIt function call the “start” function on the vehicle – hint: vehicle.start.
    vehicle.start();

    // Push the vehicle to the racetrack array.
    array.push(vehicle);
  }

  // Create three (3) vehicle classes.
  let porsche = new Car('Porsche');
  let hummer = new Truck('Hummer', 2011);
  let commander = new Jeep('Commander', 2008, 'Forrest Green');

  // Pass them through the driveIt() function.
  driveIt(porsche);
  driveIt(hummer);
  driveIt(commander);

  // Output a title and header for the purpose of displaying the results.
  console.log('\n-- The Following vehicles have been added to the racetrack --');

  // Iterate over the racetrack array.
  for (let i = 0; i < array.length; i++) {

    // Output the results to the console.
    console.log(`${array[i].constructor.name}: ${array[i].model}`);
  }
}

// Call the broadcastResults function to display the appropriate output.
broadcastResults(racetrack);
