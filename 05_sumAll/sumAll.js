const sumAll = function(a, b) {
    if(typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    }else if (a < 0 || b < 0) {
        return 'ERROR';
    }else{
        let sum = Math.min(a,b);
        for (let i = sum; i < Math.max(a,b); i++) {
            sum += (i+1);
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
