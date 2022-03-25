let bodyReference = document.querySelector('body')
let postReferencia = document.querySelector('#post')
let addReferencia = document.querySelector('#add')

lembretes1 = JSON.parse(localStorage.getItem('lembraDe'))

for (const lembrete of lembretes1) {
  postReferencia.innerHTML += `
      <div class="item">
        <h3>${lembrete.titulo}</h3>
        <p>${lembrete.lembrete}</p>
      </div>
    `
}

addReferencia.addEventListener('click', e => (location.href = 'index.html'))
