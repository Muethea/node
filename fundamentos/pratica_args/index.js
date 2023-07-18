const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const soma = require('./soma').soma

soma(4, 5)
