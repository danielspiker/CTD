function Aluno(nome, faltas, notas) {
  this.nome = nome
  this.faltas = faltas
  this.notas = notas
  this.calcularMedia = () => {
    let soma = 0
    for (nota of this.notas) {
      soma += nota
    }
    return soma / this.notas.length
  }
  this.acrescentaFalta = () => this.faltas++
}

module.exports = Aluno
