let hero = {
    title: 'Hulk',
    fname: 'Bruce',
    lname: 'Banner',
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
}

module.exports = hero;