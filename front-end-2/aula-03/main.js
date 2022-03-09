import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'

let a = parseInt(prompt('insira pirmeiro numero'))
let b = parseInt(prompt('insira segundo numero'))

console.log(`Resultado da soma: ${somar(a, b)}`)
console.log(`Resultado da subtração: ${subtrair(a, b)}`)
console.log(`Resultado da multiplicação: ${multiplicar(a, b)}`)
console.log(`Resultado da divisão: ${dividir(a, b)}`)

document.getElementById('primeiroNum').innerHTML += ' ' + a
document.getElementById('segundoNum').innerHTML += ' ' + b

document.getElementById('soma').innerHTML += ' ' + somar(a, b)
document.getElementById('subtrai').innerHTML += ' ' + subtrair(a, b)
document.getElementById('multiplica').innerHTML += ' ' + multiplicar(a, b)
document.getElementById('divide').innerHTML += ' ' + dividir(a, b)

//let subtrai = document.querySelector('#subtrai')
if (subtrair(a, b) < 0) {
  document.querySelector('#subtrai').style.color = 'red'
}

//let divide = document.querySelector('#divide')
let inteiro = Number.isInteger(dividir(a, b))
if (inteiro) {
  document.querySelector('#divide').style.color = 'white'
  divide.style.backgroundColor = 'black'
}
