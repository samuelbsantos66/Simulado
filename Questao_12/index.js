function q(n) {
    // Criando variável que receberá um número.
    var n = parseInt(prompt('Digite um número.'))
    
    // Criando a estrutura condicional que avaliará se o número é um quadrado perfeito.
    if(Number.isInteger(Math.sqrt(n)) == true ) {
       
        // Se for verdade que a raíz quadrada de n é um número inteiro, o alert seguinte será mostrado.
        alert('Esse é número quadrado perfeito! Sua raíz quadrada é ' + Math.sqrt(n))
        
        // Se o if for false, o alert seguinte será mostrado.
    
    } else {
        alert('Esse número não é um quadrado perfeito!')
      }
    

}