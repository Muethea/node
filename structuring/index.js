const express = require('express')

const app = express()

const port = process.env.port || 3001

app.get('/', (req, res) => {
  res.send('Ola Mundo')
})

app.listen(port, console.log(`Rodando na porta ${port}`))
