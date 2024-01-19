var http = require('http')
var fs = require('fs')

var port = 1337

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var html = fs.readFileSync(__dirname + '/index.html')
    res.end(html)
  })
  .listen(port, console.log(`Rodando na porta ${port}`))
