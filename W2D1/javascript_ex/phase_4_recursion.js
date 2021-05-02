
// receives a start and end value, returns an array from start up to end
function range(start, end) {
    if (start === end) {
        return [];
    }

    let r = range(start, end - 1);
    r.push(end - 1);
    return r;
}

// console.log(range(1, 5));



// sumRec(arr) - receives an array of numbers and recursively sums them
function sumRec(arr)  {
    if (arr.length === 1) { return arr[0]; };
    if (arr.length === 0) { return 0; };

    return arr[0] + sumRec(arr.slice(1, arr.length))

}

// console.log(sumRec(range(1, 10)));

// [1] => 1
// [1, 2] => 1 + [2]
// [1, 2, 3] => 1 + [2, 3] => 1 + 2 + [3]


function exponent1(base, exp) {
    if (exp == 0) {return 1};
    
    return base * exponent1(base, exp - 1);
}

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

// console.log(exponent1(1, 0));
// console.log(exponent1(2, 1));
// console.log(exponent1(3, 2));
// console.log(exponent1(3, 4));

function exponent2(base, exp) {
    if (exp == 0) {return 1};
    if (exp == 1) {return base};

    if (exp % 2 == 0) {
        return exponent2(base, exp/2) ** 2
    } else {
        return base * (exponent2(base, (exp - 1)/2) ** 2);  
    }
}

console.log(exponent2(1, 0));
console.log(exponent2(2, 1));
console.log(exponent2(3, 2));
console.log(exponent2(3, 4));

// # version 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
