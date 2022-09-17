const removeFromArray = function(arr, ...moreArgs) {
    let index = 0;
    for (i = 0; i < moreArgs.length; i++){
        index = arr.indexOf(moreArgs[i]);
        if(index >= 0){
            arr.splice(arr.indexOf(moreArgs[i]),1);
        }else continue;
    }
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
