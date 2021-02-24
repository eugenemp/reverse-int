module.exports = function reverse (n) {

    //Convert number to the array of string items,
    //reversing array and returning joined digits to the variable as a string
    let str = n.toString().split('').reverse().join('');

    //Converting string value to number
    return parseInt(str, 10);
}
