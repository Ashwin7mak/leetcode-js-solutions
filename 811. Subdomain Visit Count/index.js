/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {

    let hash = {};

    let visits = [];

    for (let i = 0; i < cpdomains.length; i++) {
        // Split the cpdomains based upon the space   ["900", "leetcode.com"]
        let domains = cpdomains[i].split(" ");
        // Capture each domains ["leetcode.com"]
        let subDomain = domains[1].split(".");
        let count = parseInt(domains[0]);
        let domainsArray = [];

        for (let t = 0; t < subDomain.length; t++) {
            domainsArray.push(subDomain.slice(t).join('.'));
        }

        // Calculate the counts for each subdomains in domainsArray using hash
        for (let domain of domainsArray) {
            if (!hash[domain]) {
                hash[domain] = count;
            } else {
                hash[domain] += parseInt(count);
            }
        }
    }
    // Seggregate the hits and subdomains
    for (let key in hash) {
        visits.push(`${hash[key]} ${key}`);
    }

    return visits;
};