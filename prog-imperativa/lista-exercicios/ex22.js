function geraBoleto(valor) {
  let resto = valor % 3
  let parcelas = Math.trunc(valor / 3)
  console.log(
    'Entrada é R$ ' +
      (parcelas + resto) +
      ' e as parcelas são 2X de R$ ' +
      parcelas
  )
}

geraBoleto(357.82)
