var express = require('express')
var app = express()

var port = process.env.port || 3001

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/person/:id', (req, res) => {
  res.render('index', { ID: req.params.id })
})

app.listen(port, console.log(`Rodando na porta ${port}`))
