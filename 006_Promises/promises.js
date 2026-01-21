const promiseOne = new Promise(function(resolve, reject){
//do an async task
//db calls , cryptography , network
setTimeout(function(){
console.log('async task is completed');
resolve()

},1000)
})
promiseOne.then(function(){
    console.log('promise is resolved');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 is completed');
        resolve()
    },1000)

}).then(function(){
    console.log('promise 2 is resolved');
})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log('async task 3 is completed');
        resolve({ username: "chai", email: "chai@mail.com" })
    },1000)
})

promiseThree.then(function(username){
    console.log(username);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log('async task 4 is completed');
        let error = true;
        if(!error){
            resolve({ username: "hitesh", password: "1223" })
        }else{
            reject('error : something went wrong')
        }
    },1000)
})
promiseFour
    .then(function(user){
        console.log(user);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log('finally will execute always');
    })
//promise chaining

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 5 is completed');
        resolve(5)
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    //  const response = await promiseFive
    //     console.log(response);
  }
  
  consumePromiseFive();