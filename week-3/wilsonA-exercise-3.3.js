/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 06 March 2019
; Modified By: Aaron R. Wilson
; Description: The Singleton Pattern.
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 3.3')}\n`);

// start program

// Build a DatabaseSingleton variable as a constructor function.
const DatabaseSingleton = (() => {

  // Create a mutable variable called instance equal to undefined.
  let instance;

  // Construct another function called createInstance
  const createInstance = () => {

    // Make a mutable variable called postgresDatabase that instantiates a new Object
    let postgresDatabase = new Object('Db instance created!');

    // Return the newly created postgresDatabase object as a variable containing that object.
    return postgresDatabase;
  }

  // The DatabaseSingleton variable, as a function, will return an object holding a single property as a method.
  return {

    // In the returned object, one of its properties is a getInstance method.
    getInstance: () => {

      // Implement a condition that checks to see if there is not an instance variable meaning "is it undefined"?
      if (!instance) {

        // mutate the instance variable assigning it the createInstance function.
        instance = createInstance();
      }

      // Return that mutated instance variable.
      return instance;
    }
  }
})(); // IIFE!

// Create another function called databaseSingletonTest to check/compare two (2) objects using the boolean.
const databaseSingletonTest = () => {

  // Make two (2) variables that instantiate two (2) like objects.
  const databaseInstance1 = DatabaseSingleton.getInstance();
  const databaseInstance2 = DatabaseSingleton.getInstance();

  // Return the output to the console the result of the boolean comparison.
  return console.log(`Same database instance? ${(databaseInstance1 === databaseInstance2)}`);
}

// Call the databaseSingletonTest function to perform the boolean comparison of the two (2) objects.
databaseSingletonTest();

// end program
