let dadosLoginRef = document.querySelectorAll('.dadosLogin')

for (let dadoLogin of dadosLoginRef) {
  let dado = dadoLogin.children[1]

  dado.addEventListener('keyup', e => {
    if (dado.checkValidity()) {
      dadoLogin.classList.remove('erro')
    } else {
      dadoLogin.classList.add('erro')
    }
  })
}
