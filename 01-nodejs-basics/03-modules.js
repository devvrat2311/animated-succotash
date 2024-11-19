/*
Modules

CommonJS, every file is module (by default)
Node uses CommonJS Library
Every file in node is a module
Modules - Encapsulated code (Only share minimum)
*/
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavour');
const mind = require('./07-mindGrenade');

console.log(names);

sayHi(names.john);
sayHi(names.peter);

sayHi(data.singlePerson.name);

console.log(data.items[0], data.items[1]);
