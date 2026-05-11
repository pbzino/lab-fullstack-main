function desenhar_quadrado(ctx, x, y, largura, altura, cor){
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor, espessura = 1){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = cor;
  ctx.lineWidth = espessura;

  ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, inicio, fim, corLinha, corPreenchimento = null){

  ctx.beginPath();

  ctx.arc(x, y, raio, inicio, fim);

  if(corPreenchimento){
    ctx.fillStyle = corPreenchimento;
    ctx.fill();
  }

  ctx.strokeStyle = corLinha;
  ctx.stroke();
}

function escrever(ctx, texto, x, y, tamanho, cor){

  ctx.fillStyle = cor;
  ctx.font = tamanho + "px Arial";

  ctx.fillText(texto, x, y);
}

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

desenhar_quadrado(ctx1, 0, 0, 300, 300, "white");

desenhar_quadrado(ctx1, 0, 0, 50, 50, "blue");
desenhar_quadrado(ctx1, 250, 0, 50, 50, "red");

desenhar_linha(ctx1, 50, 50, 150, 150, "blue");
desenhar_linha(ctx1, 250, 50, 150, 150, "red");

escrever(ctx1, "Canvas", 115, 50, 18, "black");

desenhar_arco(ctx1, 150, 150, 60, Math.PI, 0, "green");
desenhar_arco(ctx1, 150, 150, 80, Math.PI, 0, "green");

desenhar_arco(ctx1, 150, 115, 15, 0, Math.PI * 2, "blue", "#21d7ff");

desenhar_linha(ctx1, 0, 150, 300, 150, "green");

desenhar_quadrado(ctx1, 0, 120, 30, 30, "#00e5e5");
desenhar_quadrado(ctx1, 0, 150, 30, 30, "#00e5e5");

desenhar_quadrado(ctx1, 270, 120, 30, 30, "#00e5e5");
desenhar_quadrado(ctx1, 270, 150, 30, 30, "#00e5e5");

desenhar_quadrado(ctx1, 110, 150, 40, 40, "red");

desenhar_arco(ctx1, 70, 220, 15, 0, Math.PI * 2, "green", "yellow");
desenhar_arco(ctx1, 220, 220, 15, 0, Math.PI * 2, "green", "yellow");

desenhar_quadrado(ctx1, 0, 240, 30, 30, "yellow");
desenhar_quadrado(ctx1, 0, 270, 60, 30, "yellow");

desenhar_quadrado(ctx1, 240, 270, 60, 30, "black");
desenhar_quadrado(ctx1, 270, 240, 30, 30, "black");

desenhar_arco(ctx1, 150, 300, 60, Math.PI, 0, "green");
desenhar_arco(ctx1, 150, 300, 40, Math.PI, 0, "green", "#19e3e3");

desenhar_linha(ctx1, 150, 150, 150, 300, "gray");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

desenhar_quadrado(ctx2, 0, 0, 300, 300, "#86e0be");

desenhar_arco(ctx2, 225, 70, 35, 0, Math.PI * 2, "yellow", "yellow");

desenhar_quadrado(ctx2, 0, 200, 300, 100, "#8f8f8f");

desenhar_arco(ctx2, 0, 200, 35, 0, Math.PI * 2, "#4a86e8", "#4a86e8");

desenhar_quadrado(ctx2, 0, 250, 150, 80, "#4a86e8");

desenhar_quadrado(ctx2, 0, 190, 40, 150, "#4a86e8");

desenhar_arco(
  ctx2,
  140,
  300,
  40,
  Math.PI,
  1.5 * Math.PI,
  "#4a86e8",
  "#4a86e8"
);

desenhar_quadrado(ctx2, 115, 130, 75, 70, "saddlebrown");

ctx2.beginPath();

ctx2.moveTo(110, 130);
ctx2.lineTo(150, 80);
ctx2.lineTo(190, 130);

ctx2.closePath();

ctx2.fillStyle = "tomato";
ctx2.fill();

desenhar_quadrado(ctx2, 140, 150, 20, 50, "#6b3e15");

desenhar_quadrado(ctx2, 125, 150, 20, 20, "#5bc0ff");
desenhar_quadrado(ctx2, 165, 150, 20, 20, "#5bc0ff");

desenhar_quadrado(ctx2, 38, 160, 15, 40, "saddlebrown");

desenhar_arco(
  ctx2,
  45,
  145,
  28,
  0,
  Math.PI * 2,
  "forestgreen",
  "forestgreen"
);

desenhar_quadrado(ctx2, 260, 175, 15, 55, "saddlebrown");

desenhar_arco(
  ctx2,
  267,
  170,
  30,
  0,
  Math.PI * 2,
  "forestgreen",
  "forestgreen"
);