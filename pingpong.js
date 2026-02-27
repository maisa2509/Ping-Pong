// Criar bolinha
let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diamente = raio * 2;
 
//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha =6;

// Minha Raquete 
let xRaquete = 5; 
let yRaquete = 150;

//Raquete Oponente
let xRaqueteOponente =585;
let yRaqueteOponente =150;

// Placar
let meusPontos = 0;
let pontosOponentes =0;

//dificuladae
let diciculdade = "Normal";
let trilha,pontos,raquetada;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto= loadSound("ponto.mp3")
  raquete=loadSound("raquetada.mp")
}  


function setup (){
  createCanvas(600,400);
  trilha.loop()
}

function draw(){
  backgraund(0);
  movimentoBolinha(0);
  raquete(xRaquete,yRaquete)
  raquete(xRaqueteOponenete,
          yRaqueteOponente);
  npc(dificuldade);
}
  if(KeyIsDown(UP_ARROW)){}
   yRaquete -=10

  if(KeyIsDown(DOWN_ARROW)){
    yRaquete+= 10}

  if(xBolinha -raio< xRaquete + 10 $
     yBolinha-raio< yRaquete + 90 $ 
function movimentoBolinha(){
  circle(xBolinha,yBolinha,diamantro);
    
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    if(xBolinha + raio > width || xBolinha-raio < 0){
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha-raio< 0){
      velocidadeYBolinha *= -1}}
  