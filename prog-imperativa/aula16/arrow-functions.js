let multiplicar = (a, b) => a * b

console.log(multiplicar(2, 7))

function multiplicar1(a, b) {
  return a * b
}

//--------
let msg = () => console.log('oilá, mundo')
let msg1 = adjetivo => console.log(`oilá, mundo ${adjetivo}`)

msg()
msg1('crazy')

//--------
let par = num => num % 2 == 0

console.log(par(15))

//---------
let multiplo = (a, b) => {
  let resto = a % b
  return resto == 0
}
console.log(multiplo(10, 5))

//---------
let horaAtual = () => {
  let hora = new Date()

  return hora.getHours + ':' + hora.getMinutes() + ' do dia ' + hora.getDate()
}

console.log(horaAtual())
