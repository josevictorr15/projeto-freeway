//ator
let xAtor = 90
let yAtor = 370
let colidiu = false
let meusPontos = 0

function mostrarAtor(){
  image(imagemAtor, xAtor, yAtor, 25, 25)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarros, altCarros, xAtor, yAtor, 20)
    if (colisao){
     yAtor = 370
     xAtor = 90 
     somDaColisao.play()
      if (meusPontos > 0){
        meusPontos -= 1
      }
    }
  }
}

function incluiPontos(){
  textSize(25)
  text (meusPontos, width / 5, 25 )
  fill(color(255, 240, 60))
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1
    yAtor = 370
    somDoPonto.play()
  }
}