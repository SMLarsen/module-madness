function formatUSD(num) {
  num = num.toLocaleString('en', {style: 'currency', currency: 'USD'});
  return num;
}

// console.log(formatUSD(1234234));

module.exports = formatUSD;
