// Criando uma função que possa ser acionada por um botão.
function conversao(c) {
    // Criando a variável c, que receberá o valor em celsius.
    var c = parseFloat(prompt('Digite uma temperatura em celsius.'))
    // Criando a variável f, que transformará o valor em fahrenheit.
    var f = (c*9/5)+32
// Usando alert para mostrar o valor de f para o usuário.
    alert('Em fahrenheit, temos: ', f)
}

