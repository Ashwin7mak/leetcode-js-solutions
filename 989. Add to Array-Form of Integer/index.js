var addToArrayForm = function (A, K) {
    // convert A to string using join()
    const string = A.join('');
    // Convert A as string to BitInt to work as integers
    const number = BigInt(string) + BigInt(K);
    // Convert back the integers to array;
    return Array.from((number).toString());
};