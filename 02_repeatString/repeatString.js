const repeatString = function(string, num) {
    let output = '';
    if(num < 0){
        return 'ERROR'
    }
    else{
        for ( let i = 0; i < num; i ++){
            output += string;
        };
    }

    console.log(output);
    return output;
}
// Do not edit below this line
module.exports = repeatString;
