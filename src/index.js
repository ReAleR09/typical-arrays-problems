
exports.min = function min (array) {
    if( !(array instanceof Array) || array.length === 0) {
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;
    for(let i in array) {
        if(array[i] < min) {
            min = array[i];
        }
    }

     return min;
}

exports.max = function max (array) {
    if( !(array instanceof Array) || array.length === 0) {
        return 0;
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let i in array) {
        if(array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

exports.avg = function avg (array) {
    if( !(array instanceof Array) || array.length === 0) {
        return 0;
    }

    let sum = 0;
    for(let i in array) {
        sum += array[i];
    }

    return (sum / array.length);
}
