let tituloReferencia = document.querySelector('#titulo')
let lembreteReferencia = document.querySelector('#lembrete')
let verLembretesReferencia = document.querySelector('#verLembretes')
let erroReferencia = document.querySelector('#erro')
let formReferencia = document.querySelector('#form1')

let lembretes = JSON.parse(localStorage.getItem('lembraDe'))

formReferencia.addEventListener('submit', e => {
  let titulo = tituloReferencia.value
  let lembrete = lembreteReferencia.value

  if (titulo == '' || lembrete == '') {
    e.preventDefault()

    erroReferencia.classList.add('erros')
    erroReferencia.innerHTML = `
      <p>❌ Preencha todos os campos</p>
    `
  } else {
    e.preventDefault()
    if (lembretes == null) {
      lembretes = []
    }

    lembretes.unshift({ titulo, lembrete })

    let lembretesJSON = JSON.stringify(lembretes)
    localStorage.setItem('lembraDe', lembretesJSON)

    location.href = 'home.html'
  }
})

verLembretesReferencia.addEventListener('click', e => {
  if (lembretes == [] || lembretes == null) {
    e.preventDefault()
    erroReferencia.classList.add('erros')
    erroReferencia.innerHTML = `
      <p>❌ Nenhum lembrete adicionado</p>
    `
  } else {
    location.href = 'home.html'
    e.preventDefault()
  }
})
