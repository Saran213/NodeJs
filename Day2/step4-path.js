// Path Module

const { log } = require('console');
let path = require('path'); // import path module
// console.log(path);

// Path Module with resolve function 
/*
console.log('Without path module', 'G:\NodeJs\Day2');
console.log('With path module', path.resolve('G:\NodeJs\Day2'));
console.log('Without path module', 'G:/NodeJs/Day2');
console.log('With path module', path.resolve('G:/NodeJs/Day2'));
*/

// Path Module with join function
let folders = ['admin', 'guest', 'user'];
let files = ['index.html', 'profile.html', 'details.html'];
// console.log(folders[0], files[0]);

// console.log(folders[0] + '/' + files[0]); // works on mac
// console.log(folders[0] + '\' + files[0]); // error
// console.log(path.join(folders[0], files[0])); // admin folder's index.html
// console.log(path.join(folders[1], files[2])); // guest folder's details.html

let mypath = path.normalize('G://\NodeJs\//Day2\////\step4-path.js');
console.log(mypath);