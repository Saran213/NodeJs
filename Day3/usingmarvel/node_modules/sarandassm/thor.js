let hero = {
    title: 'Thor',
    fname: 'Thor',
    lname: 'Odin son',
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
}

module.exports = hero;