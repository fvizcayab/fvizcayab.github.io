//Hola
//Tutorial P5js
//P5js.org/reference
//Viernes 5 de agosto, 2016
//Taller 2ndo Semestre
//UDD, taller 16

//Elipse que siga al mouse

//en javascript
//vamos a usar varibales 
//el computador es capaz de almacenar datos
//lo podemos hacer en variables
//esto se llama DECLARAR
//asi se hace en javascript
var diametro;

//solo de despues de DECLARAR
//pueden darle un valor
//esto de llama ASIGNAR
diametro = 10;

//hay dos sabores de variables
//existen variables locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION
//LOCALES: DECLARADAS DENTRO DE FUNCION 

//globales: se pueden usar en cualquier parte
//mas facil al programar 
//mas dificil al corregir errores
//locales: solo dentro de la funcion 

//hablemos de funciones
//las funciones tambien se declaran
//luego de declararse, pueden llamarse
//asi se declaran una funcion en javascript
//Empieza abriendo la llave luego de declarar la funcion
function miFunctionBacan() {
  //esto es lo que hace la funcion
  //se le llama cuerpo
  //termina cerrando la llave
}

//ejecutar o llamar la funcion 
miFunctionBacan();

//Setup() se ejecuta solo una vez
function setup() {

  //camelCase, UPPERCASE, lowercase

  //crear lienzo para dibujar 
  //por defecto es blanco
  //createCanvas(dimHor, dimVer); 
  //dimensiones en px
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, redgreenblue, 0 nada, 255 todo
  //4: rgb + alpha
  //alpha: 0 es transparente, 255 es solido
  background(0, 35, 220, 40)
  
  //framRate (tasa de cuadros por segundo)
  frameRate(5);

  //variable local x
  var x
  x = 10

  //variable local y
  //modo rapido de DECLARAR
  //y asignar valor inmediatamente 
  var y = 10;
  //asignar otro valor
  y = 100;


  //No borrar las llaves 
}

//Draw() se ejecuta 60 veces/seg
function draw() {
  
  background(0, 35, (random(200)), 40)

  //condicional
  //if() {}
  if(true) { 
    //dibujamos muchas elipses
    muchasElipses(1000, 255);
  }
  
//declarar funcion nueva
//funcion para hacer muchas elipses
//en lugares aleatorios
//de colores aleatorios
muchasElipses();

function muchasElipses() {

  
  
  //for loop
  //(inicio; condicion; refresco) {}
  for (var i = 0; i < 5; i++) {
    //elipse en posicion leatoria
    //ellipse en posicion aleatoria
    ellipse(random(width), random(height), 100, 100);
  }

}

//declarar funcion nueva
//para dibujar elipse a mi gusto
function miElipse() {

  //definir ancho de borde
  //strokeWeight(px);
  strokeWeight(0);

  //definir color del borde
  //stroke(color);
  //para no dibujar el borde
  //noStroke()
  stroke(0, 0, 255, 255 / 3)

  //definir color del relleno
  //fill(color);
  fill(255, 0, 0);

  //dibujamos elipse
  //ellipse(posX, posY, width, height); 
  //ellipse(mouseX, mouseY, width, height) seguimiento del mouse
  //medidas en px 
  ellipse(mouseX, mouseY, 200, 100);

  //asignarle nuevo valor al diametro
  diametro = diametro + 1
    //diametro = random(100);
}

}
