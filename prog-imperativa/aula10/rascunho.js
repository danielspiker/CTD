let saudacao = 'Olá! Estamos programando'
console.log(saudacao.indexOf('l'))
console.log(saudacao.slice(-5))
// trim elimina os espaços no inicio e fim duma string
console.log(saudacao.split('Estamos')) // transforma a string em array, separando pelo que for definido como separador
console.log(saudacao.replace('Estamos', 'Vivemos'))

let cores = ['Azul', 'Laranja', 'Roxo', 'Laranja']
console.log(cores)
console.log(cores.push('Cinza', 'Branco')) //retorna o novo comprimento
console.log(cores)
cores.pop() // retorna elemento eliminado(ultimo)
console.log(cores)
cores.shift() // retorna elemento eliminado(primeiro)
console.log(cores)
cores.unshift('Caramelo', 'Preto Neve') // add elementos no inicio. retorna novo comprimento
console.log(cores)
let coresSeparadas = cores.join(' *** ') // retorna uma string. separa por virgula by default
console.log(coresSeparadas)
console.log(cores)
console.log(cores.lastIndexOf('Laranja')) //retorna o indice, buscando do fim para o inicio
console.log(cores.includes('Roxo'))

console.log('------------- MESA DE TRABALHO - AULA 10 -----------------')

let numbers = [22, 33, 54, 66, 72]
let numbers2 = [15, 27, 88, 42, 22]
console.log(numbers[numbers.length])
console.log(numbers.length == numbers2.length)
console.log(numbers[0] != numbers2[4])
numbers[1] = 99
console.log(numbers)

let grupoDeAmigos1 = [
  ['Harry', 'Ron', 'Hermione'],
  ['Spiderman', 'Hulk', 'Ironman'],
  ['Penélope Glamour', 'Pierre Nodoyuna', 'Patán']
]
console.log(grupoDeAmigos1[1][0])

let str = 'una string qualquer'
let grupoDeAmigos = [
  [45, 89, 0],
  ['Digital', 'House', true],
  ['string', '123', 'false', 54, true, str]
]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

let lista = [1, 2, 3, 4]
console.log(lista[3])
