var formatUSD = require('./utils/formatUSD');
var random = require('./utils/random');

// console.log(formatUSD(random(10, 1000)));

module.exports.randomUSD = formatUSD(random(100, 1000000));
module.exports.dispText = 'Account balance: \n';
