function findDisappearedNumbers(nums) {
    let result = [];

    //Iterate through the loop
    //From the index 1 to last element + 1 to catch hold the missing numbers
    for(let i = 1; i < nums.length + 1; i++) {
        //If the element(missed index) is not present push into the result
        if(nums.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}