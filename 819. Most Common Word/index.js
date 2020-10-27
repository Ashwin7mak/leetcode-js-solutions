/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().split(/\W+/);

    let bannedMap = {}, map = {};
    
    for(let words of banned) {
        if(!bannedMap[words]) {
            bannedMap[words] = 1;
        } else {
            bannedMap[words]++;
        }
    }
    
    for(let words of paragraph) {
        if(!bannedMap[words]) {
            if(!map[words]) {
            map[words] = 1;
            } else {
                map[words]++;
            }
        }    
    }

    let maxFrequency = 0, result = '';
    
    for(let key in map) {
        if(map[key] > maxFrequency) {
            maxFrequency = map[key];
            result = key;
        }
    }    
    return result;
};