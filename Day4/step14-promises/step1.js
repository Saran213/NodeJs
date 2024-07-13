/*
// A Promise that contains the both producing code and the calls to the consuming code

Syntax
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {  code if successful  },
  function(error) {  code if some error  }
);
*/

// console.log(Promise); // Higher order function

// A promise that resolves 
// console.log(Promise.resolve('Promise that resolves')); 

// A promise that rejects
// console.log(Promise.reject('Promise that rejects'));

let found = true;
let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    if (found) {
      resolve('The promise is resolved');
    }else{
      reject('The promise is rejected');
    }
  }, 2000)
})

/*
promise.then(function(data){
  console.log('Resolved Message: ', data);
})
promise.catch(function(error){
  console.log('Rejected Message: ', error);
})
promise.finally(function(){
  console.log('The promise is completed');
}) 
*/
/*
promise.then(
  function(data){
    console.log("Resolved Message: ", data);
  }, function(error){
    console.log('Rejected Message: ', error);
  }
) 
*/

promise.then(function(data){
  console.log('Resolved Message: ', data);
  return data.toUpperCase();
})
.then(function(data){
  console.log('Resolved Message: ', data);
  return data.length;
})
.then(function(data){
  console.log('Resolved Message: ', data);
})
.catch(function(error){
  console.log('Rejected Message: ', error);
})
.finally(function(){
  console.log('The promise is completed');
})