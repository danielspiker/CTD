// let dadosLoginRef = document.querySelectorAll('.dadosLogin')
let emailRef = document.querySelector('#inputEmail')
let senhaRef = document.querySelector('#inputPassword')

let formularioLoginRef = document.querySelector('#formularioLogin')
let errorListRef = document.querySelector('#errorList')

// for (let dadoLogin of dadosLoginRef) {
//   let dado = dadoLogin.children[1]

// dado.addEventListener('keyup', e => {
//   if (dado.checkValidity()) {
//     dadoLogin.classList.remove('erro')
//   } else {
//     dadoLogin.classList.add('erro')
//   }
// })
// }
formularioLoginRef.addEventListener('submit', e => {
  e.preventDefault()

  errorListRef.innerHTML = ''

  if (emailRef.value == '' || senhaRef.value == '') {
    errorListRef.hidden = ''
    errorListRef.innerHTML = `<p>❌ Preencha todos os campos com dados válidos</p>`
  } else {
    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let credentials = {
      email: `${emailRef.value}`,
      password: `${senhaRef.value}`
    }

    let configuration = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: requestHeaders
    }

    // fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', configuration)
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     if (data.jwt) {
    //       localStorage.setItem('token', data.jwt)
    //       location.href = 'tarefas.html'
    //     } else {
    //       errorListRef.innerHTML = data
    //     }
    //   })

    fetch(
      'https://ctd-todo-api.herokuapp.com/v1/users/login',
      configuration
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          localStorage.setItem('token', data.jwt)
          location.href = 'tarefas.html'
        })
      } else {
        errorListRef.innerHTML = `<p>❌ Usuário inválido</p>`
      }
    })
  }
})
