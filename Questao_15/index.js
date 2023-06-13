// Criando a função que terá como parâmetros red, blue e green, que representarão RR,GG e BB, respectivamente
function cor(red,blue,green) {

    //   Criando a variável red, que receberá o valor de RR.
    var red =  Math.floor(Math.random()*255)

    //   Criando a variável green, que receberá o valor de GG.
  var green =  Math.floor(Math.random()*255)

  //   Criando a variável blue, que receberá o valor de BB.
  var blue = Math.floor(Math.random()*255)
    
  // Criando a variável rgb, que representa o sistema de cores hexadecimal RGB, e atribuindo a ela os valores de red,green e blue.
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  
    // Selecionando o body e alterando o background color para que tenha o valor de rgb.
    document.body.style.backgroundColor = rgb
}
