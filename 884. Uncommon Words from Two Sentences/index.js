/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

/* 
    Hash-map approach
    - Combine both the sentences into one by splitting them based upon spaces
    - Use hash map to store the key values
    - return the result whose frequency is 1
*/
var uncommonFromSentences = function (A, B) {

    A = A.split(' ').concat(B.split(' '));

    let hash = {};

    for (let item of A) {
        if (hash[item] === undefined) {
            hash[item] = 1;
        } else {
            hash[item]++;
        }
    }

    const unCommonWords = Object.keys(hash).filter(word => hash[word] === 1);

    return unCommonWords.length > 0 ? unCommonWords : [];
};

/* Using extra map to check the visited 

        A = A.split(' ');
        B = B.split(' ');

        let hash = {};

        let visited = new Map();

        for(let word of A) {
            if(hash[word] === undefined && !visited.has(word)) {
                hash[word] = 1;
                visited.set(word, 'true');
            } else {
                hash[word]++;
            }
        }

        // console.log("HASH", hash);

        for(let word of B) {
            if(hash[word] === undefined && !visited.has(word)) {
                hash[word] = 1;
                visited.set(word, 'true');
            } else {
                delete hash[word];
            }
        }

        const unCommonWords = Object.keys(hash).filter(word => hash[word] === 1);

        return unCommonWords;


*/

