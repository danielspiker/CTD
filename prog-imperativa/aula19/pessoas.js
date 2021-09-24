function Pessoa(_altura, _sexo, _nome) {
  this.altura = _altura
  this.sexo = _sexo
  this.nome = _nome
}

const pessoa1 = new Pessoa(1.8, 'M', 'Pessoa 1')
const pessoa2 = new Pessoa(1.7, 'F', 'Pessoa 2')
const pessoa3 = new Pessoa(1.6, 'M', 'Pessoa 3')
const pessoa4 = new Pessoa(1.93, 'M', 'Pessoa 4')
const pessoa5 = new Pessoa(1.75, 'F', 'Pessoa 5')

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]

module.exports = {
  pessoas: pessoas
}

// exports.pessoas = pessoas
// exports.myFunc = function(){}
