const repeatString = function(str, numTimes) {
    if (numTimes < 0) {
        return 'ERROR'
    } else {
        let newStr = '';
        for(let i = 0; i < numTimes; i++) {
            newStr += str;
        }
        return newStr;
    }

};

// Do not edit below this line
module.exports = repeatString;
