let hero = {
    title: 'Black widow',
    fname: 'Natasha',
    lname: 'Ramanoff',
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
}

module.exports = hero;