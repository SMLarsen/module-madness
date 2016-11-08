//app.js
// - set up a server,
// - write a 200 head, and
// - use res.write to send a message that concatenates the results from the
 //   third module, but formatted to provide the user with a dollar amount
 //   (see Success below for an example of what this will look like).

var logNum = require('./modules/logNum');

var http = require('http');

// unit test cases
// console.log(logNum.dispText);
// console.log(logNum.randomUSD);

var string = '\n' + logNum.dispText + logNum.randomUSD + '\n\n';

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(string);
  res.end();
}).listen(3000);

console.log('listening on port 3000');
