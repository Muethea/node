var http = require('http')
var fs = require('fs')

var port = 1337

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.html').pipe(res)
    
  })
  .listen(port, console.log(`Rodando na porta ${port}`))
