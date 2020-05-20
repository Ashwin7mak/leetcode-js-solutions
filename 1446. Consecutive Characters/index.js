var maxPower = function (s) {

    if(s.length === 0) return 0;

    let counter = 1;

    let power = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            counter++;
        } else {
            counter = 1;
        }
        power = Math.max(counter, power);
    }
    return power;
}

