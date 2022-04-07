// RECEBE DADOS DO LOGIN E PÕE NOME DO USUARIO E INICIAIS NO TODO DA TELA ==================
let requestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
}

fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe', requestConfig)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let nomeUsuarioRef = document.querySelector('#nomeUsuario')
    nomeUsuarioRef.innerHTML = `${data.firstName} ${data.lastName}`

    let userImageRef = document.querySelector('.user-image')
    userImageRef.innerHTML = `${data.firstName[0]}${data.lastName[0]}`
  })

// RECEBE TAREFAS ENVIADAS E AS IMPRIME NA TELA ATRAVES DO FOR ============================

let mostraTarefas = () => {
  fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', requestConfig)
    .then(response => response.json())
    .then(tasks => {
      console.log(tasks)

      for (let task of tasks) {
        let dataCriacao = new Date(task.createdAt)
        let tarefasPendentesRef = document.querySelector('.tarefas-pendentes')

        tarefasPendentesRef.classList.remove('skeleton')

        tarefasPendentesRef.innerHTML += `<li class="tarefa">
      <div class="not-done"></div>
      <div class="descricao">
        <p class="nome">${task.description}</p>
        <p class="timestamp">Criada em: ${dataCriacao.toLocaleDateString()}</p>
      </div>
    </li>`
      }

      localStorage.setItem('task', JSON.stringify(tasks))
    })
}

mostraTarefas()

// ENVIA NOVA TAREFA PARA A API =================================================
let formRef = document.querySelector('.nova-tarefa')

formRef.addEventListener('submit', e => {
  e.preventDefault()

  let novaTarefaRef = document.querySelector('#novaTarefa')

  let requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }

  let task = {
    description: novaTarefaRef.value,
    completed: false
  }

  let configuration = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: requestHeaders
  }

  fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', configuration)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('task', JSON.stringify(data))
    })
    .catch(error => console.log(error))

  mostraTarefas()
})

// FAZ 'LOGOFF' APAGANDO O TOKEN DO LOCALSTORAGE E RETORNANDO PRO INDEX ======================
let closeAppRef = document.querySelector('#closeApp')

closeAppRef.addEventListener('click', e => {
  localStorage.removeItem('token')
  location.href = 'index.html'
})
