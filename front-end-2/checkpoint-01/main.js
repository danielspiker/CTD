let tituloReference = document.querySelector('#titulo')
let textoReference = document.querySelector('#texto')
let imagemReference = document.querySelector('#imagem')
let conteudoReference = document.querySelector('#conteudo')
let postReference = document.querySelector('#post')

let posts = []

postReference.addEventListener('click', e => {
  e.preventDefault()
  let titulo = tituloReference.value
  let texto = textoReference.value
  let imagem = imagemReference.value

  posts.unshift({ titulo, texto, imagem })

  conteudoReference.innerHTML += `
    <div class="item">
      <img src="${posts[0].imagem}" />
      <h2>${posts[0].titulo}</h2>
      <p>${posts[0].texto}</p>
    </div>
    `
})
