let compras = [
  'arroz',
  'feijão',
  'batata',
  'tomate',
  'cebola',
  'alho',
  'frango'
]
console.log(
  '- JOIN: transforma o array numa string, separando os itens por um separador escolhido'
)
console.log(compras.join('/'))
console.log('- POP: tira o último elemento do array e retorna esse elemento')
console.log(compras.pop())
console.log(
  '- PUSH: adiciona elementos ao final do array e retorna o comprimento'
)
console.log(compras.push('Carne', 'Brócolis', 'Abobrinha'))
console.log(
  '- SHIFT: tira o primeiro elemento do array e retorna esse elemento'
)
console.log(compras.shift())
console.log(
  '- UNSHIFT: adiciona elementos no inicio do array. retorna o comprimento'
)
console.log(compras.unshift('macarrão', 'cuscuz'))
