/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 28 November 2018
; Modified By: Aaron R. Wilson
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/

/* I'm gonna replicate the assignment exactly the
* way it is shown in the example. I'm also gonna go with 
* ES standards. If you think it's too much, let me know?
*/

const fullName = "Aaron Wilson"; // "const" standard opposed to "var".
const assignNum = 1.5;
const assignment = "Assignment " + assignNum; // concatenation,
const myDate = new Date();
const todayDate = "Date: " + myDate.toLocaleDateString; // concatenation.

const firstName = "First Name: Aaron";
const lastName = "Last Name: Wilson";
const addNum = 532;
const zipCode = 19015;
const pay = 16.54;
const address = "Address: " + addNum + " W Brookhaven Rd Brookhaven, PA " + zipCode; // concatenation.
const payRate = "Pay Rate: " + pay;
const hired = new Date(2012, 1, 21); // Customized date 
const hireDate = "Hire Date: " + hired.toLocaleDateString; // concatenation.

// Output to console.
console.log(fullName);
console.log(assignment);
console.log((myDate.getMonth()+1) + '/' + myDate.getDate() + '/' +  myDate.getFullYear()); // concatenation.
console.log("-----------------"); // manual spacing.
console.log(" "); // manual spacing.
console.log(firstName);
console.log(lastName);
console.log(address);
console.log(payRate);
console.log((hired.getMonth()+1) + '/' + hired.getDate() + '/' +  hired.getFullYear()); // concatenation.