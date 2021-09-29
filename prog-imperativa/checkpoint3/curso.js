let Aluno = require('./Aluno.js')

let aluno1 = new Aluno('Cebolinha', 1, [6, 8, 7, 6])
let aluno2 = new Aluno('Magali', 2, [10, 7, 8, 9])

/* let alunos = [aluno1, aluno2] */

let curso = {
  nomeCurso: 'Programação',
  notaAprovação: 7,
  faltasMax: 3,
  estudantes: [],
  adicionaAluno: function (aluno) {
    this.estudantes.push(aluno)
  },
  alunoAprovado: function (aluno) {
    if (
      aluno.calcularMedia() >= this.notaAprovação &&
      aluno.faltas < this.faltasMax
    ) {
      return true
    } else if (
      aluno.calcularMedia() >= this.notaAprovação * 1.1 &&
      aluno.faltas == this.faltasMax
    ) {
      return true
    } else {
      return false
    }
  },
  aprovados: function () {
    let aprovados = []
    for (a of this.estudantes) {
      if (this.alunoAprovado(a) == true) {
        aprovados.push(true)
      } else {
        aprovados.push(false)
      }
    }
    return aprovados
  }
}

let aluno3 = new Aluno('Cascão', 0, [7.5, 8.2, 7.4, 8])

curso.adicionaAluno(aluno3)

curso.adicionaAluno(aluno1)
curso.adicionaAluno(aluno2)
console.log(curso.estudantes)
aluno3.acrescentaFalta()
aluno3.acrescentaFalta()
aluno3.acrescentaFalta()

console.log(curso.estudantes)
console.log(curso.alunoAprovado(aluno1))
console.log(curso.alunoAprovado(aluno3))
console.log(curso.aprovados())
