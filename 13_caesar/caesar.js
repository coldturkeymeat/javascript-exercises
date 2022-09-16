const caesar = function(str, shift) {
    let caesar = "";
    let upLow;
    let max;

    for (let i = 0; i < str.length; i++){
        if ( str[i].match(/[.,:!?" "]/)) caesar += str[i];
        else{
            upLow = str[i].toLowerCase() === str[i] ? true : false;
            max = upLow ? 122 : 90;
            min = upLow ? 97 : 65;
            preCheck = str.charCodeAt(i) + (shift%26);
            if(preCheck < min) preCheck += 26;
            else if (preCheck > max) preCheck -= 26;
        
        caesar += String.fromCharCode(preCheck);
        }
    }
    return caesar;
};

// Do not edit below this line
module.exports = caesar;
