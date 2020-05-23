/**
 * @param {string[]} words
 */
var WordDistance = function (words) {
    this.map = {};

    for(let i = 0; i < words.length; i++) {
        let word = words[i];

        if (this.map[word]) {
            this.map[word].push(i);
        } else {
            this.map[word] = [i];
        }
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    if(word1 === word2) return 0;

    let l1 = this.map[word1];
    let l2 = this.map[word2];

    let minDistance = Infinity;
    console.log("Minnn", l1, l2);
    for(let i = 0; i < l1.length; i++) {
        let index1 = l1[i];
        for(let j = 0; j < l2.length; j++) {
            let index2 = l2[j];
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }
    return minDistance;
}


