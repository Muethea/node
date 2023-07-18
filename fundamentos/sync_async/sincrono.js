const fs = require('fs')

console.log('Inicio')

fs.writeFileSync('arquivo.txt', 'Ola')

console.log('fim')
