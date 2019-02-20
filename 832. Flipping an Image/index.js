var flipAndInvertImage = function (A) {

    let res = [];

    //Looping through the arrays and reversing
    for (let i = 0; i < A.length; i++) {
        let reverse = A[i].reverse();

        let newArr = [];
        // Do XOR operation on the reversed element and push into newArr array
        for (let j = 0; j < reverse.length; j++) {
            if (reverse[j] == 0) {
                newArr.push(1);
            } else {
                newArr.push(0);
            }
        }
        res.push(newArr);
    }
    
    return res;
};