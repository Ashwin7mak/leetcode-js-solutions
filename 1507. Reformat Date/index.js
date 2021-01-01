/**
 * @param {string} date
 * @return {string}
 */
/*
    - Split the date based upon spaces
    - Add year, month and date to the result
    - Join the result based upon '-'

    TC - O(n)
    SC - O(n)
*/
var reformatDate = function(date) {

    if(date === "" || date === null)
        return date;

    let format = date.split(' ');

    let result = [];

    let month = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        "May": '05',
        "Jun": '06',
        "Jul": '07',
        "Aug": '08',
        "Sep": '09',
        "Oct": '10',
        "Nov": '11',
        "Dec": '12'
    };

    format[0] = format[0].replace(/\D/g,'');

    if(format[0].length < 2) {
        format[0] = '0' + format[0];
    }

    for(let i = format.length - 1; i >= 0; i--) {

        if(month.hasOwnProperty(format[i])) {
            result.push(month[format[i]]);
            continue;
        }

        result.push(format[i]);
    }

    return result.join('-');
};

