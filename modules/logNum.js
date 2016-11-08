// Module Three -
// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//  1 - The first function export should return the result of the first module being passed into the second module.
//  2 - The second function export should return the text “Account balance: \n”.

var formatUSD = require('./utils/formatUSD');
var random = require('./utils/random');

// unit test case
// console.log(formatUSD(random(10, 1000)));

module.exports.randomUSD = formatUSD(random(100, 1000000));
module.exports.dispText = 'Account balance: \n';
