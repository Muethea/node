const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader = ('Contenty-type', 'text/html')
  res.end('<h1>Meu nome é Fernando dos Santos</h1> <p>Testando Atualização</p>')
})

server.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`)
})
