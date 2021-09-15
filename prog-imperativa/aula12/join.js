const letras = ['o', 'l', 'a', 'r']
const letras2 = ['f', 'e', 'r', 'i', 'a', 'd', 'o']

function join(lista) {
  let novaLista = ''
  for (let i = 0; i < lista.length; i++) {
    novaLista += lista[i]
  }
  return novaLista
}

console.log(join(letras))
