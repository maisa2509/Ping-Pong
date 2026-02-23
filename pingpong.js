// Criar bolinha
a// Criar bolinha
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

function setup (){
  creteCanva(600,400);
}

function draw(){
  
}

function movimentoBolinha(){
  circle(xBolinha,yBolinha,diamantro);
    
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    if(xBolinha + raio > width || xBolinha-raio < 0){
      velocidadeXBolinha *= -1;
    };
    if (yBolinha + raio > height || yBolinha-raio< 0){
      velocidadeYBolinha *= -1}}
  