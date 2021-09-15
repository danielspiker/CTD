function Pessoa(nome, anoNascimento) {
  this.nome = nome
  this.ano = anoNascimento
  let cpf = '090990'
}

let pessoa = new Pessoa('Pedrito', 2001)

let alguem = {
  nome: 'Gertrudes',
  anoNascimento: 1995,
  nacionalidade: 'norueguesa',
  idade: function () {
    return `Tenho ${2021 - this.anoNascimento} anos`
  }
}

alguem.nome = 'Cremilda'

console.log(alguem.idade())
console.log(`A ${alguem.nome} é ${alguem.nacionalidade}`)
console.log(pessoa)
let string = JSON.stringify(pessoa)
console.log(string[0])
