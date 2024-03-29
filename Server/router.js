var http = require('http')
var fs = require('fs')
var port = 1337

http
  .createServer((req, res) => {
    if (req.url === '/') {
      fs.createReadStream(__dirname + '/index.html').pipe(res)
    }

    if (req.url === '/api') {
      res.writeHead(200, { 'Content-Type': 'application/json' })

      var obj = {
        firstname: 'Fernando',
        lastname: 'Muethea'
      }

      res.end(JSON.stringify(obj))
    }
  })
  .listen(port, console.log(`Rodando na porta ${port}`))
