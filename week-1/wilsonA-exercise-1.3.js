/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 21 February 2019
; Modified By: Aaron R. Wilson
; Description: This program demonstrates
; object creation using a constructor. This
; is a class refresher.
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('../header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 1.3') + '\n');

// start program

// Create a constructor function called CellPhone that creates a object with four (4) properties as its prototype.
function CellPhone (manufacturer, model, color, price)
{
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  // Below are the methods used to output some of the objects properties.
  this.getPrice = () => {
      return `Price: ${this.price}`;
  };

  this.getModel = () => {
    return `Model: ${this.model}`;
  };

  this.getDetails = () => {
    return `Manufacturer: ${this.manufacturer}\n${this.getModel()}\nColor: ${this.color}\n${this.getPrice()}`;
  };
};
let mobile = new CellPhone('Apple','6s', 'Black', '$350');

// Output to the console the title header and the results of the getDetails method.
console.log('-- DISPLAYING CELL PHONE DETAILS --');
console.log(mobile.getDetails());
// end program
