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

console.log(raizes(1, 12, -13))
