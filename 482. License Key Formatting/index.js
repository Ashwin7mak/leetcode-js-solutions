/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    // Remove all the -s and convert all the characters in UpperCase
    S = S.replace(/-/g, '').toUpperCase();
    //  Use another variable to store the split characters
    let license = S.split('');

    console.log('String', S, license, typeof (license));
    //Iterate through the characters from the end to K times
    for (let i = license.length - 1 - K; i >= 0; i -= K) {
        license[i] = license[i] + '-';
    }
    // Join the characters to form the result
    return license.join('');
};