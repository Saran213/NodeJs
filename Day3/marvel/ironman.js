let hero = {
    title: 'Ironman',
    fname: 'Tony',
    lname: 'Stark',
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
}

module.exports = hero;