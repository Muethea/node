const express = require('express')
const fs = require('fs')
const app = express()

const port = process.env.PORT || 3000
app.use('/assets', express.static(__dirname+'/public'))
app.get('/', (req, res) => {
  res.send('<h1 >Hello Word</h1>')
})

app.listen(port, console.log(`Rodando na porta ${port}`))
