

const nums = [1, 2, 3, 4, 5];



// Array#myEach
Array.prototype.myEach = function(func) {
    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}


nums.myEach((num) => {
    console.log("square of " + num + " is " + num * num + ".");
})



// Array#myMap
Array.prototype.myMap = function(func) {
    const mappedArr = [];
    this.myEach(ele => mappedArr.push(func(ele)) );
    return mappedArr
}

console.log(nums.myMap( num => num * num ));


// Array#myReduce
Array.prototype.myReduce = function(func, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue

    arr.myEach(ele => result = func(result, ele));
    
    return result;
}

console.log(nums.myReduce( (total, item) => total + item));
console.log(nums.myReduce( (total, item) => total * item));