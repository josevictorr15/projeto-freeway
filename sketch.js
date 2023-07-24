function setup(){
  createCanvas(500, 400);
  somDaTrilha.loop()
}

function draw(){
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}