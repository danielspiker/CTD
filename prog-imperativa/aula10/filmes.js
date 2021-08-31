let filmesESeries = [
  'star wars',
  'matrix',
  'mr. robot',
  'o preço do amanhã',
  'a vida é bela'
]

// function emMaiuscula(array) {
//   let nova = []
//   for (i = 0; i < array.length; i++) {
//     let item = array[i].toUpperCase()
//     nova.push(item)
//   }

//   return nova
// }
// console.log(emMaiuscula(filmesESeries))

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
