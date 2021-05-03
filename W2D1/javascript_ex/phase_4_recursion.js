
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


function exponent1(base, exp) {
    // exp(b, 0) = 1
    // exp(b, n) = b * exp(b, n - 1)

    if (exp == 0) {return 1};
    
    return base * exponent1(base, exp - 1);
}


// console.log(exponent1(1, 0));
// console.log(exponent1(2, 1));
// console.log(exponent1(3, 2));
// console.log(exponent1(3, 4));

function exponent2(base, exp) {
    // exp(b, 0) = 1
    // exp(b, 1) = b
    // exp(b, n) = exp(b, n / 2) ** 2             [for even n]
    // exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
    if (exp == 0) {return 1};
    if (exp == 1) {return base};

    if (exp % 2 == 0) {
        return exponent2(base, exp/2) ** 2
    } else {
        return base * (exponent2(base, (exp - 1)/2) ** 2);  
    }
}

// console.log(exponent2(1, 0));
// console.log(exponent2(2, 1));
// console.log(exponent2(3, 2));
// console.log(exponent2(3, 4));



function fibonacci(n) {
    // fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
    if (n == 0) { return 0 };
    if (n == 1) { return 1 };

    return fibonacci(n-1) + fibonacci(n-2)

}

// 2 ==> [0, 1, 1] => [0, 1] << [0] + [1]

// console.log(fibonacci(1));
// console.log(fibonacci(0));
// console.log(fibonacci(2));
// console.log(fibonacci(3));

function fib_seq(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(fibonacci(i));
    }
    return arr
}


console.log(fib_seq(1));
console.log(fib_seq(0));
console.log(fib_seq(2));
console.log(fib_seq(5));


