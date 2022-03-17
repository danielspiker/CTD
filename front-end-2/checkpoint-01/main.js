let tituloReference = document.querySelector('#titulo')
let textoReference = document.querySelector('#texto')
let imagemReference = document.querySelector('#imagem')

let conteudoReference = document.querySelector('#conteudo')

let postReference = document.querySelector('#post')

let posts = []

postReference.addEventListener('click', function (e) {
  e.preventDefault()
  let titulo = tituloReference.value
  let texto = textoReference.value
  let imagem = imagemReference.value

  for (const post of posts) {
    conteudoReference.innerHTML += `
    <div class="item">
      <img src="${post.imagem}" />
      <h2>${post.titulo}</h2>
      <p>${post.texto}</p>
    </div>
    `
  }

  posts.push({ titulo, texto, imagem })

  console.log(posts)
})
