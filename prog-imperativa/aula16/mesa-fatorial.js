let fatorial = numero => {
  let fat = 1
  for (let i = numero; i >= 1; i--) {
    fat *= i
  }
  return fat
}

console.log(fatorial(10))

let fatRecursivo = num => {
  if (num <= 1) return 1
  return num * fatRecursivo(num - 1)
}

console.log(fatRecursivo(5))
