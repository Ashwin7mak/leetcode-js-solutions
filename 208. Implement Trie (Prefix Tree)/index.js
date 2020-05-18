/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;

    for (let char of word) {
        if (node[char] == null) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.traverse = function (word) {
    let node = this.root;

    for (let char of word) {
        if (node[char] == null) {
            return null;
        }
        node = node[char];
    }
    return node;
}

Trie.prototype.search = function (word) {
    let node = this.traverse(word);
    return node != null && node.isWord === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.traverse(prefix) != null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */