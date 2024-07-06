let ironman = require('./ironman');
let hulk = require('./hulk');
let black_widow = require('./blackwidow');
let thor = require('./thor');

/*
let ironman_fullname = ironman.fullnam
let hulk_fullname = ironman.fullname
let blac_widow_fullname = blac_widow.fullname
let thor_fullname = thor.fullname
*/

module.exports = {
    'avangers' : {
        ironman : {
            title : ironman.title,
            fullname : ironman.fullname(),
        },
        thor : {
            title : thor.title,
            fullname : thor.fullname(),
        },
        black_widow : {
            title : black_widow.title,
            fullname : black_widow.fullname(),
        },
        hulk : {
            title : hulk.title,
            fullname : hulk.fullname(),
        }
    }
}