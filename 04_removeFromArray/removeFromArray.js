const removeFromArray = function(array,...items) {  

    for (item of items)
    {
        if (array.includes(item))
        {
            let itemIndex = array.indexOf(item);
            array.splice(itemIndex,1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
