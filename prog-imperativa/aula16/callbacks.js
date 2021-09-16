let soma = (numeroA, numeroB) => numeroA + numeroB

let mediaDeDoisNumeros = (numeroA, numeroB, funcao) =>
  funcao(numeroA, numeroB) / 2

console.log(mediaDeDoisNumeros(11, 15, soma))

// setTimeout(() => console.log('segura essa..'), 3000)
// setTimeout(() => console.log('segura essa tb..'), 5000)
