//importando modulos que criei
let somar = require('./soma.js')
let amigos = require('./amigos.js')

//importando modulo nativo
const fs = require('fs')

let texto = fs.readFileSync(__dirname + '/texto.txt', 'utf-8')

let letra = 'Sweet as the smell of success, Her bodys warm and wet'
fs.writeFileSync('surprise.txt', letra)

let musica = fs.readFileSync(__dirname + '/surprise.txt', 'utf-8')

fs.appendFileSync(
  'surprise.txt',
  ' ...She gets me through this god awful loneliness'
)

console.log(amigos)
console.log(somar(3, 4))
console.log(musica)
