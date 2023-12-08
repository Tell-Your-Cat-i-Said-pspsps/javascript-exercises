const sumAll = function(num1, num2) {
    if (typeof num1 !== "number"|| typeof num2 !== "number" ||num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }
    else
    {
           let first;
    let last;
    if (num1 > num2)
    {
        first = num2;
        last = num1;
    }
    else if (num1 < num2)
    {
        first = num1;
        last = num2;
    }
    else{
        first = num1;
        last = num2;
    }
    let i = first;
    let sum = 0;
    while (i <= last)
    {
        sum += i;
        i++;
    }
    return sum; 
    }

};

// Do not edit below this line
module.exports = sumAll;
