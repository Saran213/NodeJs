let fs = require('fs');

fs.watchFile('data/temp.txt', { interval: 500 }, () => console.log('File was updated'))
var count = 0;
let si = setInterval(() => {
    fs.appendFile('data/temp.txt', Math.round(Math.random() * 10) + '\n', (error) => {
        if (error) {console.log('Error: ', error);}
        else{
            console.log('Number added');
            count++;
            if (count > 10) {
                clearInterval(si)
            }
        }
    })
}, 1000)