/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 06 March 2019
; Modified By: Aaron R. Wilson
; Description: The Factory Pattern.
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('../header.js');

// Output to the console the header info.
console.log(`${header.display('Aaron', 'Wilson', 'Exercise 3.2')}\n`);

// start program

// Postgres function constructor.
function Postgres(properties) {
  this.username = properties.username || 'admin';
  this.password = properties.password || 's3cret';
  this.server = properties.server || 'localhost:5432';
}

// MySql function constructor.
function MySql(properties) {
  this.username = properties.username || 'ca-admin';
  this.password = properties.password || 'ca-s3cret';
  this.server = properties.server || 'localhost:8000';
  this.version = properties.version || 5.7;
}

// Aaron's added code.

// Oracle function constructor.
function Oracle(properties) {
  this.username = properties.username || 'theoracle';
  this.password = properties.password || '0r@cl3';
  this.server = properties.server || 'localhost:8888';
  this.version = properties.version || 8.8;
}

// Informix function constructor.
function Informix(properties) {
  this.username = properties.username || 'admix';
  this.password = properties.password || 'Iw40rw!X';
  this.server = properties.server || 'localhost:9876';
}

// DatabaseFactory function constructor.
function DatabaseFactory() {}

// Assign MySql to
DatabaseFactory.prototype.databaseClass = MySql;

DatabaseFactory.prototype.createDatabase = function(properties) {

  if (properties.databaseType === 'MySql') {
      this.databaseClass = MySql;
  }

  if (properties.databaseType === 'Postgres') {
      this.databaseClass = Postgres;
  }

  if (properties.databaseType === 'Oracle') {
    this.databaseClass = Oracle;
  }

  if (properties.databaseType === 'Informix') {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

const postgresFactory = new DatabaseFactory();
const postgres = postgresFactory.createDatabase({
  databaseType: 'Postgres',
  username: 'admin',
  password: 'SuperSecret'
});

const mySqlFactory = new DatabaseFactory();
const mySql = mySqlFactory.createDatabase({
  databaseType: 'MySQL',
  username: 'default',
  password: 'password'
});

const oracleFactory = new DatabaseFactory();
const oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: 'OracleOne',
  password: '0r@cl3',
  server: 'localhost:1234',
  version: 'og1.0'
});

const informixFactory = new DatabaseFactory();
const informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: 'MisterMix',
  password: '!n40Rw!X!',
  server: 'localhost:8888'
});


const outputMyObjectOne = (obj) => {

  // Output to the console the two new database objects.
  return console.log(`Oracle {\n username: ${obj.username},\n password: ${obj.password},\n server: ${obj.server},\n version: ${obj.version}\n }\n`);
}

const outputMyObjectTwo = (o) => {

  // Output to the console the new database object.
  return console.log(`Informix {\n username: ${o.username},\n password: ${o.password},\n server: ${o.server},\n }`);
}

// Call both object output functions passing in the objects as arguments.
outputMyObjectOne(oracle);
outputMyObjectTwo(informix);

// end program
