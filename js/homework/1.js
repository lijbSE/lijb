const spiralOrder = function (matrix) {
    const m = matrix;
    const num = matrix.length;
    const num2 = matrix[0].length;
    const set = [];
    let k = 0;
    for (let i = 0; i < num; i++) {
        
        if (i % 2)

            for (let j = 0; j < num2; j++) set.push(m[i].pop()), k++;

        else
            for (let j = 0; j < num2; j++) set.push(m[i].shift()), k++;
    }
    console.log(set);
    console.log(k);
};

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]];
//spiralOrder(arr);

// console.log(arr.length);
// console.log(arr[0].length);
// arr.push([7, 8]);
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

spiralOrder(arr);
