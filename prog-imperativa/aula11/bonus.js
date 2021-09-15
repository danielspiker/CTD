const a = [5, 8, 4, 9, 5]
const b = [8, 7, 8, 6, 8]
const c = [7, 5, 10, 8, 3]

function pontuacaoMedia(pontuacao) {
  let soma = 0
  for (let i = 0; i < pontuacao.length; i++) {
    soma += pontuacao[i]
  }
  return soma / pontuacao.length
}
//console.log(pontuacaoMedia(b))

function pontuacaoMaior(pontuacao) {
  var maior = 0
  for (let i = 0; i < pontuacao.length; i++) {
    if (pontuacao[i] > maior) {
      maior = pontuacao[i]
    }
  }
  return maior
}
console.log(pontuacaoMaior(c))

function competicao(a, b, c) {
  let mediaA = pontuacaoMedia(a)
  let mediaB = pontuacaoMedia(b)
  let mediaC = pontuacaoMedia(c)

  let maiorA = pontuacaoMaior(a)
  let maiorB = pontuacaoMaior(b)
  let maiorC = pontuacaoMaior(c)

  if (mediaA > mediaB && mediaA > mediaC) {
    console.log('maior media foi de A')
  } else if (mediaB > mediaA && mediaB > mediaC) {
    console.log('maior media foi de B')
  } else if (mediaC > mediaA && mediaC > mediaB) {
    console.log('maior media foi de C')
  } else {
    console.log('nao houve vencedor na media')
  }

  if (maiorA > maiorB && maiorA > maiorC) {
    console.log('maior e-tip foi de A')
  } else if (maiorB > maiorA && maiorB > maiorC) {
    console.log('maior e-tip foi de B')
  } else if (maiorC > maiorA && maiorC > maiorB) {
    console.log('maior e-tip foi de C')
  } else {
    console.log('nao houve vencedor na e-tip')
  }
}

console.log(competicao(a, b, c))
