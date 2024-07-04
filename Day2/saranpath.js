let user = 'saran';
let company = 'Intellipaat Remote based';
let city = 'Chennai';
let data = "My Component's data";

function myfun(user = 'Guest'){
    return 'Hello ' + user;
}

class Hero{
    fName = 'Tony';
    lName = 'Stark';
    fullName() {
        return this.fName + ' ' + this.lName;
    }
}

let path = {
    join: function(args = []){
        return args.reverse()
    }
}

// Common js way of exporting
// 2009
/*
module.exports.user = user;
module.exports.company = company;
module.exports.city = city;
*/

// 2011 or later
/*
module.exports = {
    user : user,
    company : company,
    city : city,
}
*/

// destructuring
module.exports = { user, comp : company, city, compdata : data, Hero, myfun, data };


// ECMA
// 2015 ES6
// 2016 ES6