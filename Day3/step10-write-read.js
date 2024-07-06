let fs = require('node:fs');

/*
function write(){
    fs.writeFileSync('data/temp.txt', 'Welcome to your Life');
    console.log('File is ready');    
}

fs.access('data', function(error){
    if(error){
        console.log('Error', error);
        fs.mkdirSync('data');
        write();
    }
    else{
        console.log('Folder by name data exists');
        write();
    }
}) */

// Create a file
// fs.writeFileSync('data/temp.txt', 'Welcome to your Life');
// console.log('File is ready');

var si = null; 
var count = 0;
function write(){
    fs.writeFile("data/temp.txt","welcome to your life \n",{ flag : "a" },function(error){
        if(error){console.log("Error ", error)}
        else{ console.log("file is ready"); }
    });
    count++
};

fs.access("data",function(error){
    if(error){
        console.log("Error", error);
        fs.mkdir("data",function(){
            si = setInterval(write,1000);
            if(count > 10){
                clearInterval(si);
            }
        });
    }   
    else {
        console.log("folder by name data exists");
        si = setInterval(write,1000);
        if(count > 10){
            clearInterval(si);
        }
    }
});