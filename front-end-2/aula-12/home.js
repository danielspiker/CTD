let nomeUsuarioReferencia = document.querySelector('b')
let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'))
let logoutReferencia = document.querySelector('#logout')

logoutReferencia.addEventListener('click', ev => {
  localStorage.removeItem('dadosUsuario')
  location.href = 'index.html'
})

nomeUsuarioReferencia.innerHTML = dadosUsuario.nome
