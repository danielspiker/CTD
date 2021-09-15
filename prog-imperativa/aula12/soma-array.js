let numeros = [-5, 100]

function somaArray(lista) {
  let soma = 0
  for (let i = 0; i < lista.length; i++) {
    let total = soma + lista[i]
    soma = total
  }
  return soma
}

console.log(somaArray(numeros))
