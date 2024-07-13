let firstPromise = async function(){
    /*
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve('The first promise is resolved');
            }else{
                reject('The first promise is rejected');
            }
        }, 3000)
    })
    */
   return new Promise(function(resolve, reject){
    setTimeout(function(){
        if(false){
            resolve('The first promise is resolved');
        }else{
            reject('The first promise is rejected');
        }
    }, 3000)
   })
}

firstPromise()
.then(function(res){
    console.log('Response: ', res);
})
.catch(function(err){
    console.log('Error: ', err);
})
.finally(function() {
    console.log('The promise is completed');
})

