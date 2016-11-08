// Module Two
// Accept a number and convert it to a USD string value.

function formatUSD(num) {
  num = num.toLocaleString('en', {style: 'currency', currency: 'USD'});
  return num;
}
// unit test case
// console.log(formatUSD(1234234));

module.exports = formatUSD;
