let num = [81, 15, 0, 100, 8, 72]
let numDobro = num.map(i => i * 2)
console.log(`Dobro de cada numero: ${numDobro}`)

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let pares = num2.filter(i => i % 2 == 0)
console.log(`Números pares: ${pares}`)

let num3 = [10, 20, 30, 40, 10]
let somaTudo = num3.reduce((a, b) => a + b)
console.log(`Soma Total: ${somaTudo}`)

let nomes = ['calopsita', 'godofredo', 'pitomba']
let imprimeNomes = nomes.forEach((i, j) =>
  console.log(`Me chamo ${i} e meu index é ${j}`)
)
imprimeNomes

let palavra = [
  'p',
  'a',
  'r',
  'a',
  'l',
  'e',
  'l',
  'e',
  'p',
  'i',
  'p',
  'e',
  'd',
  'o'
]
let concatena = palavra.reduce((a, b) => a + b)

console.log(`Soma Total: ${concatena}`)

let vogais = palavra
  .filter(i => i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u')
  .reduce((a, b) => a + b)

console.log(`Vogais contidas: ${vogais}`)

// Micro-desafio - alterei o primeiro quesito usando um filter antes
let alterados = num2.filter(i => i % 2 == 0).map(i => i + 1)

console.log(`Números impares: ${alterados}`)

let listaNomes = [
  'calopsitas',
  'Maria',
  'godofredo',
  'Jão',
  'pitomba',
  'Bia',
  'Maria',
  'Cloves'
]
let marias = listaNomes.filter((i, j) => {
  if (i == 'Maria') {
    console.log(j)
  }
})

let arrayNumeros = num2.reduce((a, b) => a + '-' + b)
console.log(arrayNumeros)

//Outros Métodos
console.log(palavra.slice(3, -1))

console.log(palavra.splice(4, 0, 'q', 'u', 'e', 'd', 'a'))
console.log(palavra.reduce((a, b) => a + b))

console.log(listaNomes.sort((a, b) => a.length - b.length))
console.log(num.sort((a, b) => a - b))

let listaLouca = [1, 2, 3, [4], [[5, 6]]]
console.log(listaLouca.flat())
console.log(listaLouca.flat(2))

console.log(listaNomes.find(i => i.length <= 3))
