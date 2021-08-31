let notas = [9, 8, 10, 6]

function somarArray(array) {
  const total = array.reduce((total, elemento) => total + elemento)
  return total
}

console.log(somarArray(notas))

let letras = ['o', 'l', 'á', ', ', 'v', 'o', 'c', 'ê']

function join(array) {
  const total = array.reduce((total, elemento) => total + elemento)
  return total
}

console.log(join(letras))
