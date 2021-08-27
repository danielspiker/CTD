function adicionar(a, b) {
  return a + b
}
function subtrair(a, b) {
  return a - b
}
function multiplicar(a, b) {
  return a * b
}
function dividir(a, b) {
  return a / b
}

function quadradoDoNumero(a) {
  return multiplicar(a, a)
}

function mediaDeTresNumeros(a, b, c) {
  let soma = adicionar(a, b)
  soma = adicionar(soma, c)
  return dividir(soma, 3)
}

function calculaPorcentagem(valorInteiro, porcentagem) {
  let porcento = dividir(porcentagem, 100)
  let resultado = multiplicar(valorInteiro, porcento)
  return resultado + '%'
}

function geradorDePorcentagem(valorPorcentagem, valorInteiro) {
  return (valorPorcentagem * 100) / valorInteiro
}

console.log('-------------- Teste de Operações / Calculadora --------------')
console.log(geradorDePorcentagem(2, 200))
