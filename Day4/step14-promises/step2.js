let firstPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve('The first promise is resolved');
            }else{
                reject('The first promise is rejected');
            }
        }, 3000)
    })
}

let secondPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve('The second promise is resolved');
            }else{
                reject('The second promise is rejected');
            }
        }, 500)
    })
}

let thirdPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(false){
                resolve('The third promise is resolved');
            }else{
                reject('The third promise is rejected');
            }
        }, 1000)
    })
}

/*
firstPromise()
.then(function(data){
    console.log('Resolved Message: ', data);
})
.catch(function(err){
    console.log('Rejected Message: ', err);
})
.finally(function(){
    console.log('The first promise is completed');
})
*/

/*
all the promises must resolve - 3 responses
any of the promises must resolve - 1 response
any the promises must resolve or reject - 1 response or 1 rejection
all the promises to settle
*/

// all the promises must resolve - 3 responses
/*
Promise.all([firstPromise(), secondPromise(), thirdPromise()])
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log('All promises are completed');
})
*/

// any of the promises must resolve - 1 response
/*
Promise.any([firstPromise(), secondPromise(), thirdPromise()])
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log('All promises are completed');
})
*/

// any the promises must resolve or reject - 1 response or 1 rejection
/*
Promise.race([firstPromise(), secondPromise(), thirdPromise()])
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log('All promises are completed');
})
*/

// all the promises to settle
Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log('All promises are completed');
})