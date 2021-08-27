let status = true
if (status) {
  console.log('O valor é true - verdadeiro')
} else {
  console.log('O valor é false - falso')
}

let linguagem = 'python'
if (linguagem == 'javascript') {
  console.log('Estou aprendendo')
} else {
  console.log('Aprenderei mais tarde')
}

//if ternário
let resultado = status ? 'deu true' : 'num deu'
console.log(resultado)

//switch
switch (linguagem) {
  case 'javascript':
    console.log('estou aprendendo')
    break

  case 'python':

  case 'java':
    console.log('sei um pouco mais')
    break

  default:
    console.log('sei de nada')
}
