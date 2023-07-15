algoritmo "Transporte"
var
resposta, transporte: caractere

inicio
  escreval("É terrestre?")
  leia(resposta)
  se (resposta = "sim") entao 
    escreval ("Cabe apenas 1 pessoa?")
    leia(resposta)
    se (resposta = "sim") entao 
      escreval("É pesado?")
      leia(resposta)
      se (resposta = "sim") entao
        transporte <- "trator"
      senao
        escreval("Tem pedal?")
        leia(resposta)
        se (resposta = "sim") entao 
          transporte <- "bicicleta"
        senao
          transporte <- "nenhum"
        fimse
      fimse 
    senao
      escreval("Usa capacete?")
      leia(resposta)
      se (resposta = "sim") entao 
        transporte <- "moto"
      senao
        transporte <- "nenhum"
      fimse
    fimse
  senao
    transporte <- "nenhum"
  fimse
  escreva("Então o transporte escolhido foi: ", transporte)
fimalgoritmo