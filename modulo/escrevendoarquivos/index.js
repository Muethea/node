const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  fs.readFile('mensagem.html', function (err, data) {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

server.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`)
})
