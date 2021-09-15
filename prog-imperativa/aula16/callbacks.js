let soma = (a, b) => a + b

let media = (a, b, callback) => callback(a, b) / 2

console.log(media(11, 15, soma))
