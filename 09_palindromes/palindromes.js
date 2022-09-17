const palindromes = function (str) {
    let regex = /\p{P}+/gu;
    let unPunct = str.replace(regex,"").toLowerCase();
    unPunct = unPunct.replace(/\s+/g,"");
    console.log(`${unPunct} is the word`);

    console.log(`${unPunct} is not div by 2`);
    for (let i = 0, j = unPunct.length - 1; i < (unPunct.length)/2; i++, j--) {
        if (unPunct[i] != unPunct[j]){
            console.log(`${unPunct[i]} does not equal ${unPunct[j]}`);
            return false;
        }            
        else continue;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
