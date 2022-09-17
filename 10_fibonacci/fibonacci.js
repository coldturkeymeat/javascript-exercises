const fibonacci = function(num) {
    if(num < 1) return "OOPS"
    let fibInt = fibNext = 1;
    let fibPrev = 0;
    for(let i=2; i<num; i++) {
        fibPrev = fibNext;
        fibInt += fibNext;
        fibNext = fibInt - fibPrev;
        //console.log(`i is ${i}`);
        //console.log(`fibInt is ${fibInt}`);
        //console.log(`fibPrev is ${fibPrev}`);
        //console.log(`fibNext is ${fibNext}`);
    }
    return fibInt;

};

// Do not edit below this line
module.exports = fibonacci;
