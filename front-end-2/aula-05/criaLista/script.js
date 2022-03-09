function criaLista(nomeLista, qtdItens, itemLista) {
  document.getElementById('lista').innerHTML += nomeLista
  document.getElementById('lista').innerHTML += `
    <li>${itemLista}</li>`
  for (let i = 1; i < qtdItens; i++) {
    let itemLista = prompt('Item da lista: ')
    console.log(itemLista)
    document.getElementById('lista').innerHTML += `
    <li>${itemLista}</li>
    `
  }
}

let nome = prompt('Nome da lista: ')
let qtd = prompt('Quantos itens:')
let itemLista = prompt('Item lista: ')

criaLista(nome, qtd, itemLista)
