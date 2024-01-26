const express = require('express')
const app = express()
const mysql = require('mysql')
const ejs = require('ejs')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'person'
})

db.connect(error => {
  if (error) {
    console.log('Nao foi possivel conectar com o banco de dados', error)
  } else {
    console.log('Banco de dados conectado com sucesso')
  }
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  db.query('SELECT * FROM person', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err)
      res.status(500).send('Internal Server Error')
    } else {
      res.render('index', { data: results })
    }
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
