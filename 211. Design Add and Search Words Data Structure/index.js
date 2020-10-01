/**
 * Initialize your data structure here.
 */

class Node {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

}
var WordDictionary = function () {
    this.root = new Node();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curr = this.root;

    for (let ch of word) {
        if (curr.children[ch] === undefined) {
            curr.children[ch] = new Node();
        }
        curr = curr.children[ch];
    }
    curr.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    // BFS approach
    let queue = [{ node: this.root, i: 0 }];

    while (queue.length > 0) {

        let { node, i } = queue.shift();

        if (i === word.length) {
            if (node.isWord)
                return true;
            continue;
        }

        let char = word[i];

        if (char === ".") {
            if (node.children === undefined)
                continue;

            for (let ch in node.children) {
                let subChar = node.children[ch];
                queue.push({ node: subChar, i: i + 1 });
            }
        } else {
            if (node.children[char] === undefined)
                continue;

            queue.push({ node: node.children[char], i: i + 1 });
        }
    }
    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */