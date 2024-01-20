var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var port = process.env.port || 3001

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/person/:id', (req, res) => {
  res.render('index', { ID: req.params.id, Qstr: req.query.qstr })
})

app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank you')
  console.log(req.body.firstname)
  console.log(req.body.lastname)
})

app.listen(port, console.log(`Rodando na porta ${port}`))
