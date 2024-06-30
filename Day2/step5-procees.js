// console.log(process.argv[2]); // saran
// console.log(process.argv[3]); // intel

let user = process.argv[2] || 'guest';
console.log(user); // without arguments = guest || with arguments = 'saran'[arg[2] which is given is] 