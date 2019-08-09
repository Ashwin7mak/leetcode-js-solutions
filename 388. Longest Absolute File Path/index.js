/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {

    // Split the string based on \n
    //  A \tB \tC \t\tD.ext
    let nodes = input.split('\n');

    let paths = [];

    let result = [];

    for(let i = 0; i < nodes.length; i++) {

        let ele = nodes[i];

        // Count the no of \t for every element in str
        let tabs = ele.match(/\t/g);

        tabs = tabs ? tabs.length : 0;
        // console.log("Tabss", tabs);
        // Replace them with empty ''
        ele = ele.replace(/\t/g, '');

        let depthDiff = result.length - tabs;

        if(depthDiff >= 0) {
            result.splice(tabs, result.length);
        }
        // console.log("ele", ele, tabs);

        // console.log("==", result, paths);
        // Check if the ele contains atleast one dot(.) followed by word at the end of string
            // If so push the list of elements separated by (/) into paths array
            // If not push the element into result array
        if(ele.match(/\.\w+$/) != null) {
            paths.push(result.concat(ele).join('/'));
        } else {        
            result.push(ele);
            // console.log('YESS', result);
        }

    }
    
    // Finding longest path
    let longestPath = 0;

    for(let j = 0; j < paths.length; j++) {
        longestPath = Math.max(paths[j].length, longestPath);
        console.log(paths[j], longestPath);
    }
    
    return longestPath;

}


lengthLongestPath("dir\n\tsubdir1\n\t\ttxt.ext\n\tsubdir2\n\t\tfile.ext");