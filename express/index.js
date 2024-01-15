// const express = require('express')

// const app = express()

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Ola Mundo')
// })

// app.listen(port, () => {
//   console.log(`Rodando na porta ${port}`)
// })

// const test = require('./test')

// var obj = {
//   greet: 'hello'
// }

// var prop = 'gret'

// console.log(test)

function Person(firtname, lastname) {
  this.firtname = firtname
  this.lastname = lastname
}

Person.prototype.greet = function () {
  console.log('Hello ' + this.firtname + ' ' + this.lastname)
}

var fernando = new Person('Fernando', 'Muethea')

fernando.greet()

// JSON

var greetings = require('./data.json')

console.log(greetings.firstname)
