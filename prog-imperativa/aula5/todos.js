function polEmCm(pol) {
  let resultado = pol * 2.54
  return pol + ' polegadas é equivalente a ' + resultado + ' centímetros.'
}
function converteEmURL(string) {
  return 'http://' + string + '.com.br'
}
function exclamacao(string) {
  return string + '!'
}
function idadeCachorro(idade) {
  return 'Idade humana equivale a ' + idade * 7
}
console.log(idadeCachorro(4))
function valorHoraTrab(salario) {
  return 'A hora trabalhada vale: ' + salario / 160
}
function calculaIMC(peso, altura) {
  return peso / altura ** 2
}
function converteEmMaiusc(string) {
  let maiusc = string.toUpperCase()
  return maiusc
}
function tipo(a) {
  return typeof a
}
function circunferencia(raio) {
  let area = Math.PI * raio ** 2
  return area
}

// -- Bhaskara --
function delta(a, b, c) {
  return b ** 2 - 4 * a * c
}
function raizes(a, b, c) {
  let d = delta(a, b, c)
  if (d == 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a)
    return 'Raíz é ' + x1
  } else {
    if (d < 0) {
      return 'Não tem raízes'
    } else {
      let x1 = (-b + Math.sqrt(d)) / (2 * a)
      let x2 = (-b - Math.sqrt(d)) / (2 * a)
      return 'Raízes são ' + x1 + ' e ' + x2
    }
  }
}
