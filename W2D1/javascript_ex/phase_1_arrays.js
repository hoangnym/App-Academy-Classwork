
// Monkey Patch to Array Class
Array.prototype.uniq = function() {
    let new_arr = [];
    
    // for (let i = 0; i < this.length; i++) {
    //     if (new_arr.indexOf(this[i]) === -1) {
    //         new_arr.push(this[i]);
    //     }
    // }

    this.forEach(function(el) {
        if (!new_arr.includes(el)) {
            new_arr.push(el);
        }
    })

    return new_arr;
}


// let arr = [1,2,2,3,3,3];

// console.log(arr.uniq());



Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = (i+i); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}

// let sumArr = [1,2,2,3,3,3,-1,-2,-2,-3,3,-3]
// console.log(sumArr.twoSum());


Array.prototype.transpose = function() {

    // create empty array
    let columns = Array.from({ 
        length: this[0].length 
    }, () => Array.from({ 
            length: this.length 
        })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }
    return columns;
}



let matr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

console.log(matr.transpose());