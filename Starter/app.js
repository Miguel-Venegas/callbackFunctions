// callback functions and closures

function tellMeWhenDone(callback){
    let a = 1000; // some work, i.e., sets up the memory space
    let b = 2000; // some work, i.e., sets up the memory space

    callback(); // this callback will run the function i give it
}

// this tellMeWhenDone function calls back the functions I provide. 
// this is taking advantage of first-class functions and closures

// For example: I call function tellMeWhenDone and give it a function expression. When function tellMeWhenDone is finished running, it calls the function I provided:

tellMeWhenDone(function(){
    console.log('I am done!');
});



tellMeWhenDone(function(){
    console.log('I am finished');
});

