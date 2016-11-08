var logNum = require('./modules/logNum');

var http = require('http');

// console.log(logNum.dispText);
// console.log(logNum.randomUSD);

var string = '\n' + logNum.dispText + logNum.randomUSD + '\n\n';

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(string);
  res.end();
}).listen(3000);

console.log('listening on port 3000');
