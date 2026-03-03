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
  raquete(xRaquete,yRaquete);
  raquete(xRaqueteOponenete,
          yRaqueteOponente);
  npc(dificuldade);

  if(KeyIsDown(UP_ARROW)){
   yRaquete -=10}

  if(KeyIsDown(DOWN_ARROW)){
    yRaquete+= 10}
  
  if(xBolinha -raio< xRaquete + 10 &
     yBolinha-raio< yRaquete + 90 &
     yBolinha + raio> yRaquete ){
     velocidadeXBolinha *= -1;
     raquete.play()}
  if(XBolinha + raio > xRaqueteOponenete &
     yBolinha - raio < yRaqueteOponente + 90 &
     yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
raquetada.play()}
  
  textSize(18)
  textAlign(CENTER);
  fill(color(255,0,233));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,0,233));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponenete,470,26);
  
  if(xBolinha>595){
    meusPontos += 1;
    pontos.play()
}
  if(xBolinha<10){
    pontosOponente +=1;
    ponto.play()
  }
  
}
        
function movimentoBolinha(){
  circle(xBolinha,yBolinha,diamantro);
    
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    if(xBolinha + raio > width || xBolinha-raio < 0){
      velocidadeXBolinha *= -1;
      
    }
    if (yBolinha + raio > height || yBolinha-raio< 0){
      velocidadeYBolinha *= -1}
}

function npc(xRaquete,yRaquete){
  rect(xRaquete,yRaquete,10,90);
   
}

function npc(){
  var nivel = 30;
  if(deficuldade === "Facil" ){
    nivel = 100;
  }
  if(dificuldade === "Normal"){
  nivel= 30
  }
  let velocidadeYRaqueteOponenete = yBolinha -
      yRaqueteOponenete - 10 / 2;
yRaqueteOponente += velocidadeYRaqueteOponenete - nivel;
  }