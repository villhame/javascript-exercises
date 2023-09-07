const sumAll = function(num1, num2) {
    let small = 0;
    let large = 0;
    let sum = 0;
    if(num1 < 0 || num2 < 0){
        return 'ERROR'
    }
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)){
        return 'ERROR'
    }
    if(num1 > num2){
        large = num1;
        small = num2;
    }
    else{
        small = num1;
        large = num2;
    }
    console.log(small + ' ' + large);
    for(let i = small; i <= large; i++){
        sum = sum + i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
