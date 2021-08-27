function podeSubir(altura, acompanhada) {
  if (altura > 1.4 && altura < 2.0) {
    return true
  } else if (altura < 1.4 && acompanhada == true) {
    return true
  } else if (altura < 1.2) {
    return false
  } else {
    return false
  }
}
console.log(podeSubir(1.3, true))

function podeSubirMsg(altura, acompanhada) {
  if (altura > 1.4 && altura < 2.0) {
    return 'Acesso autorizado'
  } else if (altura < 1.4 && acompanhada == true) {
    return 'Acesso autorizado somente com acompanhante'
  } else if (altura < 1.2) {
    return 'Acesso negado'
  } else {
    return 'Acesso negado'
  }
}
console.log(podeSubirMsg(1.3, true))
