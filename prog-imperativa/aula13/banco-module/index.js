let banco = require('./banco.js')

banco.deposito('Thomasin Latour', 50000)
banco.saque('Thomasin Latour', 50000)

console.log(banco.consultarCliente('Bendite Huggett'))

console.log(banco.clientes[2].titular)
