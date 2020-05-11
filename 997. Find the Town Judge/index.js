/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    if (trust.length < N - 1) {
        return -1;
    }

    let trustScores = [];

    for (const relation of trust) {
        trustScores[relation[0]]--;
        trustScores[relation[1]]++;
    }

    for (let i = 1; i <= N; i++) {
        if (trustScores[i] == N - 1) {
            return i;
        }
    }
    return -1;
};