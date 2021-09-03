const jonas = [5, 8, 4, 9, 5]
const rodrix = [8, 7, 8, 6, 8]
const guarabira = [7, 5, 10, 8, 3]

function pontuacaoMedia(pontuacao) {
  let soma = 0
  for (let i = 0; i < pontuacao.length; i++) {
    soma += pontuacao[i]
  }
  return soma / pontuacao.length
}
//console.log(pontuacaoMedia(rodrix))

function pontuacaoMaior(pontuacao) {
  var maior = 0
  for (let i = 0; i < pontuacao.length; i++) {
    if (pontuacao[i] > maior) {
      maior = pontuacao[i]
    }
  }
  return maior
}
//console.log(pontuacaoMaior(jonas))

function competicao(a, b, c) {
  let medias = []
  let maiores = []

  let mediaA = pontuacaoMedia(a)
  let mediaB = pontuacaoMedia(b)
  let mediaC = pontuacaoMedia(c)
  medias.push(mediaA, mediaB, mediaC)

  let maiorA = pontuacaoMaior(a)
  let maiorB = pontuacaoMaior(b)
  let maiorC = pontuacaoMaior(c)
  maiores.push(maiorA, maiorB, maiorC)

  let maiorMedia = 0
  for (let i = 0; i < medias.length; i++) {
    if (medias[i] > maiorMedia) {
      maiorMedia = medias[i]
    }
  }

  let maiorEtip = 0
  for (let i = 0; i < maiores.length; i++) {
    if (maiores[i] > maiorEtip) {
      maiorEtip = maiores[i]
    }
  }
  return `maior media: ${maiorMedia} e maior nota: ${maiorEtip}`
}

console.log(competicao(jonas, rodrix, guarabira))
