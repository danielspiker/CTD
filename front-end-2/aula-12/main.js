let inputReferencia = document.querySelector('input')
let botaoReferencia = document.querySelector('button')

botaoReferencia.addEventListener('click', () => {
  let usuario = {
    nome: inputReferencia.value,
    idade: 40
  }

  let posts = [
    {
      titulo: '',
      descricao: 'lorem ipsum cacilds',
      imagem: 'https://mcpmag.com/articles.com',
      autor: usuario.nome
    },
    {
      titulo: '',
      descricao: 'lorem ipsum cacilds',
      imagem: 'https://mcpmag.com/articles.com'
    },
    {
      titulo: '',
      descricao: 'lorem ipsum cacilds',
      imagem: 'https://mcpmag.com/articles.com'
    }
  ]

  localStorage.setItem('postsUsuario', JSON.stringify(posts))

  localStorage.setItem('dadosUsuario', JSON.stringify(usuario))

  location.href = 'home.html'
})
