let filmesESeries = [
  'star wars',
  'matrix',
  'mr. robot',
  'o preço do amanhã',
  'a vida é bela'
]

function emMaiuscula(array) {
  let nova = []
  for (i = 0; i < array.length; i++) {
    let item = array[i].toUpperCase()
    nova.push(item)
  }
  return nova
}
console.log(emMaiuscula(filmesESeries))

let outrosFilmes = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite'
]

function juntaArrays(array1, array2) {
  let listao = array1.concat(array2)
  return listao
}
console.log(juntaArrays(filmesESeries, outrosFilmes))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function comparaScores(score1, score2) {
  for (let i = 0; i < score1.length; i++) {
    if (score1[i] == score2[i]) {
      console.log('Nota igual')
    } else {
      console.log('Nota diferente')
    }
  }
}

comparaScores(asiaScores, euroScores)
