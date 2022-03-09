const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]

let aux = 0
for (let i = 0; i < numbers.length; i++) {
  console.log((aux += numbers[i]))
}
