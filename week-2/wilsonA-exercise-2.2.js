/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 01 March 2019
; Modified By: Aaron R. Wilson
; Description: A prototype exercise.
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 2.2')}\n`);

// start program

let person = null;
let aaron = null;
let output = null;

// Build a function passing in 2 parameters.
let createMe = (p, a, x) => {
    // Create an object literal Person with one function, getAge().
    p = {

        // Object's constructor methods are made below. (NOTE: Constructor functions can't be ES5, ES6 functions. They'll go as undefined)
        getAge: function() {

            // The getAge() function should return the Person’s age.
            return this.age;
        }
    }

    // Create an object literal output with one function, getOutput().
    x = {

        // Object's constructor methods are made below. (NOTE: Constructor functions can't be ES5, ES6 functions. They'll go as undefined)
        getOutput: function() {

            // The getOutput() function should return the object’s output.
            return this.output;
        }
    }

    // Create a new object literal, passing in the getAge() function.
    a = Object.create(p, {

        // From within the new object literal define an age and fullname function (see the prototype example for more details).
        'age': {
            'value': 47
        },
        'fullname': {
            'value': 'Aaron Wilson'
        }
    });

    // Create a new object literal, passing in the getOutput() function.
    let one = Object.create(x, p, a, {

        // Call the console.log() function and output the Persons fullname.
        'output': {
            'value': console.log(`\nThe person's full name is: ${a.fullname}`)
        }
    });

    // Call the console.log() function and output the age (use the getAge() function).
    let two = Object.create(x, p, a, {

        // Call the console.log() function and output the Persons fullname.
        'output': {
            'value': console.log(`The person's age is: ${a.getAge()}`)
        }
    });

    // Output the results of the console.
    one.getOutput();
    two.getOutput();
}

// Call the createMe function passing in both null variables as it's arguments to output the results.
createMe(person, aaron, output);

// end program
