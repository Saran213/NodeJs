// console.log(require('./saranpath'));

// let obj = require('./saranpath');

// console.log(obj.myfun('Saran'));

// let path = require('node:path');
let Hero = require('./saranpath').Hero;

// console.log(path.join('firstname', 'lastname'));
// console.log(saranpath.join(['firstname','lastname']));

let hero = new Hero();
console.log(hero.fullName());
