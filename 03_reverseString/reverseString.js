const reverseString = function(reverse) {
    let output = '';
    for(let i=reverse.length - 1; i >= 0; i--){
        output += reverse[i];

    }
    console.log(output);
    return output;

};

// Do not edit below this line
module.exports = reverseString;
