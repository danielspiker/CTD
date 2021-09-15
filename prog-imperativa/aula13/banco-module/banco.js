let banco = {
  clientes: contas,

  consultarCliente: function (titular) {
    for (let i = 0; i < clientes.contas.length; i++) {
      if (contas[i].titular == titular) {
        return contas[i]
      }
    }
  },
  deposito: function (titular, valor) {
    let contaDepositar = this.consultarCliente(titular)
    contaDepositar.saldo += valor
    console.log(`Depósito realizado, seu novo saldo é: ${contaDepositar.saldo}`)
  },
  saque: function (titular, valor) {
    let contaSacar = this.consultarCliente(titular)
    if (contaSacar.saldo < valor) {
      console.log(`Fundos insuficientes`)
    } else {
      contaSacar.saldo -= valor
      console.log(
        `Extração feita com sucesso, seu novo saldo é: ${contaSacar.saldo}`
      )
    }
  }
}

module.exports = banco
