function Conta(num, tipo, saldo, titular) {
  this.numero = num
  this.tipo = tipo
  this.saldo = saldo
  this.titular = titular
}

let conta01 = new Conta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')
let conta02 = new Conta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell')
let conta03 = new Conta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente')
let conta04 = new Conta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')
let conta05 = new Conta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')
let conta06 = new Conta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')
let conta07 = new Conta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour')
let conta08 = new Conta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden')
let conta09 = new Conta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')
let conta10 = new Conta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')

var contas = [
  conta01,
  conta02,
  conta03,
  conta04,
  conta05,
  conta06,
  conta07,
  conta08,
  conta09,
  conta10
]

let pessoas = [
  {
    nome: 'Luano',
    idade: 12,
    cabelo: 'preto'
  },
  {
    nome: 'Pêdra',
    idade: 45,
    cabelo: 'branco'
  },
  {
    nome: 'Calopsita',
    idade: 65,
    cabelo: 'cinza laranjado'
  }
]

function propriedadeUnica(array, propriedade) {
  let resultados = []
  for (let i = 0; i < array.length; i++) {
    resultados.push(array[i][propriedade])
  }
  return resultados
}

console.log(propriedadeUnica(contas, 'titular'))
