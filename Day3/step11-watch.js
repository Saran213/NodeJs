let fs = require('fs');

fs.watchFile('data/temp.txt', { interval: 500 }, function(newval, oldval){
    // console.log('Old value: ', oldval);
    // console.log('New value: ', newval);
    console.log('File was updated');
})
console.log('Watching the temp.txt file');